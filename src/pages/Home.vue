<template>
  <main>
    <div class="bg-gray-50">
      <div class="flex items-center justify-center">
        <div v-if="authed">
          You are logined as {{username}}.
        </div>
        <div class="flex rounded-md shadow">
          <router-link
            v-if="!authed"
            to="/auth/login"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
            Login
          </router-link>
          <router-link
            v-if="!authed"
            to="/auth/registration"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
            Registration
          </router-link>
          <router-link
            v-if="authed"
            to="/auth/logout"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
            Logout
          </router-link>
          <router-link
            v-if="authed"
            to="/auth/settings"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
            Settings
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { checkSessionValid } from '../api/kratos';

export default {
  data() {
    return {
      authed: false,
      username: ''
    }
  },
  created() {
    checkSessionValid().then(({data: info}) => {
      this.authed = info.active;
      this.username = info.identity.traits.username;
    }).catch(error => {
      console.log(error);
    });
  },
}
</script>