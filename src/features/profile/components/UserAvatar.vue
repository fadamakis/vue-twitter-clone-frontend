<template>
  <img :src="img" alt="" class="profile-avatar" :class="size" />
</template>

<script setup lang="ts">
import defaultAvatar from "@/assets/images/default-avatar.webp";
import { PropType } from "vue";
enum sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

defineProps({
  size: {
    type: String as PropType<keyof typeof sizes>,
    default: "md",
  },
  img: {
    type: String,
    default: defaultAvatar,
  },
});
</script>

<style lang="scss" scoped>
.profile-avatar {
  width: spacing(10);
  height: spacing(10);
  flex-shrink: 0;
  border-radius: $border-radius-circle;
  overflow: hidden;
  &.sm {
    width: spacing(8);
    height: spacing(8);
  }
  &.md {
    width: spacing(10);
    height: spacing(10);
  }
  &.lg {
    width: spacing(16);
    height: spacing(16);
  }
  &.xl {
    width: spacing(32);
    height: spacing(32);
  }
}
</style>
