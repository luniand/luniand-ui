import {
  uisland,
  ComponentWithProps,
  DeepPartial,
  HTMLUislandProps,
} from "@uisland-ui/vue-system"
import { defineComponent, h } from "vue"

export interface SpacerProps extends HTMLUislandProps<"div"> {}

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://uisland-ui.com/docs/layout/flex#using-the-spacer
 */
export const CSpacer: ComponentWithProps<DeepPartial<SpacerProps>> =
  defineComponent({
    name: "CSpacer",
    setup(_, { slots }) {
      return () => {
        return (
          <uisland.div
            __label="spacer"
            baseStyle={{
              flex: 1,
              justifySelf: "stretch",
              alignSelf: "stretch",
            }}
          >
            {slots}
          </uisland.div>
        )
      }
    },
  })
