import { defineComponent, h, PropType } from "vue";
import {
  luniand,
  HTMLLuniandProps,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
} from "@luniand-ui/system";

export interface CCenterProps extends HTMLLuniandProps<"div"> {}

/**
 * Vue component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://vue.luniand-ui.com/docs/layout/center
 */
export const UCenter: ComponentWithProps<DeepPartial<CCenterProps>> =
  defineComponent({
    name: "UCenter",
    props: {
      as: {
        type: [String, Object] as PropType<DOMElements>,
        default: "div",
      },
    },
    setup(props, { slots, attrs }) {
      return () =>
        h(
          luniand.div,
          {
            __label: "center",
            __css: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            ...props,
            ...attrs,
          },
          slots
        );
    },
  });
