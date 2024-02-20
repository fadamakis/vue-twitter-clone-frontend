<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { ConversationSingle } from "@/features/messages";
</script>

<template>
  <PageTitle>Conversation</PageTitle>
  <div class="content">
    <ConversationSingle class="conversation" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
}
</style>
