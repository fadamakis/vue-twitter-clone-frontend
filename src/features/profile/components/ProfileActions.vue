<script setup lang="ts">
import ProfileEditButton from "./ProfileEditButton.vue";
import ProfileLogoutButton from "./ProfileLogoutButton.vue";
</script>

<template>
  <div class="profile-actions">
    <ProfileEditButton />   
    <ProfileLogoutButton />
  </div>
</template>

<style lang="scss" scoped>
.profile-actions {
  display: flex;
  gap: spacing(2);
}
</style>
