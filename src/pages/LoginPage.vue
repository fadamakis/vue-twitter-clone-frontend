<script setup>
import { AuthContainer, LoginForm } from "@/features/auth";
</script>

<template>
  <AuthContainer>
    <template #title>Login with Twitter</template>
    <template #default><LoginForm /></template>
    <template #footer>
      New user? - <RouterLink to="/register">Register</RouterLink>
    </template>
  </AuthContainer>
</template>
