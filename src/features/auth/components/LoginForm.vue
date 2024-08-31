<script setup>
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import AppNotification from "@/components/AppNotification.vue";
import { ref, reactive } from "vue";
import { loginApiCall, useAuth } from "@/features/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const { setUser } = useAuth();

const userInfo = reactive({
  username: "",
  password: "",
});

const formError = ref({});

async function handleSubmit() {
  try {
    const response = await loginApiCall(userInfo);
    setUser(response.user);
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
      v-model="userInfo.username"
      placeholder="Username"
      name="username"
      autocomplete="username"
      required
      :has-error="formError.fields?.includes('username')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="person" />
      </template>
      <template #label> Username </template>
    </AppInput>
    <AppInput
      v-model="userInfo.password"
      placeholder="password"
      type="password"
      name="password"
      autocomplete="current-password"
      :has-error="formError.fields?.includes('password')"
    >
      <template #prefix>
        <AppIcon size="2x" icon="key" />
      </template>
      <template #label> Password </template>
    </AppInput>

    <div class="cta-button">
      <AppButton size="lg" type="submit" full-width> Login </AppButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.cta-button {
  margin-top: spacing(5);
}
</style>
