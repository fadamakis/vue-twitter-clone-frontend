<script setup lang="ts">
import AppInput from "@/ui/components/AppInput.vue";
import AppIcon from "@/ui/components/AppIcon.vue";
</script>

<template>
  <div class="new-message">
    <AppInput placeholder="Send message...">
      <template #suffix>
        <AppIcon size="2x" icon="arrow-right-circle" />
      </template>
    </AppInput>
  </div>
</template>

<style lang="scss" scoped>
.new-message {
  padding: spacing(2) spacing(4);
  border-top: 1px solid $color-border;
}
</style>
