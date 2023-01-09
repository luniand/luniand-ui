import { h, defineComponent, PropType, computed, Fragment } from "vue";
import {
  luniand,
  LuniandProps,
  ComponentWithProps,
  SystemStyleObject,
  ThemingProps,
  useStyles,
} from "@luniand-ui/system";
import { getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

type BadgePlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end";

const placementMap: Record<BadgePlacement, SystemStyleObject> = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)",
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)",
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)",
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)",
  },
};

export interface AvatarBadgeProps
  extends LuniandProps,
    ThemingProps<"CAvatarBadge"> {
  placement?: BadgePlacement;
}

const CAvatarBadgeProps = {
  placement: String as PropType<BadgePlacement>,
  ...vueThemingProps,
};

export const LAvatarBadge: ComponentWithProps<typeof CAvatarBadgeProps> =
  defineComponent({
    props: {
      ...CAvatarBadgeProps,
    },
    setup(props, { slots, attrs }) {
      const styles = useStyles();
      const placementStyles = computed(
        () => placementMap[props.placement || "bottom-end"] || "bottom-end"
      );

      const badgeStyles = computed(() => ({
        // @ts-ignore
        ...styles.value.badge,
        ...placementStyles.value,
      }));
      return () =>
        h(
          luniand.div,
          {
            __label: "avatar-badge",
            __css: badgeStyles.value,
            ...props,
            ...attrs,
          },

          () => getValidChildren(slots)
        );
    },
  });
