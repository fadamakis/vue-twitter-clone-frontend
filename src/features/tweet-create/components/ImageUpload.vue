<template>
  <label for="file-input">
    <slot />
  </label>
  <input id="file-input" class="file-input" type="file" @change="handleFileChange" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImageUpload } from "../composables/useImageUpload";

const { file } = useImageUpload();

function handleFileChange(event) {
  const files = event.target.files;
  if (files.length > 0) {
    file.value = files[0];
  }
}
</script>

<style lang="scss" scoped>
.file-input {
  display: none;
}
</style>
