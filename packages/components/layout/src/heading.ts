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

export interface HeadingProps
  extends HTMLLuniandProps<"h2">,
    ThemingProps<"Heading"> {}

export const LHeading: ComponentWithProps<DeepPartial<HeadingProps>> =
  defineComponent({
    name: "LHeading",
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
      const styles = useStyleConfig("Heading", themingProps);

      return () =>
        h(
          luniand.h2,
          {
            as: props.as,
            __label: "heading",
            __css: styles.value,
            ...attrs,
          },
          slots
        );
    },
  });
