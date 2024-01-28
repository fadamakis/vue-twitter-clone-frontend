<script setup lang="ts">
import { AppWidget, TrendRow } from "@/features/widgets";
import fetch from '@/lib/fetch'
const { data } = fetch('/tweets/trends').json()
</script>

<template>
  <AppWidget title="Trends">
    <TrendRow v-for="(trend, index) in data?.trends" :trend="trend" :index="index" />

    <RouterLink to="/trends" class="cta">Show more</RouterLink>
  </AppWidget>
</template>

<style lang="scss" scoped>
.cta {
  color: $color-primary;
  font-size: $font-size-0;
  font-weight: bold;
  margin-top: spacing(3);
}
</style>
