import { h, defineComponent, PropType, computed } from "vue"
import {
  uisland,
  ThemingProps,
  useStyleConfig,
  HTMLUislandProps,
  ComponentWithProps,
  DeepPartial,
} from "@uisland-ui/vue-system"
import { filterUndefined } from "@uisland-ui/utils"
import { vueThemingProps } from "@uisland-ui/vue-utils"

export interface DividerProps
  extends HTMLUislandProps<"div">,
    ThemingProps<"Container"> {
  orientation?: "horizontal" | "vertical"
}

/**
 * Layout component used to visually separate content in a list or group.
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 *
 * @see Docs https://vue.uisland-ui.com/docs/data-display/divider
 */
export const CDivider: ComponentWithProps<DeepPartial<DividerProps>> =
  defineComponent({
    name: "CDivider",
    props: {
      orientation: {
        type: [String] as PropType<DividerProps["orientation"]>,
        default: "horizontal",
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
          orientation: props.orientation,
        })
      )

      const styles = useStyleConfig("Divider", themingProps)

      const {
        borderLeftWidth,
        borderBottomWidth,
        borderTopWidth,
        borderRightWidth,
        borderWidth,
        borderStyle,
        borderColor,
        ...stylesRest
      } = styles.value

      const dividerStyle = computed(() => {
        const dividerStyles = {
          vertical: {
            borderLeftWidth:
              borderLeftWidth || borderRightWidth || borderWidth || "1px",
            height: "100%",
          },
          horizontal: {
            borderBottomWidth:
              borderBottomWidth || borderTopWidth || borderWidth || "1px",
            width: "100%",
          },
        }
        return dividerStyles[props.orientation!]
      })

      return () => (
        <uisland.hr
          aria-orientation={props.orientation}
          __css={{
            ...stylesRest,
            border: 0,
            borderColor,
            borderStyle,
            ...dividerStyle.value,
          }}
          __label="divider"
        >
          {slots.default?.()}
        </uisland.hr>
      )
    },
  })
