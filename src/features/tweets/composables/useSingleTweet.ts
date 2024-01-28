import { ref } from "vue";
import { singleTweetApiCall } from "@/features/tweets";


export default function () {
  const tweet = ref();

  async function fetchSingleTweet(id) {
    const response = await singleTweetApiCall(id);
    tweet.value = response.data
  }

  return {
    tweet,
    fetchSingleTweet,
  };
}
