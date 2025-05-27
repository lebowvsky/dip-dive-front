<template>
  <aside class="sidebar">
    <ul class="sidebar__nav">
      <li class="sidebar__item"><v-icon name="ri-home-2-line" /><span>Accueil</span></li>
      <li class="sidebar__item"><v-icon name="ri-ship-line" /><span>plongées</span></li>
      <li class="sidebar__item"><v-icon name="ri-mail-line" /><span>contact</span></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  box-sizing: border-box;
  padding: $m;
  width: $sidebar-width;
  height: $sidebar-height;
  background-color: color('primary', 70);
  border-radius: 0 $s $s 0;

  &__nav {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $l;
  }

  &__item {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover {
      filter: opacity(55%);
    }

    span {
      font-size: $m;
    }
  }
}
</style>
