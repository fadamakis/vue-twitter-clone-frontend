import { ref } from "vue";

const searchTerm = ref(null);

export default function () {
  return {
    searchTerm,
  };
}
