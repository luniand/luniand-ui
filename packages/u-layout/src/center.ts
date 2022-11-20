import { defineComponent, h, PropType } from "@vue/runtime-core"
import {
  uniland,
  HTMLUnilandProps,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
} from "@uniland-ui/system"

export interface CCenterProps extends HTMLUnilandProps<"div"> {}

/**
 * Vue component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://vue.chakra-ui.com/docs/layout/center
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
          uniland.div,
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
        )
    },
  })
