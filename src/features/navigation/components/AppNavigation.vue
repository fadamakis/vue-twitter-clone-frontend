<script setup lang="ts">
import { useMq } from "vue3-mq";
const mq = useMq();
import NavigationMobile from "./NavigationMobile.vue";
import NavigationDesktop from "./NavigationDesktop.vue";
</script>

<template>
  <component :is="mq.mdPlus ? NavigationDesktop : NavigationMobile" />
</template>
