<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
defineProps(["profile"]);
</script>

<template>
  <div class="profile-card">
    <UserAvatar :img="profile.avatar" />
    <div class="profile-card-user-info">
      <p class="profile-card-name">{{ profile.name }}</p>
      <p class="profile-card-username">@{{ profile.username }}</p>
    </div>
    <slot name="action" />
  </div>
</template>

<style scoped lang="scss">
.profile-card {
  margin-top: spacing(5);
  display: flex;
  align-items: center;
}

.profile-card-user-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: $font-size-0;
  margin-left: spacing(3);
  padding-right: spacing(3);
  color: $color-dark;
}

.profile-card-name {
  font-weight: bold;
}

.profile-card-username {
  color: $color-gray;
}
</style>
