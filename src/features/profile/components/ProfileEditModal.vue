<script setup>
import AppModal from "@/ui/components/AppModal.vue";
import ProfileEditForm from "./ProfileEditForm.vue";
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>
<template>
  <AppModal @close="closeModal">
    <template #title> Edit Profile </template>
    <template #body> <ProfileEditForm @close="closeModal" /> </template>
  </AppModal>
</template>
