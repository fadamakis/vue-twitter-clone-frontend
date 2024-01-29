<script setup lang="ts">
import { AppWidget, TrendRow } from "@/features/widgets";
import fetch from "@/lib/fetch";
import { ref, onMounted } from "vue";
const response = ref();
onMounted(async () => {
  response.value = await fetch("/tweets/trends")
});
</script>

<template>
  <AppWidget title="Trends" v-if="response">
    <TrendRow v-for="(trend, index) in response.trends" :trend="trend" :index="index" />

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
