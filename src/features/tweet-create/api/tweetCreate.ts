import fetch from "@/lib/fetch";

export function tweetCreateApiCall(formData) {
  return fetch.post(`/tweets`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
