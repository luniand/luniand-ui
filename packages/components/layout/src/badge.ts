import { h, defineComponent, PropType, computed } from "vue";
import {
  luniand,
  DOMElements,
  HTMLLuniandProps,
  ThemingProps,
  useStyleConfig,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";
import { filterUndefined } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

export interface BadgeProps
  extends HTMLLuniandProps<"span">,
    Partial<ThemingProps<"Badge">> {}

/**
 * Vue component used to display notifications, messages, or
 * statuses in different shapes and sizes.
 *
 * @see Docs https://vue.luniand-ui.com/docs/data-display/badge
 */
export const LBadge: ComponentWithProps<DeepPartial<BadgeProps>> =
  defineComponent({
    name: "LBadge",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "div",
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
      const styles = useStyleConfig("Badge", themingProps);
      return () =>
        h(
          luniand.div,
          {
            as: props.as,
            __label: "badge",
            __css: {
              display: "inline-block",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              ...styles.value,
            },
            ...attrs,
          },
          slots
        );
    },
  });
