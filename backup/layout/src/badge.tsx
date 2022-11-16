import { h, defineComponent, PropType, computed } from "vue"
import {
  uisland,
  DOMElements,
  HTMLUislandProps,
  ThemingProps,
  useStyleConfig,
  ComponentWithProps,
  DeepPartial,
} from "@uisland-ui/vue-system"
import { filterUndefined } from "@uisland-ui/utils"
import { vueThemingProps } from "@uisland-ui/vue-utils"

export interface BadgeProps
  extends HTMLUislandProps<"span">,
    Partial<ThemingProps<"Badge">> {}

/**
 * Vue component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://vue.uisland-ui.com/docs/data-display/badge
 */
export const CBadge: ComponentWithProps<DeepPartial<BadgeProps>> =
  defineComponent({
    name: "CBadge",
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
      return () => {
        return (
          <uisland.div
            as={props.as}
            __label="badge"
            __css={{
              display: "inline-block",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              ...styles.value,
            }}
            {...attrs}
          >
            {slots}
          </uisland.div>
        )
      }
    },
  })
