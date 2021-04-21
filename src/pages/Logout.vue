<template>
  logout
</template>

<script>
import config from "../constants/config";

export default {
  created() {
    let endpoint = config.kratos.browser+config.kratos.logoutPath;
    window.location.href=endpoint;
  }
}
</script>