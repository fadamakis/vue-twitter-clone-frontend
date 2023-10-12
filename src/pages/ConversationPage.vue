<script setup>
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { ConversationSingle } from "@/features/messages";
</script>

<template>
  <TwoColumnLayout>
    <PageTitle>Conversation</PageTitle>
    <div class="content">
      <ConversationSingle class="conversation" />
    </div>
  </TwoColumnLayout>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex: 1;
}
</style>
