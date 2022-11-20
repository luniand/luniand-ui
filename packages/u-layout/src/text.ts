import { filterUndefined, SNAO, vueThemingProps } from "@uniland-ui/utils"
import {
  uniland,
  HTMLUnilandProps,
  ThemingProps,
  SystemProps,
  useStyleConfig,
  DOMElements,
  ComponentWithProps,
  DeepPartial,
} from "@uniland-ui/system"
import { computed, defineComponent, h, PropType } from "@vue/runtime-core"

export interface TextProps extends HTMLUnilandProps<"p">, ThemingProps<"Text"> {
  /**
   * The CSS `text-align` property
   * @type SystemProps["textAlign"]
   */
  align?: SystemProps["textAlign"]
  /**
   * The CSS `text-decoration` property
   * @type SystemProps["textDecoration"]
   */
  decoration?: SystemProps["textDecoration"]
  /**
   * The CSS `text-transform` property
   * @type SystemProps["textTransform"]
   */
  casing?: SystemProps["textTransform"]
}

/**
 * Used to render texts or paragraphs.
 *
 * @see Docs https://vue.uniland-ui.com/docs/typography/text
 */
export const UText: ComponentWithProps<DeepPartial<TextProps>> =
  defineComponent({
    name: "UText",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "p",
      },
      align: SNAO as PropType<TextProps["textAlign"]>,
      decoration: SNAO as PropType<TextProps["textDecoration"]>,
      casing: SNAO as PropType<TextProps["textTransform"]>,
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
      const styles = useStyleConfig("Text", themingProps)

      const aliasedProps = computed(() =>
        filterUndefined({
          textAlign: props.align,
          textDecoration: props.decoration,
          textTransform: props.casing,
        })
      )

      return () =>
        h(
          uniland.p,
          {
            __label: "text",
            ...aliasedProps.value,
            __css: styles.value,
            ...attrs,
          },
          slots
        )
    },
  })
