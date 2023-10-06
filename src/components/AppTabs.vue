<script setup>
import { ref } from "vue";
defineProps(["tabs"]);
const activeTab = ref(1);
</script>
<template>
  <ul class="tabs">
    <li
      v-for="(tab, index) in tabs"
      :key="tab"
      class="tab"
      :class="{ active: index + 1 === activeTab }"
      @click="activeTab = index + 1"
    >
      {{ tab }}
    </li>
  </ul>

  <template v-for="(_, index) in tabs">
    <div :key="index" v-if="index + 1 === activeTab">
      <slot :name="`tab${index + 1}`" />
    </div>
  </template>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  font-weight: 700;
  font-size: $font-size-1;
  .tab {
    cursor: pointer;
    padding: spacing(3);
    display: flex;
    justify-content: center;
    flex: 1;
    &:hover,
    &.active {
      background: $color-light;
    }

    border-right: 1px solid $color-border;
    &:last-child {
      border-right: none;
    }
  }
}
</style>
