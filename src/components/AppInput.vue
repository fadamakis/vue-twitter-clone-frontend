<script setup>
defineOptions({
  inheritAttrs: false,
});
defineProps({
  pill: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="input-wrapper">
    <input
      type="text"
      class="input"
      v-bind="$attrs"
      :class="{
        'has-prefix': $slots.prefix,
        'has-suffix': $slots.suffix,
        'has-label': $slots.label,
        pill,
      }"
    />
    <div class="label">
      <slot name="label" />
    </div>
    <div class="prefix">
      <slot name="prefix" />
    </div>
    <div class="suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  + .input-wrapper {
    margin-top: spacing(4);
  }
}
.input {
  width: 100%;
  background: $color-light;
  padding: spacing(2) spacing(5);
  outline: 0;
  border-radius: $border-radius-input;
  &.pill {
    border-radius: $border-radius-pill;
  }
  &.has-prefix {
    padding-left: spacing(12);
  }
  &.has-suffix {
    padding-right: spacing(12);
  }
  &.has-label {
    padding-top: spacing(6);
    &::placeholder {
      color: transparent;
    }
  }
}

.label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: spacing(4) spacing(5);
  pointer-events: none;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
.input.has-prefix ~ .label {
  left: spacing(7);
}

.input:focus ~ .label,
.input:not(:placeholder-shown) ~ .label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.prefix {
  position: absolute;
  top: 50%;
  left: spacing(4);
  transform: translateY(-50%);
}
.suffix {
  position: absolute;
  top: 50%;
  right: spacing(4);
  transform: translateY(-50%);
}
</style>
