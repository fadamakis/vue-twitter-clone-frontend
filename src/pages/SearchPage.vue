<script setup>
import ThreeColumnLayout from "@/layouts/ThreeColumnLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import { WhoToFollowWidget, TrendsWidget } from "@/features/widgets";
import { SearchWidget } from "@/features/search";
import { TweetList } from "@/features/tweets";
import AppTabs from "@/components/AppTabs.vue";
import ProfileCard from "@/features/profile/components/ProfileCard.vue";
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <ThreeColumnLayout>
    <PageTitle>Search</PageTitle>
    <div class="search-wrapper">
      <SearchWidget />
    </div>
    <AppTabs :tabs="['Tweets', 'People']">
      <template #tab1> <TweetList /> </template>
      <template #tab2>
        <div class="profiles">
          <ProfileCard v-for="i in 5">
            <template #action>
              <AppButton size="sm" color="dark">Follow</AppButton>
            </template>
          </ProfileCard>
        </div>
      </template>
    </AppTabs>
    <template #sidebar>
      <TrendsWidget />
      <WhoToFollowWidget />
    </template>
  </ThreeColumnLayout>
</template>

<style lang="scss" scoped>
.search-wrapper {
  padding: spacing(3);
}
.profiles {
  padding: 0 spacing(4);
}
</style>
