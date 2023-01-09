import { computed, h, defineComponent, PropType } from "vue";
import {
  luniand,
  ComponentWithProps,
  HTMLLuniandProps,
  SystemStyleObject,
  useStyles,
} from "@luniand-ui/system";

export interface LInputElementProps extends HTMLLuniandProps<"div"> {
  placement?: "left" | "right";
}

const LStyledElement = luniand("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2,
  },
});

const LInputElement = defineComponent({
  name: "LInputElement",
  props: {
    placement: {
      type: String as PropType<LInputElementProps["placement"]>,
      default: "left",
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();
    const elementStyles = computed<SystemStyleObject>(() => {
      // @ts-ignore
      const input: any = styles.value?.field;
      const attr = props.placement === "left" ? "insetStart" : "insetEnd";

      return {
        [attr]: "0",
        width: input?.height || input.h,
        height: input?.height || input?.h,
        fontSize: input?.fontSize,
      };
    });

    return () =>
      h(
        LStyledElement,
        {
          __css: elementStyles.value,
          ...attrs,
        },
        slots
      );
  },
});

// This is used in `l-input-group.ts`
LInputElement.id = "LInputElement";

export const LInputLeftElement = defineComponent({
  name: "CInputLeftElement",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        // @ts-expect-error Untyped internal prop
        CInputElement,
        { placement: "left", __label: "input__left-element", ...attrs },
        slots
      );
  },
});

// This is used in `l-input-group.tsx`
LInputLeftElement.id = "LInputLeftElement";

export const LInputRightElement = defineComponent({
  name: "lInputRightElement",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        LInputElement,
        {
          placement: "right",
          __label: "input__right-element",
          ...attrs,
        },
        slots
      );
  },
});

// This is used in `c-input-group.tsx`
LInputRightElement.id = "LInputRightElement";
