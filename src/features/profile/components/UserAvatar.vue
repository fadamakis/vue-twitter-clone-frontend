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
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}
</style>
