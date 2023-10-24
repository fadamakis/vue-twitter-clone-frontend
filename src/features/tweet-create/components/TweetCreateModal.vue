<script setup>
import AppModal from "@/components/AppModal.vue";
import { TweetCreateModalForm } from "@/features/tweet-create";

const emit = defineEmits(["close"]);
function closeModal() {
  emit("close");
}
</script>
<template>
  <AppModal @close="closeModal">
    <template #title> Post New Tweet </template>
    <template #body>
      <TweetCreateModalForm @posted="closeModal" />
    </template>
  </AppModal>
</template>
