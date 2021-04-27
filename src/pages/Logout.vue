<template>
  logout
</template>

<script>
import config from "../constants/config";

export default {
  created() {
    const params = new URLSearchParams(window.location.search)
    const returnTo = params.get("return_to") || ""
    var endpoint = config.kratos.logoutPath;
    if(returnTo) {
      endpoint = endpoint + "?return_to=" + returnTo
    }
    window.location.href=endpoint;
  }
}
</script>