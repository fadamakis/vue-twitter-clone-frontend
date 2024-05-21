<script setup lang="ts">
import AppIcon from "@/core-ui/components/AppIcon.vue";
import { PropType } from "vue";

enum types {
  default = "default",
  success = "success",
  error = "error",
}

defineProps({
  type: {
    type: String as PropType<keyof typeof types>,
    default: types.default,
  },
});
</script>

<template>
  <div class="notification" :class="[type]">
    <AppIcon icon="info-circle-fill" fill="white" size="lg" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: center;
  gap: spacing(2);
  background: $color-primary;
  color: $color-white;
  margin-bottom: spacing(4);
  padding: spacing(4);
  border-radius: $border-radius-input;
  &.error {
    background: $color-danger;
  }
  &.success {
    background: $color-success;
  }
}
</style>
