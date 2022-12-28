import { defineComponent, h, PropType, toRefs } from "vue";
import { useBreakpointValue } from "@luniand-ui/media-query";
import { luniand } from "@luniand-ui/system";
import { cx } from "@luniand-ui/utils";
import { SkeletonProps, LSkeleton } from "./skeleton";

function range(count: number) {
  return Array(count)
    .fill(1)
    .map((_, index) => index + 1);
}

export interface LSkeletonTextProps extends SkeletonProps {
  spacing?: SkeletonProps["margin"];
  skeletonHeight?: SkeletonProps["height"];
  startColor?: SkeletonProps["startColor"];
  endColor?: SkeletonProps["endColor"];
  isLoaded?: SkeletonProps["isLoaded"];
}

const defaultNoOfLines = 3;

export const LSkeletonText = defineComponent({
  name: "LSkeletonText",
  props: {
    spacing: {
      type: String as PropType<string>,
      default: "0.5rem",
    },
    skeletonHeight: {
      type: String as PropType<string>,
      default: "0.5rem",
    },
    startColor: {
      type: String as PropType<LSkeletonTextProps["startColor"]>,
      default: "#EDF2F7",
    },
    endColor: {
      type: String as PropType<LSkeletonTextProps["endColor"]>,
      default: "#A0AEC0",
    },
    isLoaded: Boolean as PropType<LSkeletonTextProps["isLoaded"]>,
    fadeDuration: {
      type: Number as PropType<LSkeletonTextProps["fadeDuration"]>,
      default: null,
    },
    speed: {
      type: Number as PropType<LSkeletonTextProps["speed"]>,
      default: null,
    },
    noOfLines: {
      type: Number as PropType<LSkeletonTextProps["noOfLines"]>,
      default: defaultNoOfLines,
    },
  },
  setup(props, { slots }) {
    const {
      noOfLines,
      spacing,
      className,
      skeletonHeight,
      startColor,
      endColor,
      isLoaded,
      fadeDuration,
      speed,
      ...rest
    } = toRefs<any>(props);

    const noOfLinesValue =
      useBreakpointValue([noOfLines.value]) || defaultNoOfLines;
    const numbers = range(noOfLinesValue);

    const getWidth = (index: number) => {
      if (noOfLinesValue > 1) {
        return index === numbers.length ? "80%" : "100%";
      }
      return "100%";
    };

    const _className = cx("luniand-skeleton__group", className);

    return () => {
      return h(luniand("div", { class: _className, ...rest }), () => [
        numbers.map((number, index) => {
          if (isLoaded.value && index > 0) {
            // skip other lines
            return null;
          }

          const sizeProps = isLoaded.value
            ? null
            : {
                mb: number === numbers.length ? "0" : spacing.value,
                width: getWidth(number),
                height: skeletonHeight.value,
              };

          return h(
            luniand(LSkeleton),
            {
              key: numbers.length.toString() + number,
              startColor: startColor.value,
              endColor: endColor.value,
              isLoaded: isLoaded.value,
              fadeDuration: fadeDuration.value,
              speed: speed.value,
              ...sizeProps,
            },
            index === 0 ? slots : undefined
          );
        }),
      ]);
    };
  },
});
