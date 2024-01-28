import fetch from "@/lib/fetch";

export function profileApiCall(username) {
  return fetch(`/users/${username}`, {refetch: true}).json();
}
