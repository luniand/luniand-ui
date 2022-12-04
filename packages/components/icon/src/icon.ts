import { h, defineComponent, computed, inject, PropType } from "vue";
import { SVGAttributes } from "vue";
import {
  luniand,
  LuniandProps,
  ComponentWithProps,
  DeepPartial,
} from "@luniand-ui/system";
import { SNAO, camelCase } from "@luniand-ui/utils";
import { mergeWith } from "@luniand-ui/utils";

const fallbackIcon = {
  path: `
    <g stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <path
        fill="currentColor"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  `,
  viewBox: "0 0 24 24",
};

export interface IconProps
  extends Omit<SVGAttributes, keyof LuniandProps>,
    LuniandProps {
  /**
   * Icon Size
   */
  size?: string | number | object;
  name?: string | undefined;
}

export const iconProps = {
  as: "svg",
  size: "1em",
};

const _iconProps = {
  as: SNAO as PropType<IconProps["as"]>,
  size: SNAO as PropType<IconProps["size"]>,
  name: String as PropType<IconProps["name"]>,
};

export const LIcon: ComponentWithProps<DeepPartial<IconProps>> =
  defineComponent({
    name: "LIcon",
    props: _iconProps,
    setup(_props, { slots, attrs }) {
      const props = computed<IconProps>(() => mergeWith({}, iconProps, _props));
      const icons = inject<Record<string, any>>("$luniandIcons");
      const icon = computed(
        () => icons?.[props.value?.name as string] || fallbackIcon
      );

      const hasDefaultSlot = computed(() => slots?.default?.()?.length);
      const vnodeProps = computed(() => ({
        w: props.value.size,
        h: props.value.size,
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: "currentColor",
        ...(!hasDefaultSlot.value && {
          innerHTML: icon.value.path,
        }),
        focusable: false,
        viewBox: icon.value.viewBox || fallbackIcon.viewBox,
      }));

      return () =>
        h(
          luniand.svg,
          {
            as: props.value.as,
            __label: "icon",
            ...(icon.value.attrs || {}),
            ...vnodeProps.value,
            ...attrs,
          },
          slots.defaults?.()
        );
    },
  });

export function createIconComponent(name: string) {
  const componentName = camelCase(name);
  const iconComponent = defineComponent({
    setup(props: IconProps, { slots, attrs }) {
      return () =>
        h(
          LIcon,
          {
            name,
            ...props,
            ...attrs,
          },
          slots.defaults?.()
        );
    },
  });

  iconComponent.name = componentName;
  return iconComponent;
}
