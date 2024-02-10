import fetch from "@/lib/fetch";

export function singleTweetApiCall(tweetId) {
  return fetch(`/tweets/${tweetId}`);
}

export function tweetListApiCall() {
  return fetch(`/tweets`);
}

export function tweetSearchApiCall(term) {
  return fetch.post(`/search`, { term });
}

export function tweetLikeApiCall(tweetId) {
  return fetch.put(`/tweets/like/${tweetId}`);
}

export function tweetUnLikeApiCall(tweetId) {
  return fetch.put(`/tweets/unlike/${tweetId}`);
}
