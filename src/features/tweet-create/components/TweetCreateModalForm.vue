<script setup>
import AppButton from "@/components/AppButton.vue";
import { UserAvatar } from "@/features/profile";
import TweetFormAdditionalActions from "./TweetFormAdditionalActions.vue";

const userInfo = {
  name: "John Doe",
  handle: "@johndoe",
  image: "https://i.pravatar.cc/150?img=68",
};
const emit = defineEmits(["posted"]);
</script>
<template>
  <div class="tweet-creation-form">
    <UserAvatar :img="userInfo.image" class="user-avatar" />

    <div class="tweet-creation-content">
      <textarea class="tweet-input" placeholder="What's happening?" rows="1" cols="50" />
      <div class="tweet-actions">
        <TweetFormAdditionalActions />
        <AppButton @click="emit('posted')">Post</AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-creation-form {
  display: flex;
  margin-top: spacing(4);
}

.tweet-creation-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.user-avatar {
  margin-right: spacing(3);
}

.tweet-input {
  width: 100%;
  border: none;
  font-size: $font-size-2;
  resize: none;
  outline: none;
  padding: spacing(1) 0;
}

.tweet-actions {
  display: flex;
  align-items: center;
}
.tweet-actions-buttons {
  display: flex;
  flex: 1;
  gap: 0 spacing(5);
  color: $color-gray;
  font-size: $font-size-2;
  fill: $color-primary;
}
</style>
