<script setup lang="ts">
import AppIcon from "@/ui/components/AppIcon.vue";
import AppButton from "@/ui/components/AppButton.vue";
import { TweetCreateModal } from "@/features/tweet-create";
import { ref } from "vue";
const modalVisible = ref(false);
</script>

<template>
  <AppButton class="button" @click="modalVisible = true">
    <AppIcon icon="plus" size="4x" fill="white" />
  </AppButton>

  <TweetCreateModal v-if="modalVisible" @close="modalVisible = false" />
</template>

<style lang="scss" scoped>
.button {
  position: fixed;
  bottom: spacing(18);
  right: spacing(3);
  padding: spacing(3);
}
</style>
