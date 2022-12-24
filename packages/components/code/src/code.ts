/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly theme-able by following [this guide](https://ui.luniand.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://ui.luniand.com/guides/component-guide
 * @see Theming https://ui.luniand.com/docs/theming/component-style
 */

import { vueThemingProps } from "@luniand-ui/prop-utils";
import { h, defineComponent, PropType, computed } from "vue";
import {
  luniand,
  DOMElements,
  ThemingProps,
  useStyleConfig,
} from "@luniand-ui/system";
import { filterUndefined } from "@luniand-ui/utils";

const LCode = defineComponent({
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: "code",
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
    const styles = useStyleConfig("Code", themingProps);

    return () => {
      return h(
        luniand(props.as, {
          __css: {
            display: "inline-block",
            verticalAlign: "middle",
            fontSize: "sm",
            px: "0.2em",
            fontFamily: "mono",
            rounded: "sm",
            ...styles.value,
          },
        }),
        attrs,
        slots
      );
    };
  },
});

export default LCode;
