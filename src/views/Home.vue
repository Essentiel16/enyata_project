<template>
  <div class="home">
    <UserSignup/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserSignup from '@/components/UserSignup.vue';

export default {
  name: 'Home',
  components: {
    UserSignup,
  },
};
</script>
