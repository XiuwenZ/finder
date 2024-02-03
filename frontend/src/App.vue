<template>
  <div id="app">
    <router-view></router-view> <!-- This is where your components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App'
  // No need to import your components here; the router will handle it
};
</script>

<style>
/* Global styles */
</style>
