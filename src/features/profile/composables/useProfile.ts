import { ref } from "vue";

const profile = ref(null);

export default function () {
  async function setProfile(payload) {
    profile.value = payload;
  }

  function remove() {
    profile.value = null;
  }

  return {
    profile,
    setProfile,
    remove,
  };
}
