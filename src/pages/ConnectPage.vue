<script setup>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { TrendsWidget, friendSuggestionsApiCall } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { ProfileCard } from "@/features/profile";

const response = ref();
response.value = await friendSuggestionsApiCall(10);
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle has-back-button>Connect</PageTitle>

    <div class="page">
      <h3 class="page-title">Suggested for you</h3>

      <ProfileCard v-for="profile in response" :profile="profile">
        <template #action>
          <AppButton size="sm" color="dark">Follow</AppButton>
        </template>
      </ProfileCard>
    </div>

    <template #sidebar>
      <SearchWidget />
      <TrendsWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style lang="scss" scoped>
.page {
  padding: spacing(4);
}
.page-title {
  font-size: $font-size-2;
  font-weight: bold;
  margin-bottom: spacing(3);
}
</style>
