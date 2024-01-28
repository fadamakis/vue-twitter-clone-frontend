import { ref } from "vue";
import { tweetListApiCall } from "@/features/tweets";


export default function () {
  const tweets = ref();

  async function fetchTweetList() {
    const response = await tweetListApiCall();
    tweets.value = response.data
  }

  return {
    tweets,
    fetchTweetList,
  };
}
