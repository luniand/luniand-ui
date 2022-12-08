import { defineComponent, PropType, computed, h } from 'vue';
import { SNAO, vueThemingProps } from '@luniand-ui/prop-utils';
import {
  luniand,
  keyframes,
  DOMElements,
  ThemingProps,
  useStyleConfig,
  SystemStyleObject,
  HTMLLuniandProps,
  ComponentWithProps,
  DeepPartial,
} from '@luniand-ui/system';

import { LVisuallyHidden } from '@luniand-ui/visually-hidden';
import { mergeWith } from '@luniand-ui/utils';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

interface SpinnerOptions {
  /**
   * The color of the empty area in the spinner
   */
  emptyColor?: string;
  /**
   * The color of the spinner
   */
  color?: string;
  /**
   * The thickness of the spinner
   * @example
   * ```html
   * <Lspinner thickness="4px"/>
   * ```
   */
  thickness?: string;
  /**
   * The speed of the spinner.
   * @example
   * ```html
   * <Lspinner speed="0.2s"/>
   * ```
   */
  speed?: string;
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string;
}

export interface LSpinnerProps
  extends SpinnerOptions,
    ThemingProps,
    HTMLLuniandProps<'div'> {
  color?: string;
  as?: DOMElements;
}

const defaultSpinnerProps = {
  as: 'div',
  emptyColor: 'transparent',
  thickness: '2px',
  speed: '0.45s',
};

const LSpinner: ComponentWithProps<DeepPartial<LSpinnerProps>> =
  defineComponent({
    props: {
      as: SNAO as PropType<LSpinnerProps['as']>,
      /**
       * The color of the empty area in the spinner
       */
      emptyColor: SNAO as PropType<LSpinnerProps['emptyColor']>,
      /**
       * The color of the spinner
       */
      color: SNAO as PropType<LSpinnerProps['color']>,
      /**
       * The thickness of the spinner
       * @example
       * ```html
       * <Lspinner thickness="4px"/>
       * ```
       */
      thickness: SNAO as PropType<LSpinnerProps['thickness']>,
      /**
       * The speed of the spinner.
       * @example
       * ```html
       * <Lspinner speed="0.2s"/>
       * ```
       */
      speed: SNAO as PropType<LSpinnerProps['speed']>,
      /**
       * For accessibility, it is important to add a fallback loading text.
       * This text will be visible to screen readers.
       */
      label: SNAO as PropType<LSpinnerProps['label']>,
      ...vueThemingProps,
    },
    setup(_props, { slots, attrs }) {
      const props = computed(() => mergeWith({}, defaultSpinnerProps, _props));
      const themingProps = computed<ThemingProps>(() => ({
        colorScheme: props.value.colorScheme,
        variant: props.value.variant,
        size: props.value.size,
        styleConfig: props.value.styleConfig,
      }));
      const styles = useStyleConfig('Spinner', themingProps);
      const spinnerStyles = computed<SystemStyleObject>(() => ({
        display: 'inline-block',
        borderColor: 'currentColor',
        borderStyle: 'solid',
        borderRadius: '99999px',
        borderWidth: props.value.thickness,
        borderBottomColor: props.value.emptyColor,
        borderLeftColor: props.value.emptyColor,
        color: props.value.color,
        animation: `${spin} ${props.value.speed} linear infinite`,
        ...styles.value,
      }));

      return () =>
        h(
          luniand.div,
          {
            as: props.value.as,
            __label: 'spinner',
            __css: spinnerStyles.value,
            ...attrs,
          },
          props.value.label &&
            (() => [h(LVisuallyHidden), () => props.value.label])
        );
    },
  });

export default LSpinner;
