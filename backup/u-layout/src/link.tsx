import { vueThemingProps } from "@uniland-ui/vue-utils"
import { ComponentWithProps, HTMLUnilandProps } from "@uniland-ui/vue-system"
import { h, defineComponent, PropType, computed } from "vue"
import {
  uniland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  DeepPartial,
} from "@uniland-ui/vue-system"
import { filterUndefined } from "@uniland-ui/utils"

export interface LinkProps extends HTMLUnilandProps<"a">, ThemingProps<"Link"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

/**
 * Links are accessible elements used primarily for navigation.
 *
 * It integrates well with other routing libraries like
 * Vue Router and Nuxt.js Link.
 *
 * @example
 *
 * ```vue
 * <CLink as="router-link" to="/home">Home</CLink>
 * ```
 *
 * @see Docs https://vue.uniland-ui.com/docs/layout/link
 */
export const CLink: ComponentWithProps<DeepPartial<LinkProps>> =
  defineComponent({
    name: "CLink",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "a",
      },
      isExternal: Boolean as PropType<LinkProps["isExternal"]>,
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
      const styles = useStyleConfig("Link", themingProps)

      return () => (
        <uniland.a
          as={props.as}
          __label="link"
          // @ts-ignore Need to type "target" as Intrinsic HTML property
          target={props.isExternal ? "_blank" : undefined}
          rel={props.isExternal ? "noopener noreferrer" : undefined}
          __css={styles.value}
          {...attrs}
        >
          {slots}
        </uniland.a>
      )
    },
  })
