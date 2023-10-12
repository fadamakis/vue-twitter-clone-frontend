<script setup lang="ts">
import AppFooter from "@/components/AppFooter.vue";
import { AppHeader } from "@/features/header";
import { useMq } from "vue3-mq";
const mq = useMq();
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <slot />
    </main>

    <aside v-if="mq.mdPlus">
      <slot name="sidebar" />
      <AppFooter />
    </aside>
  </div>
</template>

<style scoped lang="scss">
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
  border-right: 1px solid rgb(239, 243, 244);
  border-left: 1px solid rgb(239, 243, 244);
  padding-bottom: spacing(12);
  @include breakpoint(md) {
    padding-bottom: 0;
  }
}

aside {
  width: 30%;
  padding: spacing(3);
}
</style>
