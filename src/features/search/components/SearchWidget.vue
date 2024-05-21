<script setup lang="ts">
import { ref, watch } from "vue";
import AppIcon from "@/core-ui/components/AppIcon.vue";
import AppInput from "@/core-ui/components/AppInput.vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const text = ref(route.query.q as string);

watch(
  () => route.query.q,
  (newQuery) => {
    text.value = decodeURIComponent(newQuery as string);
  }
);

function submitSearch() {
  router.push({ path: "/search", query: { q: encodeURIComponent(text.value) } });
}
</script>

<template>
  <form @submit.prevent="submitSearch">
    <AppInput v-model.lazy="text" pill placeholder="Search">
      <template #prefix>
        <AppIcon icon="search" />
      </template>
      <template #suffix>
        <AppIcon size="2x" icon="arrow-right-circle" clickable @click="submitSearch" />
      </template>
    </AppInput>
  </form>
</template>
