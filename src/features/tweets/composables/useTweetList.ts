import { ref } from "vue";
import { tweetListApiCall } from "@/features/tweets";


export default function () {
  const tweets = ref();

  async function fetchTweetList() {
    tweets.value =  await tweetListApiCall();
  }

  return {
    tweets,
    fetchTweetList,
  };
}
