import {
  uniland,
  ComponentWithProps,
  DeepPartial,
  HTMLUnilandProps,
} from "@uniland-ui/vue-system"
import { defineComponent, h } from "vue"

export interface SpacerProps extends HTMLUnilandProps<"div"> {}

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://uniland-ui.com/docs/layout/flex#using-the-spacer
 */
export const CSpacer: ComponentWithProps<DeepPartial<SpacerProps>> =
  defineComponent({
    name: "CSpacer",
    setup(_, { slots }) {
      return () => {
        return (
          <uniland.div
            __label="spacer"
            baseStyle={{
              flex: 1,
              justifySelf: "stretch",
              alignSelf: "stretch",
            }}
          >
            {slots}
          </uniland.div>
        )
      }
    },
  })
