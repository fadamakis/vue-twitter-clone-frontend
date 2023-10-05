<script setup lang="ts"></script>

<template>
  <div class="new-message">
    <input type="text" placeholder="Send message..." class="new-message-input" />
  </div>
</template>

<style lang="scss" scoped>
.new-message {
  padding: spacing(2) spacing(4);
  border-top: 1px solid $color-border;
}

.new-message-input {
  width: 100%;
  border: none;
  outline: none;
  font-size: $font-size-1;
  padding: spacing(3);
  border-radius: $border-radius;
  background: $color-light;
}
</style>
