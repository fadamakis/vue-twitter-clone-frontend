<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
defineProps({
  hasBackButton: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="wrapper">
    <AppIcon
      v-if="hasBackButton"
      @click="$router.back()"
      icon="arrow-left-short"
      size="4x"
      clickable
    />
    <h1 class="page-title"><slot /></h1>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 0 spacing(2);
  padding: spacing(3);
  border-bottom: 1px solid $color-border;
}
.page-title {
  font-size: $font-size-3;
  font-weight: bold;
  padding: 0;
  @include breakpoint(md) {
    font-size: $font-size-4;
  }
}
</style>
