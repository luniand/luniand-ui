import { h, defineComponent, PropType, computed } from "@vue/runtime-core"
import {
  uniland,
  DOMElements,
  HTMLUnilandProps,
  ThemingProps,
  useStyleConfig,
  ComponentWithProps,
  DeepPartial,
} from "@uniland-ui/system"
import { filterUndefined, vueThemingProps } from "@uniland-ui/utils"

export interface BadgeProps
  extends HTMLUnilandProps<"span">,
    Partial<ThemingProps<"Badge">> {}

/**
 * Vue component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://vue.uniland-ui.com/docs/data-display/badge
 */
export const UBadge: ComponentWithProps<DeepPartial<BadgeProps>> =
  defineComponent({
    name: "UBadge",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "div",
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
      const styles = useStyleConfig("Badge", themingProps)
      return () =>
        h(
          uniland.div,
          {
            as: props.as,
            __label: "badge",
            __css: {
              display: "inline-block",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              ...styles.value,
            },
            ...attrs,
          },
          slots
        )
    },
  })
