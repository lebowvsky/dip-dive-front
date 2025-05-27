<template>
  <div class="wrapper">
    <div class="content">
      <slot name="main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: start;

  .content {
    flex: 1;
    max-width: $content-width;
    padding: $s;
    background-color: color('primary', 90);
    border-radius: $s;
  }
}
</style>
