<script setup>
import { ref } from "vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendRow, trendsApiCall } from "@/features/widgets";

const response = ref();
response.value = await trendsApiCall();
</script>

<template>
  <PageTitle has-back-button>Trends</PageTitle>
  <div class="trends">
    <TrendRow v-for="(trend, index) in response.trends" :trend="trend" :index="index" />
  </div>
</template>

<style scoped lang="scss">
.trends {
  padding: spacing(4);
}
</style>
