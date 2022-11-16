import { vueThemingProps } from "@uisland-ui/vue-utils"
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

export interface HeadingProps
  extends HTMLUislandProps<"h2">,
    ThemingProps<"Heading"> {}

export const CHeading: ComponentWithProps<DeepPartial<HeadingProps>> =
  defineComponent({
    name: "CHeading",
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
      const styles = useStyleConfig("Heading", themingProps)

      return () => (
        <uisland.h2
          as={props.as}
          __label="heading"
          __css={styles.value}
          {...attrs}
        >
          {slots}
        </uisland.h2>
      )
    },
  })
