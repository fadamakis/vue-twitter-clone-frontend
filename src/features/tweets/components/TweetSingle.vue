<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { UserAvatar } from "@/features/profile";
const tweet = {
  user: {
    name: "Fotis Adamakis",
    handle: "@fadamakis",
    image: "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
  },
  body: "Hello World!",
  date: "16 April",
};
</script>

<template>
  <RouterLink to="/status/tweet" class="tweet">
    <UserAvatar :img="tweet.user.image" class="user-avatar" />
    <div class="tweet-content">
      <div class="tweet-info">
        <span class="tweet-info-name">{{ tweet.user.name }}</span>
        <span>{{ tweet.user.handle }}</span>
        <span>·</span>
        <span>{{ tweet.date }}</span>
      </div>
      <p class="tweet-body">
        {{ tweet.body }}
      </p>
      <div class="tweet-media" v-if="tweet.media">
        <img :src="tweet.media.src" alt="" />
      </div>
      <div class="tweet-actions">
        <AppIcon icon="chat" />
        <AppIcon icon="repeat" />
        <AppIcon icon="heart" />
        <AppIcon icon="bar-chart" />
        <AppIcon icon="share" />
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.tweet {
  display: flex;
  padding: spacing(4);
  color: $color-dark;
  border-bottom: 1px solid $color-border;
  &:hover {
    background-color: $color-light;
  }
}

.user-avatar {
  margin-right: spacing(3);
}

.tweet-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.tweet-info {
  display: flex;
  align-items: center;
  gap: 0 spacing(1);
  color: $color-gray;
  font-size: $font-size-0;
}

.tweet-info-name {
  font-size: $font-size-1;
  font-weight: bold;
  color: $color-dark;
}
.tweet-body {
  font-size: $font-size-0;
  line-height: 1.4;
  color: $color-dark;
}
.tweet-media {
  margin: spacing(3) 0;
  border-radius: $border-radius;
  overflow: hidden;
}

.tweet-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: spacing(3);
}
</style>
