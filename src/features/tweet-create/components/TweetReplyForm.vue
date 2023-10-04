<script setup lang="ts">
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
      <textarea class="tweet-input" placeholder="Post your reply..." rows="1" cols="50" />
      <div class="tweet-actions">
        <div class="tweet-actions-buttons" v-if="false">
          <AppIcon icon="image" />
          <AppIcon icon="filetype-gif" />
          <AppIcon icon="list-ol" />
          <AppIcon icon="emoji-smile" />
          <AppIcon icon="calendar" />
        </div>
        <AppButton size="sm">Reply</AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-creation-form {
  display: flex;
  padding: spacing(2) spacing(4);
  border-bottom: 1px solid $color-border;
}

.tweet-creation-content {
  display: flex;
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
