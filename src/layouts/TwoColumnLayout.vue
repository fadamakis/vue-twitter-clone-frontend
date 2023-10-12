<script setup lang="ts">
import { AppHeader } from "@/features/header";
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @include breakpoint(md) {
    flex-direction: row;
  }
}

main {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-shrink: 0;
  border-right: 1px solid rgb(239, 243, 244);
  border-left: 1px solid rgb(239, 243, 244);
  padding-bottom: spacing(12);
  @include breakpoint(md) {
    padding-bottom: 0;
  }
}
</style>
