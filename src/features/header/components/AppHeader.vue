<script setup lang="ts">
import { useMq } from "vue3-mq";
const mq = useMq();
import HeaderMobile from "./HeaderMobile.vue";
import HeaderDesktop from "./HeaderDesktop.vue";
</script>

<template>
  <component :is="mq.mdPlus ? HeaderDesktop : HeaderMobile" />
</template>
