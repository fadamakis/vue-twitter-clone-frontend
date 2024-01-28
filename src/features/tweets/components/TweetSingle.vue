<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { UserAvatar } from "@/features/profile";
import { useTimeAgo } from "@vueuse/core";

defineProps(["tweet"]);
</script>

<template>
  <RouterLink :to="`/status/${tweet._id}`" class="tweet">
    <RouterLink :to="`/${tweet.owner.username}`">
      <UserAvatar :img="tweet.owner.avatar" class="user-avatar" />
    </RouterLink>
    <div class="tweet-content">
      <div class="tweet-info">
        <RouterLink :to="`/${tweet.owner.username}`" class="tweet-info-name">{{
          tweet.owner.name
        }}</RouterLink>
        <RouterLink :to="`/${tweet.owner.username}`"
          >{{ tweet.owner.username }}</RouterLink
        >
        <span>·</span>
        <span>{{ useTimeAgo(tweet.date).value }}</span>
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
