<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Settings
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        :action="passwordConfig.action"
        method="POST"
      >
        <div class="rounded-md shadow-sm -space-y-px">
          <div v-for="field in passwordConfig.fields" :key="field">
            <div>
              <label :for="field.name" class="sr-only">{{ field.name }}</label>
              <input
                :name="field.name"
                :type="field.type"
                :required="field.required"
                :value="field.value"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="field.name"
              />
            </div>
            <div
              v-for="message in field.messages"
              :key="message"
              class="text-red-500"
            >
              <span>{{ message.text }}</span>
            </div>
          </div>

          <div
            v-for="message in passwordConfig.messages"
            :key="message"
            class="text-red-500"
          >
            {{ message.text }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Update Password
          </button>
        </div>
      </form>

      <form class="mt-8 space-y-6" :action="profileConfig.action" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div v-for="field in profileConfig.fields" :key="field">
            <div>
              <label :for="field.name" class="sr-only">{{ field.name }}</label>
              <input
                :name="field.name"
                :type="field.type"
                :required="field.required"
                :value="field.value"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                :placeholder="field.name"
              />
            </div>
            <div
              v-for="message in field.messages"
              :key="message"
              class="text-red-500"
            >
              <span>{{ message.text }}</span>
            </div>
          </div>

          <div
            v-for="message in profileConfig.messages"
            :key="message"
            class="text-red-500"
          >
            {{ message.text }}
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/star -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </span>
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { initializeSettingsFlow } from "../api/kratos";

export default {
  setup() {},
  data() {
    return {
      passwordConfig: {},
      profileConfig: {},
    };
  },
  created() {
    initializeSettingsFlow()
      .then((response) => {
        this.passwordConfig = response.methods.password.config;
        this.profileConfig = response.methods.profile.config;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>