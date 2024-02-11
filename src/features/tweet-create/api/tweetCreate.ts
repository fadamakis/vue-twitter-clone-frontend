import fetch from "@/lib/fetch";

export function tweetCreateApiCall(text) {
  return fetch.post(`/tweets`, { text });
}
