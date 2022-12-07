import {
  luniand,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  HTMLLuniandProps,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";
import { computed, defineComponent, h, PropType } from "vue";
import { filterUndefined } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

export interface KbdProps
  extends HTMLLuniandProps<"kbd">,
    ThemingProps<"Kbd"> {}

/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```js
 * <CKbd>⌘ + T</CKbd>
 * ```
 *
 * @see Docs https://vue.luniand-ui.com/docs/data-display/kbd
 */
export const UKbd: ComponentWithProps<DeepPartial<KbdProps>> = defineComponent({
  name: "UKbd",
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
    );
    const styles = useStyleConfig("Kbd", themingProps);

    return () =>
      h(
        luniand.kbd,
        {
          __label: "kbd",
          __css: { fontFamily: "mono", ...styles.value },
          ...attrs,
        },
        slots
      );
  },
});
