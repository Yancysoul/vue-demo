<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
@import url('./assets/css/reset.css');
</style>
