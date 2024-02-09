<script setup>
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import AppNotification from "@/components/AppNotification.vue";
import { ref, reactive } from "vue";
import { registerApiCall, useAuth } from "@/features/auth";

import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = reactive({
  name: "",
  username: "",
  email: "",
  password: "",
});

const formError = ref({});

async function handleSubmit() {
  try {
    const response = await registerApiCall(userInfo);
    useAuth().setUser(response.user);
    router.push(response.user.username);
    localStorage.setItem("token", response.token);
    formError.value = {};
  } catch (error) {
    formError.value = error.response.data;
  }
}
</script>

<template>
  <AppNotification v-if="formError.message" type="error">
    {{ formError.message }}
  </AppNotification>

  <form @submit.prevent="handleSubmit">
    <AppInput
      v-model="userInfo.name"
      placeholder="Full Name"
      required
      :has-error="formError.fields?.includes('name')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="person-vcard" />
      </template>
      <template #label> Full Name </template>
    </AppInput>

    <AppInput
      v-model="userInfo.username"
      placeholder="Username"
      required
      :has-error="formError.fields?.includes('username')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="person" />
      </template>
      <template #label> Username </template>
    </AppInput>
    <AppInput
      v-model="userInfo.email"
      placeholder="email"
      type="email"
      required
      :has-error="formError.fields?.includes('email')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="envelope-at" />
      </template>
      <template #label> Email </template>
    </AppInput>
    <AppInput
      v-model="userInfo.password"
      placeholder="password"
      type="password"
      :has-error="formError.fields?.includes('password')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="key" />
      </template>
      <template #label> Password </template>
    </AppInput>

    <div class="cta-button">
      <AppButton size="lg" type="submit" full-width> Sign up </AppButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.cta-button {
  margin-top: spacing(5);
}
</style>
