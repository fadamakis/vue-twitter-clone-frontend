<script setup lang="ts">
import { computed } from "vue";
import ThreeColumnLayout from "@/layouts//ThreeColumnLayout.vue";
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";
import BlankLayout from "@/layouts//BlankLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const layout = computed(() => layouts[route.meta.layout as string] || ThreeColumnLayout);

const layouts = {
  BlankLayout,
  ThreeColumnLayout,
  TwoColumnLayout,
};
</script>

<template>
  <component :is="layout" />
</template>
