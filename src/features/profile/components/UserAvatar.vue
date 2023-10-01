<template>
  <img :src="img" alt="" class="profile-avatar" />
</template>

<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.profile-avatar {
  width: spacing(10);
  height: spacing(10);
  flex-shrink: 0;
  border-radius: $border-radius-circle;
  overflow: hidden;
}
</style>
