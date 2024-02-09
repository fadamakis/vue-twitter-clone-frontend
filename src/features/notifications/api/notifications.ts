import fetch from "@/lib/fetch";

export function notificationsApiCall() {
  return fetch("/notifications");
}
