import { h, defineComponent, PropType, computed } from "vue";
import {
  luniand,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  HTMLLuniandProps,
  DeepPartial,
  ComponentWithProps,
} from "@luniand-ui/system";
import { filterUndefined } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

export interface ContainerProps
  extends HTMLLuniandProps<"div">,
    ThemingProps<"Container"> {
  /**
   * If `true`, container will center its children
   * regardless of their width.
   */
  centerContent?: boolean;
}

/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
export const UContainer: ComponentWithProps<DeepPartial<ContainerProps>> =
  defineComponent({
    name: "UContainer",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "div",
      },
      centerContent: {
        type: [Boolean] as PropType<ContainerProps["centerContent"]>,
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
      );
      const styles = useStyleConfig("Container", themingProps);

      return () =>
        h(
          luniand.div,
          {
            __label: "container",
            __css: {
              ...styles.value,
              ...(props.centerContent && {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }),
            },
            ...attrs,
          },
          slots
        );
    },
  });
