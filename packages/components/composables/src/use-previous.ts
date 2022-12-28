import { Ref, ref, watch } from "vue";

export function usePrevious<T>(value: Ref<T>) {
  const refer = ref<T | undefined>();

  watch(value, () => (refer.value = value.value));

  return refer;
}
