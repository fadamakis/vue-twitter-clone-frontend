<script setup>
import { ref } from "vue";
import AppIcon from "@/components/AppIcon.vue";
const visible = ref(false);

function openModal() {
  visible.value = true;
}
function closeModal() {
  visible.value = false;
}
</script>

<template>
  <div>
    <div @click="openModal">
      <slot name="trigger" />
    </div>

    <Teleport to="body">
      <div class="modal" v-if="visible" @click="closeModal">
        <div class="modal-content" @click.stop>
          <div class="title" v-if="$slots.title">
            <slot name="title" />
          </div>
          <AppIcon icon="x" size="4x" @click="closeModal" clickable class="close" />
          <div v-if="$slots.body">
            <slot name="body" class="body" :close-modal="closeModal" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: $color-backdrop;
}
.modal-content {
  position: relative;
  max-width: 600px;
  width: 100%;
  padding: spacing(4);
  margin: 0 spacing(3);

  background-color: $color-white;
  border-radius: $border-radius;
}
.title {
  font-size: $font-size-3;
  font-weight: 700;
}
.close {
  position: absolute;
  top: spacing(3);
  right: spacing(3);
}
</style>
