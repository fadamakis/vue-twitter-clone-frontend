<script setup lang="ts">
import AppIcon from "@/components/AppIcon.vue";
import AppInput from "@/components/AppInput.vue";
</script>

<template>
  <AppInput name="search" placeholder="Search">
    <template #prefix>
      <AppIcon icon="search" />
    </template>
  </AppInput>
</template>
