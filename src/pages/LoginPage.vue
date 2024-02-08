<script setup>
import BlankLayout from "@/layouts/BlankLayout.vue";
import { AuthContainer, LoginForm } from "@/features/auth";
</script>

<template>
  <BlankLayout>
    <AuthContainer>
      <template #title>Login with Twitter</template>
      <template #default><LoginForm /></template>
      <template #footer>
        New user? - <RouterLink to="/register">Register</RouterLink>
      </template>
    </AuthContainer>
  </BlankLayout>
</template>
