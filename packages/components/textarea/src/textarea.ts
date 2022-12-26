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

import { h, defineComponent, PropType , computed } from "vue";
import {
  FormControlOptions,
  useFormControl,
  useFormControlProvider,
} from "@luniand-ui/form-control";
import {
  luniand,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useStyleConfig,
  HTMLLuniandProps,
  useMultiStyleConfig
} from "@luniand-ui/system";
import { omit } from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { formControlProps } from "@luniand-ui/form-control";
import { filterUndefined } from "@luniand-ui/utils";

interface TextareaOptions {
  /**
   * The border color when the textarea is focused. Use color keys in `theme.colors`
   * @example
   * focusBorderColor = "blue.500"
   */
  focusBorderColor?: string;
  /**
   * The border color when the textarea is invalid. Use color keys in `theme.colors`
   * @example
   * errorBorderColor = "red.500"
   */
  errorBorderColor?: string;
}

type Omitted = "disabled" | "required" | "readOnly";
export interface LTextareaProps
  extends Omit<HTMLLuniandProps<"textarea">, Omitted>,
    TextareaOptions,
    FormControlOptions,
    ThemingProps<"Textarea"> {}

export const LTextarea = defineComponent({
  name: "LTextarea",
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: null,
    },
    rows: {
      type: String as PropType<string>,
      default: null,
    },
    errorBorderColor: String as PropType<LTextareaProps["errorBorderColor"]>,
    focusBorderColor: String as PropType<LTextareaProps["focusBorderColor"]>,
    ...formControlProps,
    ...vueThemingProps,
  },
  emits: ["update:modelValue", "input", "change"],
  setup(props, { emit, attrs }) {

    const styles = useMultiStyleConfig("Textarea", props);
    const { rows, ...rest } = omitThemingProps(props);
    
    const textareaProps = useFormControl(rest);

    const omitted = [
      "h",
      "minH",
      "height",
      "minHeight",
    ] as (keyof SystemStyleObject)[];

    const textareaStyles = rows ? omit(styles.value, omitted) : styles.value;

    const handleInput = (e: Event) => {
      emit("update:modelValue", (e?.currentTarget as HTMLInputElement)?.value);
      emit("change", e, (e?.currentTarget as HTMLInputElement)?.value);
    };

    return () => {
      return h(luniand.textarea, {
        __css: textareaStyles,
        class: ['luniand-textarea'],
        rows,
        ...attrs,
        ...textareaProps.value,
        value: props.modelValue,
        onInput: handleInput,
        __luniandIsRaw: true,
      });
    };
  },
});
