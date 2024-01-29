import { ref } from "vue";
import { singleTweetApiCall } from "@/features/tweets";


export default function () {
  const tweet = ref();

  async function fetchSingleTweet(id) {
    tweet.value  = await singleTweetApiCall(id);
  }

  return {
    tweet,
    fetchSingleTweet,
  };
}
