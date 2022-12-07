import { computed, defineComponent, h, PropType } from "vue";
import {
  luniand,
  DOMElements,
  SystemStyleObject,
  HTMLLuniandProps,
  DeepPartial,
  ComponentWithProps,
} from "@luniand-ui/system";

export interface BoxProps extends HTMLLuniandProps<"div"> {}

/**
 * Box is the most abstract component on top of which other luniand
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://luniand-ui.luniand.com/docs/layout/box
 */
export const LBox: ComponentWithProps<DeepPartial<BoxProps>> = defineComponent({
  name: "LBox",
  props: {
    as: {
      type: [String, Object] as PropType<DOMElements>,
      default: "div",
    },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        luniand("div", {
          label: "box",
        }),
        {
          as: props.as,
          ...attrs,
        },
        () => slots?.default?.()
      );
  },
});
/**
 * As a constraint, you can't pass size related props
 * Only `size` would be allowed
 */
type Omitted = "size" | "boxSize" | "width" | "height" | "w" | "h";

export interface SquareProps extends Omit<BoxProps, Omitted> {
  /**
   * The size (width and height) of the square
   */
  size?: BoxProps["width"];
  /**
   * If `true`, the content will be centered in the square
   */
  centerContent?: boolean;
}

/**
 * LSquare is the `LBox` component implemented as a square
 *
 * @see Docs https://luniand-ui.luniand.com/docs/layout/box
 */
export const LSquare: ComponentWithProps<DeepPartial<SquareProps>> =
  defineComponent({
    name: "LSquare",
    props: {
      size: [Object, String, Number] as PropType<SquareProps["size"]>,
      centerContent: {
        type: [Boolean] as PropType<SquareProps["centerContent"]>,
        default: true,
      },
    },
    setup(props, { slots, attrs }) {
      const styles = computed<SystemStyleObject>(() =>
        props.centerContent
          ? { display: "flex", alignItems: "center", justifyContent: "center" }
          : {}
      );

      return () =>
        h(
          luniand(LBox, {
            boxSize: props.size,
            label: "square",
          }),
          {
            __css: {
              ...styles.value,
              flexShrink: 0,
              flexGrow: 0,
            },
            ...attrs,
          },
          slots
        );
    },
  });

/**
 * LCircle is the `LBox` component implemented as a circle
 *
 * @see Docs https://luniand-ui.luniand.com/docs/layout/box
 */
export const LCircle: ComponentWithProps<DeepPartial<SquareProps>> =
  defineComponent({
    name: "LCircle",
    setup(_, { slots, attrs }) {
      return () =>
        h(
          luniand(LSquare, {
            label: "circle",
            borderRadius: "9999px",
          }),
          { ...attrs },
          slots
        );
    },
  });
