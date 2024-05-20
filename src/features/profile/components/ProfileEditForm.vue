<script setup>
import AppButton from "@/ui/components/AppButton.vue";
import AppInput from "@/ui/components/AppInput.vue";
import { UserAvatar, useProfile, profileUpdateApiCall } from "@/features/profile";
import ImageEditable from "./ImageEditable.vue";
import fallBackImage from "@/assets/images/default-cover.png";

const emit = defineEmits(["close"]);

const { profile } = useProfile();

async function updateProfile() {
  await profileUpdateApiCall(profile.value._id, {
    name: profile.value.name,
    bio: profile.value.bio,
    location: profile.value.location,
    website: profile.value.website,
  });
  emit("close");
}
</script>

<template>
  <ImageEditable>
    <img :src="profile.banner || fallBackImage" alt="" class="banner" />
  </ImageEditable>
  <div class="user-avatar-wrapper">
    <ImageEditable>
      <UserAvatar size="xl" :img="profile.avatar" class="avatar" />
    </ImageEditable>
  </div>

  <AppInput v-model="profile.name" placeholder="Full Name" required>
    <template #label> Full Name </template>
  </AppInput>
  <AppInput v-model="profile.bio" placeholder="Bio">
    <template #label> Bio </template>
  </AppInput>
  <AppInput v-model="profile.location" placeholder="Location">
    <template #label> Location </template>
  </AppInput>

  <AppInput v-model="profile.website" placeholder="Website">
    <template #label> Website </template>
  </AppInput>
  <div class="cta-button">
    <AppButton @click="updateProfile"> Save </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 200px;
  object-fit: cover;
  position: relative;
}

.user-avatar-wrapper {
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: spacing(-16) spacing(4) spacing(2);
}
.avatar {
  border: spacing(1) solid $color-white;
}
.cta-button {
  display: flex;
  justify-content: flex-end;
  margin-top: spacing(4);
}
</style>
