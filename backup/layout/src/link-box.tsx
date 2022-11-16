import { ComponentWithProps, HTMLUislandProps } from "@uisland-ui/vue-system"
import { h, defineComponent, PropType } from "vue"
import { uisland, DOMElements, DeepPartial } from "@uisland-ui/vue-system"

export interface LinkOverlayProps extends HTMLUislandProps<"a"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

export const CLinkOverlay: ComponentWithProps<DeepPartial<LinkOverlayProps>> =
  defineComponent({
    name: "CLinkOverlay",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "a",
      },
      isExternal: Boolean as PropType<LinkOverlayProps["isExternal"]>,
    },
    setup(props, { slots, attrs }) {
      return () => (
        <uisland.div
          as={props.as}
          __label="linkbox__overlay"
          // @ts-ignore Can we type the "rel" HTML JSX Attribute?
          rel={props.isExternal ? "noopener noreferrer" : undefined}
          target={props.isExternal ? "_blank" : undefined}
          __css={{
            position: "static",
            "&::before": {
              content: "''",
              cursor: "inherit",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%",
            },
          }}
          {...attrs}
        >
          {slots}
        </uisland.div>
      )
    },
  })

export interface LinkBoxProps extends HTMLUislandProps<"div"> {}

/**
 * `LinkBox` is used to wrap content areas within a link while ensuring semantic html
 *
 * @see Docs https://vue.uisland-ui.com/docs/link-overlay
 * @see Resources https://www.sarasoueidan.com/blog/nested-links
 */
export const CLinkBox: ComponentWithProps<DeepPartial<LinkBoxProps>> =
  defineComponent({
    name: "CLinkBox",
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: "div",
      },
    },
    setup(props, { slots, attrs }) {
      return () => {
        return (
          <uisland.div
            as={props.as}
            __label="linkbox"
            position="relative"
            __css={{
              /* Elevates links and abbreviations */
              "a[href]:not(.uisland-linkbox__overlay), abbr[title]": {
                position: "relative",
                zIndex: 1,
              },
            }}
            {...attrs}
          >
            {slots}
          </uisland.div>
        )
      }
    },
  })
