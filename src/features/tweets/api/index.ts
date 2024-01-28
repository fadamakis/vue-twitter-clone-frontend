import fetch from "@/lib/fetch";

export function singleTweetApiCall(tweetId) {
  return fetch(`/tweets/${tweetId}`).json();
}

export function tweetListApiCall() {
  return fetch(`/tweets`).json();
}
