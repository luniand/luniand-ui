import { mapResponsive } from "@uisland-ui/utils"
import {
  uisland,
  HTMLUislandProps,
  ResponsiveValue,
  DeepPartial,
  ComponentWithProps,
} from "@uisland-ui/vue-system"
import { defineComponent, h, PropType } from "vue"

interface AspectRatioOptions {
  /**
   * The aspect ratio of the Box. Common values are:
   *
   * `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
   */
  ratio?: ResponsiveValue<number>
}

export interface AspectRatioProps
  extends HTMLUislandProps<"div">,
    AspectRatioOptions {}

/**
 * Vue component used to cropping media (videos, images and maps)
 * to a desired aspect ratio.
 *
 * @see Docs https://vue.uisland-ui.com/docs/layout/aspect-ratio
 */
export const CAspectRatio: ComponentWithProps<DeepPartial<AspectRatioProps>> =
  defineComponent({
    name: "CAspectRatio",
    props: {
      ratio: {
        type: [Number] as PropType<AspectRatioProps["ratio"]>,
        default: 4 / 3,
      },
    },
    setup(props, { slots, attrs }) {
      return () => (
        <uisland.div
          __label="aspect-ratio"
          position="relative"
          _before={{
            height: 0,
            content: `""`,
            display: "block",
            paddingBottom: mapResponsive(
              props.ratio,
              (r) => `${(1 / r) * 100}%`
            ),
          }}
          __css={{
            "& > *:not(style)": {
              overflow: "hidden",
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            },
            "& > img, & > video": {
              objectFit: "cover",
            },
          }}
          {...attrs}
        >
          {slots}
        </uisland.div>
      )
    },
  })
