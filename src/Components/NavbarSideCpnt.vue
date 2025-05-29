<template>
  <aside class="sidebar">
    <ul class="sidebar__nav">
      <li class="sidebar__item">
        <v-icon name="ri-home-2-line" scale="1.3" />
        <span>Accueil</span>
      </li>
      <li class="sidebar__item"><v-icon name="ri-ship-line" scale="1.3" /><span>plongées</span></li>
      <li class="sidebar__item"><v-icon name="ri-mail-line" scale="1.3" /><span>contact</span></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  box-sizing: border-box;
  padding: $xxl $m;
  width: $sidebar-width;
  height: $sidebar-height;
  background-color: color('primary', 70);
  border-radius: 0 $s $s 0;

  &__nav {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: $xl;
  }

  &__item {
    box-sizing: border-box;
    display: flex;
    gap: $xs;
    align-items: end;
    font-size: $xl;
    cursor: pointer;

    &:hover {
      filter: opacity(55%);
    }

    span {
      font-size: $font-size-s;
    }
  }
}
</style>
