<script setup>
import AppModal from "@/components/AppModal.vue";
import { TweetCreateModalForm } from "@/features/tweet-create";
</script>
<template>
  <AppModal>
    <template #trigger>
      <slot />
    </template>
    <template #title> Post New Tweet </template>
    <template #body="{ closeModal }">
      <TweetCreateModalForm @posted="closeModal" />
    </template>
  </AppModal>
</template>

<style lang="scss" scoped></style>
