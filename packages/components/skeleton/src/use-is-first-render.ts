import { ref, watch } from "vue";

export function useIsFirstRender() {
  const isFirstRender = ref(true);

  watch(isFirstRender, () => (isFirstRender.value = false));

  return isFirstRender.value;
}
