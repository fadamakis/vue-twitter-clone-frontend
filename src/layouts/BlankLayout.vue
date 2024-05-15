<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @include breakpoint(md) {
    flex-direction: row;
  }
}
</style>
