import fetch from "@/lib/fetch";

export function profileApiCall(username) {
  return fetch(`/users/${username}`);
}

export function followApiCall(username) {
  return fetch.put(`/users/follow/${username}`);
}

export function unFollowApiCall(username) {
  return fetch.put(`/users/unfollow/${username}`);
}
