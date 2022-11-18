import { vueThemingProps, extractStyleAttrs } from "@uniland-ui/vue-utils"
import {
  uniland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  HTMLUnilandProps,
  ComponentWithProps,
  DeepPartial,
} from "@uniland-ui/vue-system"
import { computed, defineComponent, h, PropType } from "vue"
import { filterUndefined } from "@uniland-ui/utils"

export interface KbdProps extends HTMLUnilandProps<"kbd">, ThemingProps<"Kbd"> {}

/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <CKbd>⌘ + T</CKbd>
 * ```
 *
 * @see Docs https://vue.uniland-ui.com/docs/data-display/kbd
 */
export const CKbd: ComponentWithProps<DeepPartial<KbdProps>> = defineComponent({
  name: "CKbd",
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

    return () => (
      <uniland.kbd
        __label="kbd"
        __css={{ fontFamily: "mono", ...styles.value }}
        {...attrs}
      >
        {slots}
      </uniland.kbd>
    )
  },
})
