<script setup>
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <SearchWidget v-if="route.meta?.sidebar.includes('SearchWidget')" />
  <TrendsWidget v-if="route.meta?.sidebar.includes('TrendsWidget')" />
  <WhoToFollowWidget v-if="route.meta?.sidebar.includes('WhoToFollowWidget')" />
</template>
