import { ComponentWithProps, DeepPartial } from "@luniand-ui/system";
import { defineComponent, PropType, h, computed } from "vue";
import {
  LModal,
  LModalContent,
  LModalProps,
  modalProps,
  LModalContentProps,
} from "./modal";

export interface LAlertDialogProps
  extends Omit<LModalProps, "initialFocusRef" | "closeModal" | "handleEscape"> {
  leastDestructiveRef: LModalProps["initialFocusRef"];
}

/**
 * LAlertDialog
 * Data wrapper for the alert dialog component
 */
export const LAlertDialog: ComponentWithProps<DeepPartial<LAlertDialogProps>> =
  defineComponent({
    name: "LAlertDialog",
    props: {
      ...modalProps,
      leastDestructiveRef: [Function, String] as PropType<
        LModalProps["initialFocusRef"]
      >,
    },
    emits: ["update:modelValue", "close", "escape"],
    setup(props, { attrs, slots, emit }) {
      const isOpen = computed(() => props.modelValue!);

      const handleUpdateModelValue = (val: boolean) => {
        emit("update:modelValue", val);
      };

      return () => {
        const {
          modelValue,
          "onUpdate:modelValue": updateModelValue,
          ...rest
        } = props;
        return h(
          LModal,
          {
            ...rest,
            ...attrs,
            modelValue: isOpen.value,
            /* eslint-disable-next-line */
            // @ts-ignore
            "onUpdate:modelValue": handleUpdateModelValue,
            label: "alertdialog",
            initialFocusRef: props.leastDestructiveRef,
          },
          slots
        );
      };
    },
  });

/**
 * LAlertDialogContent
 * Wrapper for the alert dialog content
 */
export const LAlertDialogContent: ComponentWithProps<
  DeepPartial<LModalContentProps>
> = defineComponent({
  name: "LAlertDialogContent",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(LModalContent, { ...attrs, role: "alertdialog" }, slots);
  },
});

export {
  LModalBody as LAlertDialogBody,
  LModalCloseButton as LAlertDialogCloseButton,
  LModalFooter as LAlertDialogFooter,
  LModalHeader as LAlertDialogHeader,
  LModalOverlay as LAlertDialogOverlay,
} from "./modal";
