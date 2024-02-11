<script setup>
import TweetCreateForm from "./TweetCreateForm.vue";
</script>
<template>
  <div class="tweet-creation-timeline-form">
    <TweetCreateForm />
  </div>
</template>

<style lang="scss" scoped>
.tweet-creation-timeline-form {
  padding: spacing(4);
  border-bottom: 1px solid $color-border;
}
</style>
