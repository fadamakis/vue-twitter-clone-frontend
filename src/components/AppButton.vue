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

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $color-primary;
  color: $color-light;
  border: none;
  border-radius: $border-radius-pill;
  font-weight: bold;
  cursor: pointer;
  outline: 0;
  &.sm {
    padding: spacing(2) spacing(4);
    font-size: 14px;
  }
  &.md {
    padding: spacing(3) spacing(8);
    font-size: 16px;
  }
  &.lg {
    padding: spacing(4) spacing(10);
    font-size: 18px;
  }
  &.xl {
    padding: spacing(5) spacing(12);
    font-size: 20px;
  }
  &.primary {
    background: $color-primary;
    &:hover {
      background: $color-primary-hover;
    }
  }
  &.secondary {
    background: $color-secondary;
    &:hover {
      background: $color-secondary-hover;
    }
  }
  &.success {
    background: $color-success;
    &:hover {
      background: $color-success-hover;
    }
  }
  &.danger {
    background: $color-danger;
    &:hover {
      background: $color-danger-hover;
    }
  }
  &.light {
    background: $color-light;
    color: $color-dark;
    &:hover {
      background: $color-light-hover;
    }
  }
  &.dark {
    background: $color-dark;
    &:hover {
      background: $color-dark-hover;
    }
  }
}
</style>
