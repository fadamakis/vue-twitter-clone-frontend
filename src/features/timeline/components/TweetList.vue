<script setup>
import AppIcon from "@/components/AppIcon.vue";
import { UserAvatar } from "@/features/profile";
const tweets = [
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    date: "16 April",
  },
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    media: {
      src:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*X2J_rGWvaf0yQ4avdKAEJw.png",
    },
    date: "16 April",
  },
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    date: "16 April",
  },
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    date: "16 April",
  },
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    date: "16 April",
  },
  {
    user: {
      name: "Fotis Adamakis",
      handle: "@fadamakis",
      image:
        "https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg",
    },
    body: "Hello World!",
    date: "16 April",
  },
];
</script>

<template>
  <div class="tweet-list">
    <a href="" class="tweet" v-for="tweet in tweets">
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
    </a>
  </div>
</template>

<style lang="scss" scoped>
.tweet-list {
  display: flex;
  flex-direction: column;
}

.tweet {
  display: flex;
  padding: 20px;
  color: rgba(15, 20, 25, 1);
  border-bottom: 1px solid rgba(15, 20, 25, 0.1);
}

.user-avatar {
  margin-right: 12px;
}

.tweet-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.tweet-info {
  display: flex;
  align-items: center;
  gap: 0 4px;
  color: #7a7a7a;
  font-size: 15px;
}

.tweet-info-name {
  font-size: 16px;
  font-weight: bold;
  color: rgba(15, 20, 25, 1);
}
.tweet-body {
  color: rgb(15, 20, 25);
  font-size: 15px;
  line-height: 1.4;
}
.tweet-media {
  margin: 12px 0;
  border-radius: 14px;
  overflow: hidden;
}

.tweet-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
