<script setup lang="ts">
import { ref, PropType } from "vue";

import { tweetListApiCall } from "@/features/tweets";

enum Category {
  EXPLORE = "explore",
  PROFILE = "profile",
  SEARCH = "search",
  BOOKMARKS = "bookmarks",
}

const props = defineProps({
  category: {
    type: String as PropType<Category>,
  },
});
const tweets = ref();

switch (props.category) {
  case Category.EXPLORE:
    tweets.value = await tweetListApiCall();
    break;
  case Category.PROFILE:
    tweets.value = [];
    break;
  case Category.SEARCH:
    tweets.value = [];
    break;
  case Category.BOOKMARKS:
    tweets.value = await tweetListApiCall();
    break;
}
</script>

<template>
  <slot :tweets="tweets" />
</template>
