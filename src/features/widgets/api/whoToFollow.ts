import fetch from "@/lib/fetch";

export function friendSuggestionsApiCall(limit = 5) {
  return fetch(`/users/friend-suggestions?limit=${limit}`);
}
