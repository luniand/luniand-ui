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

import { h, defineComponent, PropType, DefineComponent, computed } from "vue";
import {
  luniand,
  luniandProps,
  ComponentWithProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
} from "@luniand-ui/system";
import { LIcon } from "@luniand-ui/icons";
import { filterUndefined } from "@luniand-ui/utils";
import { getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";

interface TagOptions {
  variantColor?: string;
}

export interface LTagProps
  extends luniandProps,
    TagOptions,
    ThemingProps<"LTag"> {}

export interface LTagLabelProps
  extends luniandProps,
    ThemingProps<"LTagLabel"> {}

export const LTagLabel: ComponentWithProps<LTagLabelProps> = defineComponent({
  props: {
    ...vueThemingProps,
  },
  setup(props, { slots, attrs }) {
    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: props.colorScheme,
        variant: props.variant,
        size: props.size,
        styleConfig: props.styleConfig,
      })
    );
    const styles = useMultiStyleConfig("Tag", themingProps);

    return () =>
      h(
        luniand.span,
        { __css: styles.value.label, noOfLines: 1, ...attrs },
        () => getValidChildren(slots)
      );
  },
});

export interface LTagCloseButtonProps
  extends luniandProps,
    ThemingProps<"LTagCloseButton"> {
  isDisabled?: boolean;
}

const TagProps = {
  variantColor: String as PropType<TagOptions["variantColor"]>,
  ...vueThemingProps,
};

export const LTagLeftIcon: DefineComponent = defineComponent({
  setup(props, { attrs }) {
    return () => h(LIcon, { ...attrs, ...props, marginEnd: "0.5rem" });
  },
});

export const LTagRightIcon: DefineComponent = defineComponent({
  setup(props, { attrs }) {
    return () => h(LIcon, { ...attrs, ...props, marginStart: "0.5rem" });
  },
});

const CloseButtonProps = {
  isDisabled: Boolean as PropType<LTagCloseButtonProps["isDisabled"]>,
  ...vueThemingProps,
};

export const LTagCloseButton: ComponentWithProps<LTagCloseButtonProps> =
  defineComponent({
    props: CloseButtonProps,
    setup(props, { slots, attrs }) {
      const themingProps = computed<ThemingProps>(() =>
        filterUndefined({
          colorScheme: props.colorScheme,
          variant: props.variant,
          size: props.size,
          styleConfig: props.styleConfig,
        })
      );

      const styles = useMultiStyleConfig("Tag", themingProps);

      const buttonStyles: SystemStyleObject = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "0",
        ...styles.value.closeButton,
      };

      return () =>
        h(
          luniand.button,
          {
            "aria-label": "close",
            type: "button",
            __css: buttonStyles,
            ...attrs,
            disabled: props?.isDisabled,
          },
          slots.default
            ? () => getValidChildren(slots)
            : () => h(LIcon, { name: "close" })
        );
    },
  });

export const LTag: ComponentWithProps<LTagProps> = defineComponent({
  props: TagProps,
  setup(props, { slots, attrs }) {
    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: props.colorScheme,
        variant: props.variant,
        size: props.size,
        styleConfig: props.styleConfig,
      })
    );
    const styles = useMultiStyleConfig("Tag", themingProps);
    const tagContainerStyles = computed<SystemStyleObject>(() => ({
      ...styles.value?.container,
      bg: props.variantColor ?? styles.value?.container?.bg,
    }));

    return () =>
      h(
        luniand.span,
        {
          __label: "tag",
          "aria-label": "tag",
          __css: tagContainerStyles.value,
          ...attrs,
        },
        () => getValidChildren(slots)
      );
  },
});
