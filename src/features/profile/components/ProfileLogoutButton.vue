<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import router from "@/router";
import { useAuth } from "@/features/auth";

function logoutUser() {
  useAuth().logout();
}
</script>

<template>
  <AppButton color="light" size="sm" @click="logoutUser"> Logout </AppButton>
</template>
