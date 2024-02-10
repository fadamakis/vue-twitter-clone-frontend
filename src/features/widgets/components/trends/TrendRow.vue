<script setup lang="ts">
defineProps(["trend", "index"]);
</script>

<template>
  <RouterLink :to="{ path: '/search', query: { q: trend.hashtag } }" class="trend">
    <div class="trend-title">{{ index + 1 }} · {{ trend.hashtag }}</div>
    <div class="trend-count">{{ trend.count }} posts</div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.trend {
  display: block;
  font-size: $font-size-0;
  color: $color-gray;
  margin-bottom: spacing(4);
}

.trend-title {
  font-size: $font-size-1;
  font-weight: bold;
  color: $color-dark;
}
</style>
