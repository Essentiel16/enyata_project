<template>
  <div id="app">
    <div id = "nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/assessment">Assessment</router-link> |
      <router-link to="/successful">Successful</router-link> |
      <router-link to="/application">Create Application</router-link> |
      <router-link to="/compose">Compose Assessment</router-link> |
      <router-link to="/forget">Forget Password</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/history">History</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
</style>
