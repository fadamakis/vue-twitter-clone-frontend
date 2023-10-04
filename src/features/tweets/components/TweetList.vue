<script setup>
import { TweetSingle } from "@/features/tweets";
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
    body: "Hello World with image!",
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
    <TweetSingle :key="index" v-for="(tweet, index) in tweets" :tweet="tweet" />
  </div>
</template>

<style lang="scss" scoped>
.tweet-list {
  display: flex;
  flex-direction: column;
}
</style>
