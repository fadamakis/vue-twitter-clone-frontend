<template>
  <button class="button" :class="[size, color]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType } from "vue";

enum sizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

enum colors {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  danger = "danger",
  light = "light",
  dark = "dark",
}

defineProps({
  size: {
    type: String as PropType<keyof typeof sizes>,
    default: sizes.md,
  },
  color: {
    type: String as PropType<keyof typeof colors>,
    default: colors.primary,
  },
});
</script>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #33a1f2;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  &:hover {
    background: #1b95e0;
  }
  &.sm {
    padding: 8px 16px;
    font-size: 14px;
  }
  &.md {
    padding: 12px 32px;
    font-size: 16px;
  }
  &.lg {
    padding: 16px 40px;
    font-size: 18px;
  }
  &.xl {
    padding: 20px 48px;
    font-size: 20px;
  }

  &.primary {
    background: #33a1f2;
    &:hover {
      background: #1b95e0;
    }
  }
  &.secondary {
    background: #8899a6;
    &:hover {
      background: #697787;
    }
  }
  &.success {
    background: #2dca73;
    &:hover {
      background: #24b164;
    }
  }
  &.danger {
    background: #e0245e;
    &:hover {
      background: #c81e51;
    }
  }
  &.light {
    background: #f5f8fa;
    color: #14171a;
    &:hover {
      background: #e8f0f3;
    }
  }
  &.dark {
    background: #14171a;
    &:hover {
      background: #0d1117;
    }
  }
}
</style>
