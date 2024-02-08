import { ref } from "vue";
import fetch from "@/lib/fetch";
import router from "@/router";

const currentUser = ref(null);

export default function () {
  async function setUser(payload) {
    currentUser.value = payload;
  }

  async function initializeUserSession() {
    try {
      const activeUser = await fetch("/users/me");
      setUser(activeUser);
    } catch (_) {
      logout();
    }
  }

  function logout() {
    localStorage.removeItem("token");
    currentUser.value = null;
    router.push("/login");
  }

  return {
    currentUser,
    setUser,
    initializeUserSession,
    logout,
  };
}
