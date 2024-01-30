<script setup>
import { ref } from "vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendRow, trendsApiCall } from "@/features/widgets";
import { SearchWidget } from "@/features/search";

const response = ref();
response.value = await trendsApiCall();
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Trends</PageTitle>
    <div class="trends">
      <TrendRow v-for="(trend, index) in response.trends" :trend="trend" :index="index" />
    </div>
    <template #sidebar>
      <SearchWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style scoped lang="scss">
.trends {
  padding: spacing(4);
}
</style>
