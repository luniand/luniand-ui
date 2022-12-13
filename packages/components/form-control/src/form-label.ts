import { defineComponent, computed, h } from 'vue';
import {
  luniand,
  ComponentWithProps,
  HTMLLuniandProps,
  ThemingProps,
  useStyleConfig,
  useStyles,
} from '@luniand-ui/system';
import { vueThemingProps } from '@luniand-ui/prop-utils';
import { useFormControlContext } from './use-form-control';

export interface FormLabelProps
  extends HTMLLuniandProps<'label'>,
    ThemingProps<'FormLabel'> {}

export const LFormLabel = defineComponent({
  name: 'LFormLabel',
  props: vueThemingProps,
  setup(props, { attrs, slots }) {
    const styles = useStyleConfig('FormLabel', props);
    const field = useFormControlContext();
    const requiredIndicator = computed(() => {
      if (slots.indicator) {
        return slots.indicator?.();
      } else {
        return h(LRequiredIndicator);
      }
    });

    return () =>
      h(
        luniand.label,
        {
          __label: 'form__label',
          __css: {
            display: 'block',
            textAlign: 'start',
            ...styles.value,
          },
          ...field?.value?.labelProps.value,
          ...attrs,
        },
        () => [
          slots?.default?.(),
          field?.value?.isRequired?.value ? requiredIndicator.value : null,
        ]
      );
  },
});

export interface LRequiredIndicatorProps extends HTMLLuniandProps<'span'> {}

/**
 * Used to show a "required" text or an asterisks (*) to indicate that
 * a field is required.
 */
export const LRequiredIndicator: ComponentWithProps<LRequiredIndicatorProps> =
  defineComponent({
    name: 'LRequiredIndicator',
    setup(_, { attrs }) {
      const field = useFormControlContext();
      const styles = useStyles();

      if (!field?.value?.isRequired?.value) return null;

      return () =>
        h(
          luniand.span,
          {
            ...field?.value?.requiredIndicatorProps.value,
            // __css : styles.value?.requiredIndicator,
            __label: 'form__required-indicator',
            ...attrs,
          },
          h('*')
        );
    },
  });
