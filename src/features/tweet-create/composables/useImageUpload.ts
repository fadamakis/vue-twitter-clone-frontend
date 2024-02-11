import { ref } from "vue";
const file = ref();

export function useImageUpload() {
  return {
    file,
  };
}
