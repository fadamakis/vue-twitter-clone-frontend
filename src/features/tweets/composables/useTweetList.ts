import { ref } from "vue";
import { tweetListApiCall } from "@/features/tweets";

const tweets = ref();

export default function () {
  async function fetchTweetList() {
    tweets.value = await tweetListApiCall();
  }

  return {
    tweets,
    fetchTweetList,
  };
}
