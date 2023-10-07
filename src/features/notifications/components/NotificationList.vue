<script setup lang="ts">
import NotificationFollow from "./NotificationFollow.vue";
import NotificationLike from "./NotificationLike.vue";
import NotificationRepost from "./NotificationRepost.vue";
</script>
<template>
  <NotificationFollow v-for="i in 3" />
  <NotificationLike v-for="i in 3" />
  <NotificationRepost v-for="i in 3" />
</template>
