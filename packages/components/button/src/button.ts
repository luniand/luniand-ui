import { defineComponent, PropType, computed, h } from "vue";

import {
  luniand,
  useStyleConfig,
  LuniandProps,
  ThemingProps,
  HTMLLuniandProps,
  ComponentWithProps,
  SystemStyleObject,
  DeepPartial,
} from "@luniand-ui/system";

import { dataAttr, filterUndefined, mergeWith } from "@luniand-ui/utils";
import { useButtonGroup } from "./button-group";
import { LIcon, IconProps } from "@luniand-ui/icons";
import { LSpinner } from "@luniand-ui/spinner";
import { ButtonProps, defaultButtonProps } from "./button.utils";
import { SystemProps } from "@luniand-ui/styled-system";
import { SNAO, vueThemingProps } from "@luniand-ui/prop-utils";
import { getValidChildren } from "@luniand-ui/utils";

export interface LButtonSpinnerProps extends HTMLLuniandProps<"div"> {
  label?: string;
  spacing?: SystemProps["marginRight"];
  placement?: "start" | "end";
}

const _buttonProps = {
  label: Boolean as PropType<boolean>,
  spacing: [Number, String, Array] as PropType<
    number | string | string[] | number[]
  >,
  placement: String as PropType<"start" | "end">,
};

const LButtonSpinner: ComponentWithProps<DeepPartial<LButtonSpinnerProps>> =
  defineComponent({
    name: "LButtonSpinner",
    props: _buttonProps,
    setup(props, { slots, attrs }) {
      const marginProp = computed(() =>
        props.placement === "start" ? "marginEnd" : "marginStart"
      );
      const spinnerStyles = computed(() => ({
        display: "flex",
        alignItems: "center",
        position: props.label ? "relative" : "absolute",
        [marginProp.value]: props.label ? props.spacing || "0.5rem" : "0",
      }));

      return () =>
        // @ts-ignore
        h(
          luniand.div,
          {
            __label: "button__spinner",
            ...spinnerStyles.value,
            ...attrs,
          },
          h(LSpinner, {
            width: "1em",
            height: "1em",
          })
        );
    },
  });

interface LButtonContentProps {
  leftIcon?: string;
  rightIcon?: string;
  iconSpacing?: LButtonSpinnerProps["spacing"];
}

export const CButtonContentProps = {
  leftIcon: "svg",
  rightIcon: "1em",
  iconSpacing: "",
};

const LButtonContent = defineComponent({
  name: "LButtonContent",
  props: {
    leftIcon: String as PropType<LButtonContentProps["leftIcon"]>,
    rightIcon: String as PropType<LButtonContentProps["rightIcon"]>,
    iconSpacing: String as PropType<LButtonContentProps["iconSpacing"]>,
  },
  setup(props, { slots }) {
    const hasDefaultSlot = computed(() => slots?.default?.()?.length);
    return () => [
      props.leftIcon &&
        h(LButtonIcon, {
          icon: props.leftIcon,
          marginEnd: props.iconSpacing,
        }),
      slots.defaults?.(),
      props.rightIcon &&
        h(LButtonIcon, {
          icon: props.rightIcon,
          marginStart: props.iconSpacing,
        }),
    ];
  },
});

const LButtonIcon: ComponentWithProps<DeepPartial<IconProps>> = defineComponent(
  {
    name: "LButtonIcon",
    props: {
      icon: String as PropType<string>,
    },
    setup(props, { attrs }) {
      return () =>
        h(LIcon, {
          __label: "button__icon",
          name: props.icon,
          ...attrs,
        });
    },
  }
);

export interface LButtonProps extends HTMLLuniandProps<"button"> {}

export const LButton: ComponentWithProps<DeepPartial<LButtonProps>> =
  defineComponent({
    name: "LButton",
    props: {
      isLoading: {
        type: Boolean as PropType<ButtonProps["isLoading"]>,
      },
      isDisabled: {
        type: Boolean as PropType<ButtonProps["isDisabled"]>,
      },
      isActive: {
        type: Boolean as PropType<ButtonProps["isActive"]>,
      },
      loadingText: {
        type: String as PropType<ButtonProps["loadingText"]>,
      },
      isFullWidth: {
        type: Boolean as PropType<ButtonProps["isFullWidth"]>,
      },
      type: {
        type: String as PropType<ButtonProps["type"]>,
      },
      leftIcon: {
        type: String as PropType<ButtonProps["leftIcon"]>,
      },
      rightIcon: {
        type: String as PropType<ButtonProps["rightIcon"]>,
      },
      iconSpacing: {
        type: SNAO as PropType<ButtonProps["iconSpacing"]>,
      },
      spinnerPlacement: {
        type: String as PropType<"start" | "end">,
        default: "start",
      },
      ...vueThemingProps,
    },
    setup(_props, { attrs, slots }) {
      const props = computed(() =>
        mergeWith({}, defaultButtonProps, _props, attrs)
      );
      const themingProps = computed<ThemingProps>(() =>
        filterUndefined({
          colorScheme: props.value.colorScheme,
          variant: props.value.variant,
          size: props.value.size,
          styleConfig: props.value.styleConfig,
        })
      );

      const group = useButtonGroup();
      const styles = useStyleConfig(
        "Button",
        computed(() => ({ ...group?.value, ...themingProps.value }))
      );

      const _focus = computed<SystemStyleObject>(() =>
        // @ts-ignore TODO: check _focus
        mergeWith({}, styles.value?.["_focus"] ?? {}, {
          zIndex: 1,
        })
      );

      const buttonStyles = computed<SystemStyleObject>(() => ({
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 250ms",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        width: props.value.isFullWidth ? "100%" : "auto",
        ...styles.value,
        ...(!!group?.value && { _focus: _focus.value }),
      }));

      return () =>
        h(
          luniand.button,
          {
            as: props.value.as,
            label: "button",
            ...((props.value.isDisabled || props.value.isLoading) && {
              disabled: props.value.isDisabled || props.value.isLoading,
            }),
            type: props.value.as === "button" ? undefined : props.value.type,
            dataActive: dataAttr(props.value.isActive),
            dataLoading: dataAttr(props.value.isLoading),
            __css: buttonStyles.value,
            ...attrs,
          },
          () => [
            props.value.isLoading &&
              props.value.spinnerPlacement === "start" &&
              h(LButtonSpinner, {
                placement: "start",
                spacing: props.value.iconSpacing,
                __label: "button-spinner__start",
                label: props.value.loadingText,
                __css: {
                  fontSize: "1em",
                  lineHeight: "normal",
                },
              }),

            props.value.isLoading
              ? props.value.loadingText ||
                h(
                  luniand.span,
                  { opacity: 0 },
                  h(
                    LButtonContent,
                    {
                      leftIcon: props.value.leftIcon,
                      rightIcon: props.value.rightIcon,
                      iconSpacing: props.value.iconSpacing,
                    },
                    () => slots?.default?.()
                  )
                )
              : h(
                  LButtonContent,
                  {
                    leftIcon: props.value.leftIcon,
                    rightIcon: props.value.rightIcon,
                    iconSpacing: props.value.iconSpacing,
                  },
                  () => getValidChildren(slots)
                ),

            props.value.isLoading &&
              props.value.spinnerPlacement === "end" &&
              h(LButtonSpinner, {
                placement: "end",
                spacing: props.value.iconSpacing,
                __label: "button-spinner__end",
                label: props.value.loadingText,
                __css: {
                  fontSize: "1em",
                  lineHeight: "normal",
                },
              }),
            slots?.default?.(),
          ],
        );
    },
  });

export default LButton;
