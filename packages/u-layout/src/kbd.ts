import {
  uniland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  HTMLUnilandProps,
  ComponentWithProps,
  DeepPartial,
} from "@uniland-ui/system"
import { computed, defineComponent, h, PropType } from "@vue/runtime-core"
import { filterUndefined, vueThemingProps } from "@uniland-ui/utils"

export interface KbdProps
  extends HTMLUnilandProps<"kbd">,
    ThemingProps<"Kbd"> {}

/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```js
 * <CKbd>⌘ + T</CKbd>
 * ```
 *
 * @see Docs https://vue.uniland-ui.com/docs/data-display/kbd
 */
export const UKbd: ComponentWithProps<DeepPartial<KbdProps>> = defineComponent({
  name: "UKbd",
  props: {
    as: {
      type: [String, Object] as PropType<DOMElements>,
      default: "h2",
    },
    ...vueThemingProps,
  },
  setup(props, { slots, attrs }) {
    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: props.colorScheme,
        variant: props.variant,
        size: props.size,
        styleConfig: props.styleConfig,
      })
    )
    const styles = useStyleConfig("Kbd", themingProps)

    return () =>
      h(
        uniland.kbd,
        {
          __label: "kbd",
          __css: { fontFamily: "mono", ...styles.value },
          ...attrs,
        },
        slots
      )
  },
})
