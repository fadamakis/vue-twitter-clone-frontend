<script setup lang="ts">
import { ref } from "vue";
import { ProfileCard, ProfileFollowButton } from "@/features/profile";
import { AppWidget, friendSuggestionsApiCall } from "@/features/widgets";

const response = ref();
response.value = await friendSuggestionsApiCall();
</script>

<template>
  <AppWidget title="Who to follow">
    <div>
      <ProfileCard v-for="profile in response" :profile="profile">
        <template #action>
          <ProfileFollowButton :profile="profile" />
        </template>
      </ProfileCard>
    </div>

    <RouterLink to="/connect" class="cta">Show more</RouterLink>
  </AppWidget>
</template>

<style lang="scss" scoped>
.cta {
  color: $color-primary;
  font-size: $font-size-0;
  font-weight: bold;
  margin-top: spacing(3);
  display: block;
}
</style>
