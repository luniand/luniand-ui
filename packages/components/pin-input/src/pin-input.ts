/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly theme-able by following [this guide](https://ui.luniand.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://ui.luniand.com/guides/component-guide
 * @see Theming https://ui.luniand.com/docs/theming/component-style
 */

import { h, defineComponent, computed, PropType, ComputedRef } from "vue";
import {
  luniand,
  createStylesContext,
  useStyleConfig,
} from "@luniand-ui/system";
import { createContext, getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { LInput } from "@luniand-ui/input";
import { connect } from "@zag-js/pin-input";
import { PinInputProps, usePinInputMachine } from "./use-pin-input";

const [StylesProvider, useStyles] = createStylesContext("LPinInput");
const [PinInputProvider, usePinInput] =
  createContext<ComputedRef<ReturnType<typeof connect>>>();

export { PinInputProvider, usePinInput };

export const LPinInputProps = {
  value: {
    type: Object as PropType<Array<string>>,
    default: [],
  },
  modelValue: {
    type: Object as PropType<Array<string>>,
    default: false,
  },
  id: {
    type: String,
    default: "0",
  },
  placeholder: {
    type: String,
    default: "o",
  },
  type: {
    type: String as PropType<"alphanumeric" | "numeric">,
    default: "numeric",
  },
  otp: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: Boolean,
    default: false,
  },
  blurOnComplete: {
    type: Boolean,
    default: false,
  },
  dir: {
    type: String as PropType<"rtl" | "ltr">,
    default: "ltr",
  },
  spacing: {
    type: [String, Number],
    default: "0.75",
  },
  ...vueThemingProps,
};

export const LPinInput = defineComponent({
  name: "LPinInput",
  props: LPinInputProps,
  emits: ["change", "invalid", "complete", "update:modelValue"],
  setup(props, { slots, attrs, emit }) {
    const styles = useStyleConfig("PinInput", props);

    const inputStyles = computed(() => ({
      ...styles.value,
      mx: props.spacing,
    }));
    StylesProvider(inputStyles);

    const api = usePinInputMachine(props as unknown as PinInputProps, emit);

    PinInputProvider(api);
    console.log("api", api);
    return () =>
      h(
        luniand.div,
        { __label: "pin-input", ...api.value.rootProps, ...attrs },
        () => [
          getValidChildren(slots).map((child, index) => {
            console.log(typeof index);
            return (child.type as any).name === "LPinInputField"
              ? h(child, { index })
              : child;
          }),
        ]
      );
  },
});

export const LPinInputField = defineComponent({
  name: "LPinInputField",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { attrs }) {
    const styles = useStyles();
    const api = usePinInput();

    console.log("props", props.index);

    return () =>
      h(LInput, {
        __label: "pin-input-field",
        __css: styles.value,
        ...api.value.getInputProps({ index: props.index }),
        ...attrs,
      });
  },
});

export const LPinInputClearButton = defineComponent({
  name: "LPinInputClearButton",
  setup(_, { slots, attrs }) {
    const api = usePinInput();
    return () =>
      h(
        luniand.button,
        {
          __label: "pin-input-clear-button",
          onClick: () => api.value.clearValue(),
          ...attrs,
        },
        () => getValidChildren(slots)
      );
  },
});
