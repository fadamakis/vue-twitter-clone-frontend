<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="app-widget">
    <h3 class="app-widget-title" v-if="title">{{ title }}</h3>
    <div class="app-widget-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-widget {
  background-color: $color-light;
  border-radius: $border-radius;
  padding: spacing(4);
  margin: spacing(4) 0;
  overflow: hidden;
}
.app-widget-title {
  font-size: $font-size-2;
  font-weight: bold;
  margin-bottom: spacing(4);
}
</style>
