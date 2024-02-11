<script setup>
import AppModal from "@/components/AppModal.vue";
import TweetCreateForm from "@/features/tweet-create/components/TweetCreateForm.vue";

const emit = defineEmits(["close"]);
function closeModal() {
  emit("close");
}
</script>
<template>
  <AppModal @close="closeModal">
    <template #title> Post New Tweet </template>
    <template #body>
      <TweetCreateForm @posted="closeModal" />
    </template>
  </AppModal>
</template>
