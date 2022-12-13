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

import { h, defineComponent, computed, PropType, toRefs } from 'vue';
import {
  luniand,
  ComponentWithProps,
  DeepPartial,
  DOMElements,
  useMultiStyleConfig,
  StylesProvider,
  omitThemingProps,
  HTMLLuniandProps,
  useStyles,
} from '@luniand-ui/system';

import {
  LFormControlProps,
  LFormControlProviderContext,
  useFormControlProvider,
  FormControlProvider,
  useFormControlContext,
} from './use-form-control';

/**
 * `CFormControl` provides context such as
 * `isInvalid`, `isDisabled`, and `isRequired` to form elements.
 *
 * This is commonly used in form elements such as `input`,
 * `select`, `textarea`, etc.
 */

export const formControlProps = {
  isRequired: Boolean as PropType<LFormControlProps['isRequired']>,
  isDisabled: Boolean as PropType<LFormControlProps['isDisabled']>,
  isInvalid: Boolean as PropType<LFormControlProps['isInvalid']>,
  isReadOnly: Boolean as PropType<LFormControlProps['isReadOnly']>,
  label: String as PropType<LFormControlProps['label']>,
  id: String as PropType<LFormControlProps['id']>,
};

export const LFormControl: ComponentWithProps<DeepPartial<LFormControlProps>> =
  defineComponent({
    props: {
      as: {
        type: [Object, String] as PropType<DOMElements>,
        default: 'div',
      },
      ...formControlProps,
    },
    setup(_props, { slots, attrs }) {
      const { as, ...props } = toRefs(_props);
      const ownProps = computed(() => props);
      const styles = useMultiStyleConfig('Form', props);
      const { rootProps, ..._context } = useFormControlProvider(ownProps.value);

      const context: LFormControlProviderContext = computed(() => _context);

      FormControlProvider(context);
      StylesProvider(styles);

      return () =>
        h(
          luniand.div,
          {
            as: as.value,
            ...rootProps.value,
            __css: styles.value.container,
            __label: 'form',
            ...attrs,
          },
          slots
        );
    },
  });

export interface LHelpTextProps extends HTMLLuniandProps<'div'> {}
/**
 * LFormHelperText
 *
 * Assistive component that conveys additional guidance
 * about the field, such as how it will be used and what
 * types in values should be provided.
 */
export const LFormHelperText: ComponentWithProps<DeepPartial<LHelpTextProps>> =
  defineComponent((props, { attrs, slots }) => {
    const field = useFormControlContext();
    const styles = useStyles();
    const handleVNodeMounted = () => {
      field.value.hasHelpText.value = true;
    };

    return () =>
      h(
        luniand.div,
        {
          __label: 'form__helper-text',
          onVnodeBeforeMount: handleVNodeMounted,
          ...field.value.helperTextProps.value,
          __css: styles.value.helperText,
        },
        slots
      );
  });
