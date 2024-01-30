import fetch from "@/lib/fetch";

export function trendsApiCall(limit = 20) {
  return fetch(`/tweets/trends?limit=${limit}`);
}
