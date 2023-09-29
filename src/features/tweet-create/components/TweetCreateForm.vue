<script setup>
import AppIcon from "@/components/AppIcon.vue";
import AppButton from "@/components/AppButton.vue";
import { UserAvatar } from "@/features/profile";

const userInfo = {
  name: "John Doe",
  handle: "@johndoe",
  image: "https://i.pravatar.cc/150?img=68",
};
</script>
<template>
  <div class="tweet-creation-form">
    <UserAvatar :img="userInfo.image" class="user-avatar" />

    <div class="tweet-creation-content">
      <textarea class="tweet-input" placeholder="What's happening?" rows="1" cols="50" />
      <div class="tweet-actions">
        <div class="tweet-actions-buttons">
          <AppIcon icon="image" />
          <AppIcon icon="filetype-gif" />
          <AppIcon icon="list-ol" />
          <AppIcon icon="emoji-smile" />
          <AppIcon icon="calendar" />
        </div>
        <AppButton>Post</AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-creation-form {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(15, 20, 25, 0.1);
}

.tweet-creation-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.user-avatar {
  margin-right: 12px;
}

.tweet-input {
  width: 100%;
  border: none;
  font-size: 18px;
  resize: none;
  outline: none;
  padding: 6px 0;
}

.tweet-actions {
  display: flex;
  align-items: center;
}
.tweet-actions-buttons {
  display: flex;
  flex: 1;
  gap: 0 20px;
  color: #7a7a7a;
  font-size: 18px;
  fill: #33a1f2;
}
</style>
