<script setup>
import { AuthContainer, RegisterForm } from "@/features/auth";
</script>

<template>
  <AuthContainer>
    <template #title>Sign up with Twitter</template>
    <template #default><RegisterForm /></template>
    <template #footer>
      Already have an account? - <RouterLink to="/login">Login</RouterLink>
    </template>
  </AuthContainer>
</template>
