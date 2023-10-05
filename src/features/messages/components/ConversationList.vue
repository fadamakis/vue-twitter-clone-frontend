<script setup>
import { UserAvatar } from "@/features/profile";
</script>

<template>
  <div>
    <div class="conversation" v-for="i in 10">
      <UserAvatar
        img="https://pbs.twimg.com/profile_images/1263362878922469376/KdZALDFP_normal.jpg"
      />
      <div class="message-content">
        <div class="message-info">
          <strong>Fotis Adamakis</strong>
          <span> · </span>
          <span>April 16</span>
        </div>
        <div class="message-preview">Lorem Ipsum</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conversation {
  display: flex;
  padding: spacing(3);
  gap: spacing(3);
  align-items: center;
  border-bottom: 1px solid $color-border;
  cursor: pointer;
  &:hover {
    background-color: $color-light;
  }
}
.message-content {
  display: flex;
  flex-direction: column;
  font-size: $font-size-0;
  flex: 1;
}

.message-preview {
  color: $color-gray;
}
</style>
