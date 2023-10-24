<script setup lang="ts">
import UserAvatar from "./UserAvatar.vue";
import ProfileEditButton from "./ProfileEditButton.vue";
</script>

<template>
  <img
    src="https://pbs.twimg.com/profile_banners/525193422/1633505307/600x200"
    alt=""
    class="banner"
  />
  <div class="user-avatar-wrapper">
    <UserAvatar
      size="xl"
      img="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_400x400.jpg"
      class="avatar"
    />
    <ProfileEditButton />
  </div>
  <div class="user-info">
    <div class="fullname">Fotis Adamakis</div>
    <div class="username">@fadamakis</div>
    <div class="bio">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti
      laboriosam eligendi. Incidunt dolores dicta veritatis. Quaerat ad, magnam esse, illo
      atque delectus minus, nihil adipisci tempora nobis iusto. Excepturi?
    </div>
    <div class="audience-info">
      <RouterLink to="/fadamakis/following" class="audience-info-item">
        <strong>12</strong> Following
      </RouterLink>
      <RouterLink to="/fadamakis/followers" class="audience-info-item">
        <strong>31</strong> Followers
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
