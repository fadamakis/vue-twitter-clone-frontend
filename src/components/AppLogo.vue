<script setup lang="ts">
import AppIcon from "@/ui/components/AppIcon.vue";
import { useMq } from "vue3-mq";
const mq = useMq();
</script>

<template>
  <AppIcon icon="twitter" :size="mq.xlPlus ? '5x' : '3x'" class="logo" />
</template>

<style lang="scss">
.logo {
  margin: 0 spacing(3);
}
</style>
