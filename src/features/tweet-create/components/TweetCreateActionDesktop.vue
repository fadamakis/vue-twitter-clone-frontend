<script setup lang="ts">
const TweetCreateModal = defineAsyncComponent(
  () => import("@/features/tweet-create/components/TweetCreateModal.vue")
);
import { MqResponsive } from "vue3-mq";
import AppButton from "@/core-ui/components/AppButton.vue";
import AppIcon from "@/core-ui/components/AppIcon.vue";
import { ref, defineAsyncComponent } from "vue";
const modalVisible = ref(false);
</script>

<template>
  <AppButton class="button" @click="modalVisible = true">
    <MqResponsive target="xl+"> Post </MqResponsive>
    <MqResponsive target="lg-">
      <AppIcon icon="plus" size="3x" fill="white" />
    </MqResponsive>
  </AppButton>

  <TweetCreateModal v-if="modalVisible" @close="modalVisible = false" />
</template>

<style lang="scss" scoped>
.button {
  margin-top: spacing(3);
  width: 100%;
  padding: spacing(3);
}
</style>
