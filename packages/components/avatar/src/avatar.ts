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

import {
  h,
  defineComponent,
  PropType,
  computed,
  ref,
  Fragment,
  mergeProps,
  ComputedRef,
} from "vue";
import {
  luniand,
  ComponentWithProps,
  DOMElements,
  omitThemingProps,
  StylesProvider,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
  useTheme,
} from "@luniand-ui/system";
import { LBox } from "@luniand-ui/layout";
import { getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { Dict, filterUndefined } from "@luniand-ui/utils";
import { useAvatarGroup } from "./avatar-group";
import { extractImgAttrs, getInitials } from "./utils";

const AvatarDefaultImageIcon = {
  fill: "#fff",
  role: "img",
  viewBox: "0 0 128 128",
};

const useDynamicContainerStyles = (
  props: unknown,
  styles: ComputedRef<Dict<SystemStyleObject>>
) => {
  const theme = useTheme();
  const calculatedColorStyles = computed(
    () => theme.components?.Avatar?.baseStyle(props)?.container
  );

  return computed(() => ({
    ...styles.value.container,
    bg: calculatedColorStyles.value.bg,
    color: calculatedColorStyles.value.color,
    display: styles.value.container.display || "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
};

const LAvatarDefaultImage = defineComponent({
  setup(props) {
    const styles = useStyles();
    const containerStyles = useDynamicContainerStyles(props, styles);

    const vnodeProps = computed(() => ({
      fill: AvatarDefaultImageIcon.fill,
      viewBox: AvatarDefaultImageIcon.viewBox,
      role: AvatarDefaultImageIcon.role,
    }));

    return () =>
      h(
        LBox,
        { __css: containerStyles.value },
        h(
          luniand.svg,
          {
            ...vnodeProps.value,
          },
          h("g", [
            h("path", {
              d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z",
            }),
            h("path", {
              d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24",
            }),
          ])
        )
      );
  },
});

const LAvatarInitials = defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
    initials: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const styles = useStyles();
    const containerStyles = useDynamicContainerStyles(props, styles);

    const labelStyles = computed(() => ({
      ...styles.value.label,
      fontWeight: "medium",
    }));

    return () =>
      h(
        LBox,
        { __css: containerStyles.value },
        h(
          luniand.div,
          {
            role: "img",
            ariaLabel: props.name,
            __css: labelStyles.value,
          },
          () => [
            props.initials
              ? props.initials
              : props.name && getInitials(props.name),
          ]
        )
      );
  },
});

export const avatarProps = {
  as: {
    type: [Object, String] as PropType<DOMElements>,
    default: "span",
  },
  src: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  initials: {
    type: String,
    default: "",
  },
  ...vueThemingProps,
};

export type LAvatarProps = typeof avatarProps;

export const LAvatar: ComponentWithProps<LAvatarProps> = defineComponent({
  props: {
    ...avatarProps,
  },
  setup(props, { slots, attrs }) {
    // Props handling
    const mergedProps = computed(() => mergeProps({}, props, attrs));
    const ownProps = computed(() => omitThemingProps(mergedProps.value));
    const extractedAttrs = computed(() => extractImgAttrs(ownProps.value));

    // State handling
    const error = ref(false);
    const pending = ref(true);

    // Fetching custom icon
    const validChildren = ref(getValidChildren(slots));
    const customIcon = validChildren.value?.find((child, index) => {
      if ((child.type as any).name === "CIcon") {
        validChildren.value.splice(index, 1);
        return true;
      }
    });

    // Handling styles
    const avatarGroupStyles = useAvatarGroup();

    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: avatarGroupStyles?.value?.colorScheme || props.colorScheme,
        variant: avatarGroupStyles?.value?.variant || props.variant,
        size: avatarGroupStyles?.value?.size || props.size,
        styleConfig: avatarGroupStyles?.value?.styleConfig || props.styleConfig,
      })
    );

    const styles = useMultiStyleConfig("Avatar", themingProps);
    const containerStyles = useDynamicContainerStyles(props, styles);

    const imgStyles = computed(() => ({
      objectFit: "cover",
      ...containerStyles.value,
    }));

    StylesProvider(styles);

    return () =>
      h(
        luniand.div,
        {
          __label: "avatar",
          __css: containerStyles.value,
          ...extractedAttrs.value.rest,
        },
        () => [
          !error.value &&
            h(luniand.img, {
              src: props.src,
              __css: imgStyles.value,
              onError: () => {
                error.value = true;
                pending.value = false;
              },
              onLoad: () => {
                error.value = false;
                pending.value = false;
              },
              alt: props.name,
              ariaLabel: props.name,
              display: pending.value
                ? "none"
                : (containerStyles.value.display as string),
              ...extractedAttrs.value.imgAttrs,
            }),
          (pending.value || error.value) &&
            (props.name
              ? h(LAvatarInitials, {
                  initials: props.initials,
                  name: props.name,
                  ...extractedAttrs.value.rest,
                })
              : customIcon ??
                h(LAvatarDefaultImage, { ...extractedAttrs.value.rest })),
          validChildren.value,
        ]
      );
  },
});
