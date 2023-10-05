<script setup>
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { ConversationList, ConversationSingle } from "@/features/messages";
</script>

<template>
  <TwoColumnLayout>
    <PageTitle>Messages</PageTitle>
    <div class="content">
      <ConversationList class="conversation-list" />
      <ConversationSingle class="conversation" />
    </div>
  </TwoColumnLayout>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
}

.conversation-list {
  flex-basis: 30%;
  border-right: 1px solid $color-border;
  height: 100%;
}
</style>
