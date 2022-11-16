import { defineComponent, h, PropType } from "vue"
import {
  uisland,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
  HTMLUislandProps,
} from "@uisland-ui/vue-system"

export interface CCenterProps extends HTMLUislandProps<"div"> {}

/**
 * Vue component used to horizontally and vertically center its child.
 * It uses the popular `display: flex` centering technique.
 *
 * @see Docs https://vue.uisland-ui.com/docs/layout/center
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
          <uisland.div
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
          </uisland.div>
        )
      }
    },
  })
