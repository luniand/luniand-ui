import { vueThemingProps } from "@uisland-ui/vue-utils"
import { ComponentWithProps, HTMLUislandProps } from "@uisland-ui/vue-system"
import { h, defineComponent, PropType, computed } from "vue"
import {
  uisland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  DeepPartial,
} from "@uisland-ui/vue-system"
import { filterUndefined } from "@uisland-ui/utils"

export interface LinkProps extends HTMLUislandProps<"a">, ThemingProps<"Link"> {
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
 * @see Docs https://vue.uisland-ui.com/docs/layout/link
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
        <uisland.a
          as={props.as}
          __label="link"
          // @ts-ignore Need to type "target" as Intrinsic HTML property
          target={props.isExternal ? "_blank" : undefined}
          rel={props.isExternal ? "noopener noreferrer" : undefined}
          __css={styles.value}
          {...attrs}
        >
          {slots}
        </uisland.a>
      )
    },
  })
