<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
</script>

<template>
  <RouterLink to="fadamakis" class="profile-summary">
    <UserAvatar
      size="lg"
      class="avatar"
      img="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg"
    />
    <strong class="name">Fotis Adamakis</strong>
    <div class="username">@fadamakis</div>
  </RouterLink>
</template>

<style scoped lang="scss">
.profile-summary {
  display: inline-flex;
  flex-direction: column;
  padding: spacing(5);
  align-items: center;
  border-bottom: 1px solid $color-border;
}
.avatar {
  margin-bottom: spacing(3);
}
.username {
  color: $color-gray;
  font-size: $font-size-0;
}
</style>
