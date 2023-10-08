<script setup>
import AppModal from "@/components/AppModal.vue";
import ProfileEditForm from "./ProfileEditForm.vue";
</script>
<template>
  <AppModal>
    <template #trigger>
      <slot />
    </template>
    <template #title> Edit Profile </template>
    <template #body="{ closeModal }"> <ProfileEditForm @close="closeModal" /> </template>
  </AppModal>
</template>
