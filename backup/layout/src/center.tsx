import { defineComponent, h, PropType } from "vue"
import {
  uniland,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
  HTMLUnilandProps,
} from "@uniland-ui/vue-system"

export interface CCenterProps extends HTMLUnilandProps<"div"> {}

/**
 * Vue component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://vue.uniland-ui.com/docs/layout/center
 */
export const CCenter: ComponentWithProps<DeepPartial<CCenterProps>> =
  defineComponent({
    name: "CCenter",
    props: {
      as: {
        type: [String, Object] as PropType<DOMElements>,
        default: "div",
      },
    },
    setup(props, { slots, attrs }) {
      return () => {
        return (
          <uniland.div
            __label="center"
            __css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...props}
            {...attrs}
          >
            {slots}
          </uniland.div>
        )
      }
    },
  })
