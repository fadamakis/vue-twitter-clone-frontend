<script setup>
import { ProfileSummary } from "@/features/profile";
import { MessageList, MessageCreate } from "@/features/messages";
</script>

<template>
  <div class="conversation">
    <ProfileSummary />
    <MessageList />
    <MessageCreate />
  </div>
</template>

<style lang="scss" scoped>
.conversation {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
