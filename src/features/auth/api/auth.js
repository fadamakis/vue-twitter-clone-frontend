import fetch from "@/lib/fetch";

export function registerApiCall(userInfo) {
  return fetch.post(`/users/register`, userInfo)
}

export function loginApiCall(userInfo) {
  return fetch.post(`/users/login`, userInfo)
}
