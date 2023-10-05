<script setup>
import TwoColumnLayout from "@/layouts/TwoColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <TwoColumnLayout>
    <p class="content">
      Hmm...this page doesn’t exist. Try searching for something else.
      <AppButton size="sm">Search</AppButton>
    </p>
  </TwoColumnLayout>
</template>

<style lang="scss" scoped>
.content {
  font-size: $font-size-2;
  color: $color-dark;
  padding: spacing(3);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: spacing(3);
  margin-top: spacing(30);
}
</style>
