import { computed, defineComponent, h, PropType } from "@vue/runtime-core"
import {
  uniland,
  DOMElements,
  SystemStyleObject,
  HTMLUnilandProps,
  DeepPartial,
  ComponentWithProps,
} from "@uniland-ui/system"

export interface BoxProps extends HTMLUnilandProps<"div"> {}

/**
 * Box is the most abstract component on top of which other uniland
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://uniland-ui.luniand.com/docs/layout/box
 */
export const UBox: ComponentWithProps<DeepPartial<BoxProps>> = defineComponent({
  name: "UBox",
  props: {
    as: {
      type: [String, Object] as PropType<DOMElements>,
      default: "div",
    },
  },
  setup(props, { slots, attrs }) {
    return () =>
      h(
        uniland("div"),
        {
          as: props.as,
          __label: "box",
          ...attrs,
        },
        () => slots?.default?.()
      )
  },
})
/**
 * As a constraint, you can't pass size related props
 * Only `size` would be allowed
 */
type Omitted = "size" | "boxSize" | "width" | "height" | "w" | "h"

export interface SquareProps extends Omit<BoxProps, Omitted> {
  /**
   * The size (width and height) of the square
   */
  size?: BoxProps["width"]
  /**
   * If `true`, the content will be centered in the square
   */
  centerContent?: boolean
}

/**
 * USquare is the `UBox` component implemented as a square
 *
 * @see Docs https://uniland-ui.luniand.com/docs/layout/box
 */
export const USquare: ComponentWithProps<DeepPartial<SquareProps>> =
  defineComponent({
    name: "USquare",
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
      )

      return () =>
        h(
          UBox,
          {
            __label: "square",
            boxSize: props.size,
            __css: {
              ...styles.value,
              flexShrink: 0,
              flexGrow: 0,
            },
            ...attrs,
          },
          slots
        )
    },
  })

/**
 * UCircle is the `UBox` component implemented as a circle
 *
 * @see Docs https://uniland-ui.luniand.com/docs/layout/box
 */
export const UCircle: ComponentWithProps<DeepPartial<SquareProps>> =
  defineComponent({
    name: "UCircle",
    setup(_, { slots, attrs }) {
      return () =>
        h(
          USquare,
          {
            __label: "circle",
            borderRadius: "9999px",
            ...attrs,
          },
          slots
        )
    },
  })
