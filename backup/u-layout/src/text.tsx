import { filterUndefined } from "@uniland-ui/utils"
import {
  uniland,
  HTMLUnilandProps,
  ThemingProps,
  SystemProps,
  useStyleConfig,
  DOMElements,
  ComponentWithProps,
  DeepPartial,
} from "@uniland-ui/vue-system"
import { SNAO, vueThemingProps } from "@uniland-ui/vue-utils"
import { computed, defineComponent, h, PropType } from "vue"

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
export const CText: ComponentWithProps<DeepPartial<TextProps>> =
  defineComponent({
    name: "CText",
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

      return () => {
        return (
          <uniland.p
            __label="text"
            {...aliasedProps.value}
            __css={styles.value}
            {...attrs}
          >
            {slots}
          </uniland.p>
        )
      }
    },
  })
