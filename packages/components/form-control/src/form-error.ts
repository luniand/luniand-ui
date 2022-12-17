import {
  luniand,
  ComponentWithProps,
  DeepPartial,
  HTMLLuniandProps,
  StylesProvider,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
} from "@luniand-ui/system";
import { defineComponent, h, PropType } from "vue";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { useFormControlContext } from "./use-form-control";
import { LIcon, iconProps, IconProps } from "@luniand-ui/icons";
import { SNAO, camelCase } from "@luniand-ui/utils";

export interface LFormErrorMessageProps
  extends HTMLLuniandProps<"div">,
    ThemingProps<"FormErrorMessage"> {}

export const LFormErrorMessage: ComponentWithProps<LFormErrorMessageProps> =
  defineComponent({
    name: "LFormErrorMessage",
    props: {
      ...vueThemingProps,
    },
    setup(props, { slots, attrs }) {
      const styles = useMultiStyleConfig("FormError", props);
      const field = useFormControlContext();

      StylesProvider(styles);

      const handleBeforeVNodeMounted = () => {
        field.value.hasFeedbackText.value = true;
      };

      return () => {
        if (!field?.value?.isInvalid?.value) return null;

        return h(
          luniand("div", {
            __label: "form__error-message",
            onVnodeBeforeMount: { handleBeforeVNodeMounted },
            __css: {
              display: "flex",
              alignItems: "center",
              ...styles.value.text,
            },
            ...attrs,
          }),
          slots
        );
      };
    },
  });

/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */

const errorIconProps = {
  as: SNAO as PropType<IconProps["as"]>,
  size: SNAO as PropType<IconProps["size"]>,
  name: String as PropType<IconProps["name"]>,
};

export const LFormErrorIcon: ComponentWithProps<DeepPartial<IconProps>> =
  defineComponent({
    name: "LFormErrorIcon",
    props: errorIconProps,
    setup(props, { attrs }) {
      const styles = useStyles();
      const field = useFormControlContext();

      return () => {
        if (!field?.value?.isInvalid?.value) return null;

        return h(
          // @ts-ignore
          LIcon,
          {
            ariaHidden: true,
            __css: styles.value.icon,
            class: "luniand-form__error-icon",
            ...props,
            ...attrs,
            name: "__error_icon",
          }
        );
      };
    },
  });
