<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import { ProfileEditModal } from "@/features/profile";
import { ref } from "vue";

const modalVisible = ref(false);
</script>

<template>
  <AppButton
    color="light"
    size="sm"
    class="edit-profile-button"
    @click="modalVisible = true"
  >
    Edit Profile
  </AppButton>
  <ProfileEditModal v-if="modalVisible" @close="modalVisible = false" />
</template>
