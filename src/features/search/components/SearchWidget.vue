<script setup lang="ts"></script>

<template>
  <input type="search" name="search" placeholder="Search" class="search-input" />
</template>

<style lang="scss" scoped>
.search-input {
  width: 100%;
  margin-top: spacing(3);
  background: $color-light;
  padding: spacing(3) spacing(5);
  border-radius: $border-radius-pill;
  outline: 0;
}
</style>
