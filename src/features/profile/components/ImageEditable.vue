<script setup lang="ts">
import AppIcon from "@/ui/components/AppIcon.vue";
</script>

<template>
  <div class="img-editable">
    <slot />
    <div class="edit-overlay">
      <AppIcon icon="camera" class="edit-icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-editable {
  position: relative;
  cursor: pointer;

  .edit-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .edit-icon {
      transition: opacity 0.1s ease-in-out;
      background-color: $color-white;
      border-radius: 50%;
      width: spacing(12);
      height: spacing(11);
      padding: spacing(3);
      opacity: 0;
    }
    &:hover {
      .edit-icon {
        opacity: 1;
      }
    }
  }
}
</style>
