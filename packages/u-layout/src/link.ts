import {
  uniland,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  DeepPartial,
  ComponentWithProps,
  HTMLUnilandProps,
} from "@uniland-ui/system"
import { h, defineComponent, PropType, computed } from "@vue/runtime-core"
import { filterUndefined, vueThemingProps } from "@uniland-ui/utils"

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
 * <ULink as="router-link" to="/home">Home</ULink>
 * ```
 *
 * @see Docs https://vue.uniland-ui.com/docs/layout/link
 */
export const ULink: ComponentWithProps<DeepPartial<LinkProps>> =
  defineComponent({
    name: "ULink",
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

      return () =>
        h(
          uniland.a,
          {
            as: props.as,
            __label: "link",
            target: props.isExternal ? "_blank" : undefined,
            rel: props.isExternal ? "noopener noreferrer" : undefined,
            __css: styles.value,
            ...attrs,
          },
          slots
        )
    },
  })
