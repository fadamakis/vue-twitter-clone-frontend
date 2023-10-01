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

    <div class="cta">Show more</div>
  </AppWidget>
</template>

<style lang="scss" scoped>
.cta {
  color: #1da1f2;
  font-size: 13px;
  font-weight: bold;
  margin-top: 12px;
}
</style>
