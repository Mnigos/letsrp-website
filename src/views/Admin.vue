<template>
  <div class="wrapper">
    <!-- <Login /> -->
    <AdminView />
  </div>
</template>

<script>
import Login from '../components/Login';
import AdminView from '../components/AdminView';

export default {
  name: 'Admin',
  components: {
    Login,
    AdminView,
  },
};
</script>
