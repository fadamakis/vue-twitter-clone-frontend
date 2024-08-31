import { ref } from "vue";
import { validateSessionApiCall } from "@/features/auth";
import router from "@/router";

const currentUser = ref(null);

export default function () {
  async function setUser(payload) {
    currentUser.value = payload;
  }

  async function initializeUserSession() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const activeUser = await validateSessionApiCall();
        setUser(activeUser);
      } else {
        await router.push("/login");
      }
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
