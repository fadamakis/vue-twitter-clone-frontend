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
  background-color: #f5f8fa;
  border-radius: 15px;
  padding: 15px;
  margin: 15px 0;
}
.app-widget-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
