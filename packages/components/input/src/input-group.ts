import { filterUndefined } from '@luniand-ui/utils';
import {
  luniand,
  HTMLLuniandProps,
  omitThemingProps,
  StylesProvider,
  ThemingProps,
  useMultiStyleConfig,
} from '@luniand-ui/system';
import { getValidChildren } from '@luniand-ui/utils';
import { vueThemingProps } from '@luniand-ui/prop-utils';
import {
  computed,
  h,
  Fragment,
  defineComponent,
  mergeProps,
  VNode,
  cloneVNode,
} from 'vue';

export interface LInputGroupProps
  extends HTMLLuniandProps<'div'>,
    ThemingProps<'Input'> {}

export const LInputGroup = defineComponent({
  name: 'LInputGroup',
  props: {
    ...vueThemingProps,
  },
  setup(props, { slots, attrs }) {
    const styleAttrs = computed(() => mergeProps(attrs, props));
    const styles = useMultiStyleConfig('Input', styleAttrs);
    const input = computed(() => styles.value?.field);
    const unthemedProps = computed(() => omitThemingProps(styleAttrs.value));

    StylesProvider(styles);

    return () => {
      const groupStyles = {} as LInputGroupProps;
      const validChildren = getValidChildren(slots);
      validChildren.forEach((vnode) => {
        if (!styles.value) return;
        // @ts-expect-error Here we internally check for the appended `id` prop to the component
        if (input.value && vnode.type.id === 'LInputLeftElement') {
          // @ts-expect-error
          groupStyles.paddingStart = input.value.height || input.value.h;
        }
        // @ts-expect-error
        if (input.value && vnode.type.id === 'LInputRightElement') {
          // @ts-expect-error
          groupStyles.paddingEnd = input.value.height || input.value.h;
        }
        // @ts-expect-error
        if (input.value && vnode.type.id === 'LInputLeftAddon') {
          groupStyles.borderEndRadius = 0;
        }
        // @ts-expect-error
        if (input.value && vnode.type.id === 'LInputRightAddon') {
          groupStyles.borderStartRadius = 0;
        }
      });

      const clones = validChildren.map((vnode: VNode) => {
        const theming = filterUndefined({
          size: vnode.props?.size || props.size,
          variant: vnode.props?.size || props.variant,
        });

        // @ts-ignore
        return vnode.type?.name !== 'LInput'
          ? cloneVNode(vnode, theming)
          : cloneVNode(
              vnode,
              Object.assign(
                theming,
                groupStyles
                // vnode.props
              )
            );
      });

      return h(
        luniand.div,
        {
          __label: 'input__group',
          __css: {
            width: '100%',
            display: 'flex',
            position: 'relative',
          },
          ...unthemedProps.value,
        },
        () => clones
      );
    };
  },
});
