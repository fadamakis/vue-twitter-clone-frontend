<script setup lang="ts">
import AppButton from "@/core-ui/components/AppButton.vue";
import { ProfileEditModal } from "@/features/profile";
import { ref } from "vue";

const modalVisible = ref(false);
</script>

<template>
  <AppButton color="dark" size="sm" @click="modalVisible = true">
    Edit Profile
  </AppButton>
  <ProfileEditModal v-if="modalVisible" @close="modalVisible = false" />
</template>
