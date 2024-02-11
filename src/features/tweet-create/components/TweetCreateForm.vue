<script setup>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import { UserAvatar } from "@/features/profile";
import TweetFormAdditionalActions from "./TweetFormAdditionalActions.vue";
import { useAuth } from "@/features/auth";
import { tweetCreateApiCall } from "@/features/tweet-create";
import { useTweetList } from "@/features/tweets";
import { useImageUpload } from "../composables/useImageUpload";

const { tweets } = useTweetList();

const currentUser = useAuth();
const emit = defineEmits(["posted"]);

const text = ref();

const { file } = useImageUpload();

async function createTweet() {
  const formData = new FormData();
  formData.append("text", text.value);
  if (file.value) {
    formData.append("media", file.value);
  }

  const tweet = await tweetCreateApiCall(formData);

  text.value = "";
  file.value = null;
  tweets.value.unshift(tweet);
  emit("posted");
}
</script>
<template>
  <div class="tweet-creation-form">
    <UserAvatar :img="currentUser.avatar" class="user-avatar" />

    <div class="tweet-creation-content">
      <textarea
        @keydown.enter.prevent="createTweet"
        class="tweet-input"
        placeholder="What's happening?"
        rows="2"
        cols="50"
        v-model="text"
      />
      <div class="tweet-attachment" v-if="file?.name">Attached: {{ file?.name }}</div>
      <div class="tweet-actions">
        <TweetFormAdditionalActions />
        <AppButton @click="createTweet">Post</AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweet-creation-form {
  display: flex;
}
.tweet-creation-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.user-avatar {
  margin-right: spacing(3);
}

.tweet-input {
  width: 100%;
  border: none;
  font-size: $font-size-2;
  resize: none;
  outline: none;
  padding: spacing(1) 0;
}
.tweet-attachment {
  font-size: $font-size-0;
  font-style: italic;
}
.tweet-actions {
  display: flex;
  align-items: center;
}
</style>
