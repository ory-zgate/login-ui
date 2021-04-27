import { LoginFlow, PublicApi, Configuration } from "@ory/kratos-client";
import config from "../constants/config";


const publicApi = new PublicApi(
  new Configuration({
    basePath: config.kratos.public,
    baseOptions: { withCredentials: true }
  }));

export const initializeFlow = ({ type }: { type: "login" | "register" | "settings" }): Promise<LoginFlow> => {
  const endpoints = {
    login: `${config.kratos.initLoginPath}`,
    register: `${config.kratos.initRegistrationPath}`,
    settings: `${config.kratos.initSettingsPath}`
  }

  return new Promise((resolve, reject) => {
    const params = new URLSearchParams(window.location.search)
    const flow = params.get("flow") || ""
    const returnTo = params.get("return_to") || ""
    var endpoint = endpoints[type]
    if (returnTo) {
      endpoint = endpoint + "?return_to=" + returnTo
    }

    // Ensure request exists in params.
    if (!flow) return window.location.href = endpoint

    let authRequest: Promise<any> | undefined
    if (type === "login") authRequest = publicApi.getSelfServiceLoginFlow(flow)
    if (type === "register") authRequest = publicApi.getSelfServiceRegistrationFlow(flow)
    if (type === "settings") authRequest = publicApi.getSelfServiceSettingsFlow(flow)

    if (!authRequest) return reject()

    authRequest.then(({ status, data: body, ...response }) => {
      if (status !== 200) return reject(body)
      resolve(body)
    }).catch(error => {
      return window.location.href = endpoint
    })
  })
}

export const initializeLoginFlow = () => initializeFlow({type: "login"});
export const initializeRegisterFlow = () => initializeFlow({type: "register"});
export const initializeSettingsFlow = () => initializeFlow({type: "settings"});
  
export const checkSessionValid = () => {
  return publicApi.whoami();
}

