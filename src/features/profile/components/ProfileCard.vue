<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
</script>

<template>
  <a href="#" class="profile-card">
    <UserAvatar
      img="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg"
    />
    <div class="profile-card-user-info">
      <p class="profile-card-name">Fotis Adamakis</p>
      <p class="profile-card-username">@fadamakis</p>
    </div>
    <slot name="action" />
  </a>
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
