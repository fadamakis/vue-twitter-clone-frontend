<script setup lang="ts">
defineProps(["trend", "index"]);
</script>

<template>
  <div class="trend">
    <div class="trend-title">{{ index + 1 }} · {{ trend.hashtag }}</div>
    <div class="trend-count">{{ trend.count }} posts</div>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  font-size: $font-size-0;
  color: #536471;
  margin-bottom: 16px;
}

.trend-title {
  font-size: $font-size-1;
  font-weight: bold;
  color: $color-dark;
}
</style>
