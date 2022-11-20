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

export interface HeadingProps
  extends HTMLUnilandProps<"h2">,
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

      return () =>
        h(
          uniland.h2,
          {
            as: props.as,
            __label: "heading",
            __css: styles.value,
            ...attrs,
          },
          slots
        )
    },
  })
