import { defineComponent, h, PropType, computed } from "vue";
import { luniand, HTMLLuniandProps, useStyles } from "@luniand-ui/system";
import { warn } from "@luniand-ui/utils";

type Placement = "left" | "right";

const placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent",
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent",
  },
};

const LStyledAddon = luniand("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
});

export interface LInputAddonProps extends HTMLLuniandProps<"div"> {
  placement?: Placement;
}

/**
 * CInputAddon
 *
 * Element to append or prepend to an input
 */
export const LInputAddon = defineComponent({
  name: "LInputAddon",
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: "left",
    },
  },
  setup(props, { slots, attrs }) {
    try {
      const placementStyles = computed(() => placements[props.placement]);
      const styles = useStyles();
      return () =>
        h(
          LStyledAddon,
          {
            __css: {
              // @ts-ignore
              ...styles.value.addon,
              ...placementStyles.value,
            },
            ...attrs,
          },
          { slots }
        );
    } catch (error: any) {
      warn({
        condition: !!error,
        message:
          "`LInputAddon` can only be used inside the `LInputGroup` component.",
      });
      console.error(error);
      return () => null;
    }
  },
});

/**
 * LInputLeftAddon
 *
 * Element to prepend to the left of an input
 */
export const LInputLeftAddon = defineComponent({
  name: "LInputLeftAddon",
  setup(_, { slots, attrs }) {
    return () =>
      h(
        LInputAddon,
        { placement: "left", __label: "input__left-addon", ...attrs },
        slots
      );
  },
});

LInputLeftAddon.id = "LInputLeftAddon";

/**
 * LInputRightAddon
 *
 * Element to append to the right of an input
 */
export const LInputRightAddon = defineComponent({
  name: "LInputRightAddon",
  setup(_, { slots, attrs }) {
    return () =>
      h(
        LInputAddon,
        {
          placement: "right",
          __label: "input__right-addon",
          ...attrs,
        },
        slots
      );
  },
});

LInputRightAddon.id = "LInputRightAddon";
