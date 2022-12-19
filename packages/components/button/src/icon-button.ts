import { h, defineComponent, PropType, VNode } from "vue";
import LButton from "./button";
import { ButtonProps } from "./button.utils";
import { LIcon } from "@luniand-ui/icons";
import { ComponentWithProps, DeepPartial } from "@luniand-ui/system";

const IconButtonProps = {
  icon: String as PropType<string>,
  isRound: Boolean as PropType<boolean>,
  ariaLabel: {
    type: String as PropType<string>,
    required: true,
  },
};

export interface LIconButtonProps extends ButtonProps {
  icon: string;
  isRound?: boolean;
  ariaLabel: string;
}

const LIconButton: ComponentWithProps<DeepPartial<LIconButtonProps>> =
  defineComponent({
    name: "LIconButton",
    props: IconButtonProps,
    setup(props, { attrs }) {
      if (!props.ariaLabel) {
        console.error(
          `luniand: The \`aria-label\` prop is required for the <l-icon-button />`
        );
      }

      return () =>
        h(
          LButton,
          {
            padding: "0",
            rounded: props.isRound ? "rounded" : "md",
            ariaLabel: props.ariaLabel,
            ...attrs,
          },
          h(LIcon, {
            ariaHidden: props.ariaLabel,
            focusable: 0,
            name: props.icon,
          })
        );
    },
  });

export default LIconButton;
