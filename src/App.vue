<script lang="ts" setup>
import HeaderCpnt from '@/Components/HeaderCpnt.vue';
import NavbarSideCpnt from './Components/NavbarSideCpnt.vue';
</script>

<template>
  <HeaderCpnt />
  <main class="main">
    <NavbarSideCpnt />
    <router-view />
  </main>
</template>
<style lang="scss">
body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
}

.main {
  box-sizing: border-box;
  padding: $main-padding;
  display: flex;
  gap: $s;
}
</style>
