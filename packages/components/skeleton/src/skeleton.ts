/**
 * 📝 Notes for Contributors:
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 *
 * For example, if you wanted to build an accordion component,
 * you'll first create a `useAccordion` hook and then create an `Accordion` component
 *
 * - Ensure this component is properly theme-able by following [this guide](https://ui.luniand.com/docs/theming/component-style)
 *
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * @see Guide https://ui.luniand.com/guides/component-guide
 * @see Theming https://ui.luniand.com/docs/theming/component-style
 */

import { h, ref, defineComponent, PropType, computed, watch } from "vue";
import {
  luniand,
  cssVar,
  HTMLLuniandProps,
  keyframes,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
} from "@luniand-ui/system";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { usePrevious, useToken } from "@luniand-ui/composables";
import { useIsFirstRender } from "./use-is-first-render";


export interface SkeletonOptions {
  /**
   * The color at the animation start
   */
  startColor?: string;
  /**
   * The color at the animation end
   */
  endColor?: string;
  /**
   * If `true`, it'll render its children with a nice fade transition
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   * @default
   * 0.8
   */
  speed?: number;
  /**
   * The fadeIn duration in seconds. Requires `isLoaded` toggled to `true` in order to see the transition.
   *
   * @default
   * 0.4
   */
  fadeDuration?: number;
}


const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

export type LSkeletonType = SkeletonOptions;

export interface SkeletonProps
  extends HTMLLuniandProps<"div">,
    SkeletonOptions,
    ThemingProps<"Skeleton"> {}

const fade = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const bgFade = keyframes({
  from: {
    borderColor: $startColor.reference,
    background: $startColor.reference,
  },
  to: {
    borderColor: $endColor.reference,
    background: $endColor.reference,
  },
});

export const LSkeleton = defineComponent({
  name: "LSkeleton",
  props: {
    startColor: {
      type: String as PropType<SkeletonProps["startColor"]>,
      default: "#EDF2F7",
    },
    endColor: {
      type: String as PropType<SkeletonProps["endColor"]>,
      default: "#A0AEC0",
    },
    isLoaded: {
      type: Boolean as PropType<SkeletonProps["isLoaded"]>,
    },
    fadeDuration: {
      type: Number as PropType<SkeletonProps["fadeDuration"]>,
      default: 0.4,
    },
    speed: {
      type: Number as PropType<SkeletonProps["speed"]>,
      default: 0.8,
    },
    ...vueThemingProps,
  },
  setup(props, { slots, attrs, emit }) {
    const styles = useStyleConfig("Skeleton", props);
    const isFirstRender = useIsFirstRender();
    const { fadeDuration, speed, ...rest } = omitThemingProps(props);

    //@ts-ignore
    const [startColorVar, endColorVar] = useToken("colors", [
      //@ts-ignore
      props.startColor,
      //@ts-ignore
      props.endColor,
    ]);

    const wasPreviouslyLoaded = usePrevious(ref(props.isLoaded));

    const cssVarStyles = {
      ...(startColorVar && { [$startColor.variable]: startColorVar }),
      ...(endColorVar && { [$endColor.variable]: endColorVar }),
    };

    const baseStyle = {
      boxShadow: "none",
      backgroundClip: "padding-box",
      cursor: "default",
      color: "transparent",
      pointerEvents: "none",
      userSelect: "none",
      "&::before, &::after, *": {
        visibility: "hidden",
      },
    };

    const animation =
      isFirstRender || wasPreviouslyLoaded.value
        ? "none"
        : `${fade} ${fadeDuration}s`;

    return () => [
      props.isLoaded &&
        h(
          luniand.div,
          {
            __css: {
              animation,
            },
            ...rest,
          },
          slots
        ),
      !props.isLoaded &&
        h(luniand.div, {
          __css: {
            ...baseStyle,
            ...styles.value,
            ...cssVarStyles,
            _dark: { ...cssVarStyles },
            animation: `${speed}s linear infinite alternate ${bgFade}`,
          },
          ...attrs,
        }),
    ];
  },
});

LSkeleton.displayName = "LSkeleton";
