<script setup lang="ts">
import AvatarCpnt from './AvatarCpnt.vue';
</script>

<template>
  <header class="header">
    <p class="header__logo">DipDive</p>
    <AvatarCpnt />
  </header>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: $navbar-height;
  background-color: color('primary', 50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $l $xxl $l $l;
}
</style>
