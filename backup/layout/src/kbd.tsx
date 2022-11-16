import { vueThemingProps, extractStyleAttrs } from "@uisland-ui/vue-utils"
import {
  uisland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  HTMLUislandProps,
  ComponentWithProps,
  DeepPartial,
} from "@uisland-ui/vue-system"
import { computed, defineComponent, h, PropType } from "vue"
import { filterUndefined } from "@uisland-ui/utils"

export interface KbdProps extends HTMLUislandProps<"kbd">, ThemingProps<"Kbd"> {}

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
 * @see Docs https://vue.uisland-ui.com/docs/data-display/kbd
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
      <uisland.kbd
        __label="kbd"
        __css={{ fontFamily: "mono", ...styles.value }}
        {...attrs}
      >
        {slots}
      </uisland.kbd>
    )
  },
})
