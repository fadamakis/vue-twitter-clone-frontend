<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
import ProfileActions from "./ProfileActions.vue";
import fallBackImage from "@/assets/images/default-cover.png";

defineProps(["profile"]);
</script>

<template>
  <img :src="profile.banner || fallBackImage" alt="" class="banner" />
  <div class="user-avatar-wrapper">
    <UserAvatar size="xl" :img="profile.avatar" class="avatar" />
    <ProfileActions />
  </div>
  <div class="user-info">
    <div class="fullname">{{ profile.name }}</div>
    <div class="username">@{{ profile.username }}</div>
    <div class="bio">
      {{ profile.bio }}
    </div>
    <div class="audience-info">
      <RouterLink to="/fadamakis/following" class="audience-info-item">
        <strong>{{ profile.following.length }}</strong> Following
      </RouterLink>
      <RouterLink to="/fadamakis/followers" class="audience-info-item">
        <strong>{{ profile.followers.length }}</strong> Followers
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  position: relative;
  padding: spacing(4);
  border-bottom: 1px solid $color-border;
}
.banner {
  width: 100%;
  height: 200px;
  object-fit: cover;
  z-index: -1;
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
  border: 4px solid $color-white;
}
.fullname {
  font-size: $font-size-3;
  font-weight: bold;
}
.username {
  color: $color-secondary;
}
.bio {
  margin-top: spacing(2);
  color: $color-secondary;
}
.audience-info {
  font-size: $font-size-0;
  margin-top: spacing(2);
  color: $color-gray;
  strong {
    color: $color-dark;
  }
  .audience-info-item {
    margin-right: spacing(4);
  }
}
</style>
