<script>
export default {
  name: "App",
};
</script>

<template>
  <component :is="$route.meta.layout">
    <router-view />
  </component>
</template>
