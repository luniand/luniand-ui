import {
  LBox,
  LWrap,
  LWrapItem,
  LWrapProps,
  WrapProps,
} from "@luniand-ui/layout";
import {
  ThemingProps,
  useMultiStyleConfig,
  luniand,
  ComponentWithProps,
} from "@luniand-ui/system";
import { createContext, getValidChildren } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { filterUndefined } from "@luniand-ui/utils";

import { h, defineComponent, computed, ComputedRef } from "vue";

type AvatarGroupContext = ComputedRef<ThemingProps>;

const [AvatarGroupProvider, useAvatarGroup] = createContext<AvatarGroupContext>(
  {
    strict: false,
    name: "AvatarGroupContext",
  }
);

export { useAvatarGroup };

export const LAvatarText = defineComponent({
  props: {
    text: {
      type: String,
      default: "",
    },
    ...vueThemingProps,
  },
  setup(props, ctx) {
    const themingProps = computed<ThemingProps>(() =>
      filterUndefined({
        colorScheme: props.colorScheme,
        variant: props.variant,
        size: props.size,
        styleConfig: props.styleConfig,
      })
    );
    const styles = useMultiStyleConfig("Avatar", themingProps);
    const containerStyles = computed(() => ({
      ...styles.value.container,
      display: styles.value.container.display || "flex",
      alignItems: "center",
      justifyContent: "center",
    }));
    const labelStyles = computed(() => ({
      ...styles.value.label,
      fontWeight: "medium",
    }));

    return () =>
      h(
        luniand.div,
        { __css: containerStyles.value, ...ctx.attrs },
        h(
          luniand.div,
          {
            role: "img",
            __css: labelStyles.value,
          },
          () => [props.text]
        )
      );
  },
});

export const avatarGroupProps = {
  max: {
    type: Number,
    default: 2,
  },
  ...LWrapProps,
  ...vueThemingProps,
};

export const LAvatarGroup: ComponentWithProps<typeof avatarGroupProps> =
  defineComponent({
    props: avatarGroupProps,
    setup(props, { slots, attrs }) {
      const wrapProps = computed(
        () =>
          ({
            spacing: props.spacing || "-0.75em",
            direction: props.direction || "row-reverse",
            justify: props.justify,
            align: props.align,
            shouldWrapChildren: props.shouldWrapChildren,
          } as WrapProps)
      );
      const themingProps = computed<ThemingProps>(() =>
        filterUndefined({
          colorScheme: props.colorScheme,
          variant: props.variant,
          size: props.size,
          styleConfig: props.styleConfig,
        })
      );
      const validChildren = computed(() => getValidChildren(slots));
      const visibleChildren = computed(() =>
        validChildren.value.slice(0, props.max)
      );
      const nbHidden = computed(() => validChildren.value.length - props.max);

      AvatarGroupProvider(themingProps);

      return () =>
        h(
          LBox,
          {
            __label: "avatar-group",
            display: "flex",
            ...attrs,
          },
          h(LWrap, { ...wrapProps.value }, () => [
            nbHidden.value > 0 &&
              h(
                LWrapItem,
                h(LAvatarText, {
                  ...themingProps.value,
                  text: `+${nbHidden.value}`,
                })
              ),
            visibleChildren.value.map((child: any) => (h(LWrapItem), child)),
          ])
        );
    },
  });
