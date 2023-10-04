<script setup lang="ts">
import { AppWidget } from "@/features/widgets";
import AppButton from "@/components/AppButton.vue";
import ProfileCard from "@/features/profile/components/ProfileCard.vue";
</script>

<template>
  <AppWidget title="Who to follow">
    <div>
      <ProfileCard v-for="i in 5">
        <template #action>
          <AppButton size="sm" color="dark">Follow</AppButton>
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
