import {
  luniand,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  DeepPartial,
  ComponentWithProps,
  HTMLLuniandProps,
} from "@luniand-ui/system";
import { h, defineComponent, PropType, computed } from "vue";
import { filterUndefined } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

export interface LinkProps extends HTMLLuniandProps<"a">, ThemingProps<"Link"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean;
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
 * <LLink as="router-link" to="/home">Home</LLink>
 * ```
 *
 * @see Docs https://vue.luniand-ui.com/docs/layout/link
 */
export const LLink: ComponentWithProps<DeepPartial<LinkProps>> =
  defineComponent({
    name: "LLink",
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
      );
      const styles = useStyleConfig("Link", themingProps);

      return () =>
        h(
          luniand.a,
          {
            as: props.as,
            __label: "link",
            target: props.isExternal ? "_blank" : undefined,
            rel: props.isExternal ? "noopener noreferrer" : undefined,
            __css: styles.value,
            ...attrs,
          },
          slots
        );
    },
  });
