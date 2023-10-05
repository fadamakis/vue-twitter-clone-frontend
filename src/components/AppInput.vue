<script setup>
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="input-wrapper">
    <input
      type="text"
      class="input"
      v-bind="$attrs"
      :class="{ 'has-prefix': $slots.prefix, 'has-suffix': $slots.suffix }"
    />
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
}
.input {
  width: 100%;
  background: $color-light;
  padding: spacing(3) spacing(5);
  border-radius: $border-radius-pill;
  outline: 0;
  &.has-prefix {
    padding-left: spacing(12);
  }
  &.has-suffix {
    padding-right: spacing(12);
  }
}
.prefix {
  position: absolute;
  top: 50%;
  left: spacing(5);
  transform: translateY(-50%);
}
.suffix {
  position: absolute;
  top: 50%;
  right: spacing(5);
  transform: translateY(-50%);
}
</style>
