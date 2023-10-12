<script setup>
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { ConversationList, ConversationSingle } from "@/features/messages";
import { useMq } from "vue3-mq";
const mq = useMq();
</script>

<template>
  <TwoColumnLayout>
    <PageTitle>Messages</PageTitle>
    <div class="content">
      <ConversationList class="conversation-list" />
      <ConversationSingle v-if="mq.mdPlus" class="conversation" />
    </div>
  </TwoColumnLayout>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
}

.conversation-list {
  flex: 1;
  height: 100%;
}

.conversation {
  flex: 3;
  border-left: 1px solid $color-border;
  height: 100%;
}
</style>
