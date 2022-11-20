import { SystemProps } from "@uniland-ui/styled-system"
import {
  h,
  defineComponent,
  PropType,
  Component,
  computed,
  Fragment,
  createVNode,
} from "@vue/runtime-core"
import {
  uniland,
  ComponentWithProps,
  DOMElements,
  HTMLUnilandProps,
} from "@uniland-ui/system"
import {
  getDividerStyles,
  getStackStyles,
  selector,
  StackDirection,
} from "./stack.utils"
import { getValidChildren, SNAO, SAO } from "@uniland-ui/utils"

interface StackOptions {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemStyleObject["alignItems"]
   */
  align?: SystemProps["alignItems"]
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemStyleObject["justifyContent"]
   */
  justify?: SystemProps["justifyContent"]
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemStyleObject["flexWrap"]
   */
  wrap?: SystemProps["flexWrap"]
  /**
   * The space between each stack item
   * @type SystemStyleObject["margin"]
   */
  spacing?: SystemProps["margin"]
  /**
   * The direction to stack the items.
   */
  direction?: StackDirection
  /**
   * If `true`, each stack item will show a divider
   * @type Component | boolean
   */
  divider?: Component | boolean
  /**
   * If `true`, the children will be wrapped in a `Box` with
   * `display: inline-block`, and the `Box` will take the spacing props
   */
  shouldWrapChildren?: boolean
  /**
   * If `true` the items will be stacked horizontally.
   */
  isInline?: boolean
}

export interface StackDividerProps extends HTMLUnilandProps<"div"> {}

export const UStackDivider = defineComponent({
  name: "UStackDivider",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        uniland.div,
        {
          __label: "stack__divider",
          borderWidth: 0,
          alignSelf: "stretch",
          borderColor: "inherit",
          width: "auto",
          height: "auto",
          ...attrs,
        },
        slots?.default?.()
      )
  },
})

export const UStackItem = defineComponent({
  name: "UStackItem",
  setup(_, { attrs, slots }) {
    return () =>
      h(
        uniland.div,
        {
          __label: "stack__item",
          display: "inline-block",
          flex: "0 0 auto",
          minWidth: "0",
          ...attrs,
        },
        slots?.default?.()
      )
  },
})

export interface StackProps extends HTMLUnilandProps<"div">, StackOptions {}

const stackProps = {
  as: {
    type: [Object, String] as PropType<DOMElements>,
    default: "div",
  },
  align: SAO as PropType<StackProps["align"]>,
  justify: SAO as PropType<StackProps["justify"]>,
  wrap: SAO as PropType<StackProps["wrap"]>,
  spacing: {
    type: SNAO as PropType<StackProps["spacing"]>,
    default: "0.5rem",
  },
  direction: SAO as PropType<StackProps["direction"]>,

  // todo: divider
  divider: [Object, Boolean] as PropType<StackProps["divider"]>,
  shouldWrapChildren: [Boolean] as PropType<StackProps["shouldWrapChildren"]>,
  isInline: [Boolean] as PropType<StackProps["isInline"]>,
}

/**
 * Stacks help you easily create flexible and automatically distributed layouts
 *
 * You can stack elements in the horizontal or vertical direction,
 * and apply a space or/and divider between each element.
 *
 * It uses `display: flex` internally and renders a `div`.
 *
 * @see Docs https://vue.uniland-ui.com/docs/layout/stack
 *
 */
export const UStack: ComponentWithProps<StackProps> = defineComponent({
  name: "UStack",
  props: stackProps,
  setup(props, { slots, attrs }) {
    const direction = computed(() =>
      props.isInline ? "row" : props.direction ?? "column"
    )

    const styles = computed(() =>
      getStackStyles({ direction: direction.value, spacing: props.spacing })
    )

    const dividerStyle = computed(() =>
      getDividerStyles({ spacing: props.spacing, direction: direction.value })
    )

    const hasDivider = computed(() => !!props.divider)

    const shouldUseChildren = computed(
      () => !props.shouldWrapChildren && !hasDivider.value
    )

    return () => {
      const validChildren = getValidChildren(slots)
      const clones = shouldUseChildren.value
        ? validChildren
        : validChildren.map((child, index) => {
            const isLast = index + 1 === validChildren.length
            const wrappedChild = createVNode(UStackItem, { key: index }, child)
            const _child = props.shouldWrapChildren ? wrappedChild : child

            if (!hasDivider.value) return _child

            // todo: temporary divider
            const clonedDivider = createVNode(UStackDivider, {
              borderColor: "blue.200",
              __css: dividerStyle.value,
            })

            const _divider = isLast ? null : clonedDivider

            return createVNode(Fragment, { key: index }, [_child, _divider])
          })

      return h(
        uniland.div,
        {
          __label: attrs.label ? (attrs.label as string) : "stack",
          display: "flex",
          alignItems: props.align,
          justifyContent: props.justify,
          flexDirection: styles.value.flexDirection,
          flexWrap: props.wrap,
          __css: hasDivider.value ? {} : { [selector]: styles.value[selector] },
        },
        () => clones
      )
    }
  },
})

/**
 * A view that arranges its children in a horizontal line.
 */
export const UHStack: ComponentWithProps<StackProps> = defineComponent({
  name: "UHStack",
  props: stackProps,
  setup(props, { attrs, slots }) {
    return () =>
      h(
        uniland(UStack, {
          __label: "stack-horizontal",
          ...props,
          ...attrs,
          direction: "row",
        }),
        {},
        slots
      )
  },
})

/**
 * A view that arranges its children in a vertical line.
 */
export const UVStack: ComponentWithProps<StackProps> = defineComponent({
  name: "UVStack",
  props: stackProps,
  setup(props, { attrs, slots }) {
    return () =>
      h(
        uniland(UStack, {
          __label: "stack-vertical",
          ...props,
          ...attrs,
          direction: "column",
        }),
        {},
        slots
      )
  },
})
