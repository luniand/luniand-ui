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

import { h, defineComponent, PropType, computed, ComputedRef, ref } from "vue";
import * as accordion from "@zag-js/accordion";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  luniand,
  DOMElements,
  StylesProvider,
  ComponentWithProps,
  HTMLLuniandProps,
  ThemingProps,
  useMultiStyleConfig,
  useStyles,
  DeepPartial,
} from "@luniand-ui/system";
import { useIds, useId } from "@luniand-ui/composables";
import {
  createContext,
  genId,
  SNAO,
  getValidChildren,
} from "@luniand-ui/utils";
import { vueThemingProps } from "@luniand-ui/prop-utils";
import { filterUndefined, mergeWith } from "@luniand-ui/utils";
import { SystemStyleObject } from "@luniand-ui/styled-system";
import { LCollapse } from "../../motion";
import { LIcon } from "@luniand-ui/icons";

export type ExpandedValues = string | string[];

export interface LAccordionProps
  extends HTMLLuniandProps<"div">,
    ThemingProps<"Accordion"> {
  /**
   * If `true`, multiple accordion items can be expanded at once.
   */
  allowMultiple?: boolean;
  /**
   * If `true`, any expanded accordion item can be collapsed again.
   */
  allowToggle?: boolean;
  /**
   * The index(es) of the expanded accordion item
   */
  index?: ExpandedValues;
  defaultIndex?: ExpandedValues;
  /**
   * The initial index(es) of the expanded accordion item
   */
  defaultOpen?: ExpandedValues;

  /**
   * If `true`, height animation and transitions will be disabled.
   */
  reduceMotion: boolean;
}

export interface LAccordionContext {
  api: ComputedRef<ReturnType<typeof accordion.connect>>;
  reduceMotion: ComputedRef<boolean>;
}

const [AccordionProvider, useAccordion] = createContext<LAccordionContext>({
  name: "AccordionContext",
  strict: true,
});

export const LAccordion: ComponentWithProps<DeepPartial<LAccordionProps>> =
  defineComponent({
    name: "LAccordion",
    props: {
      as: {
        type: [String] as PropType<DOMElements>,
        default: "div",
      },
      allowMultiple: Boolean as PropType<LAccordionProps["allowMultiple"]>,
      allowToggle: Boolean as PropType<LAccordionProps["allowToggle"]>,
      index: SNAO as PropType<LAccordionProps["index"]>,
      defaultIndex: SNAO as PropType<LAccordionProps["defaultIndex"]>,
      reduceMotion: {
        type: Boolean as PropType<LAccordionProps["reduceMotion"]>,
        default: false,
      },
      ...vueThemingProps,
    },
    setup(_props, { slots, attrs }) {
      const uid = ref(genId());
      const context = computed(() => ({
        multiple: _props.allowMultiple,
        collapsible: _props.allowToggle,
      }));
      const [state, send] = useMachine(accordion.machine({ id: uid.value }), {
        context,
      });
      const apiRef = computed(() =>
        accordion.connect(state.value, send, normalizeProps)
      );

      const props = computed<LAccordionProps>(() =>
        mergeWith({}, _props, attrs)
      );
      const themingProps = computed<ThemingProps>(() =>
        filterUndefined({
          colorScheme: props.value.colorScheme,
          variant: props.value.variant,
          size: props.value.size,
          styleConfig: props.value.styleConfig,
        })
      );

      const styles = useMultiStyleConfig("Accordion", themingProps);

      const reduceMotion = computed(() => props.value.reduceMotion);

      AccordionProvider({
        api: apiRef,
        reduceMotion,
      });
      StylesProvider(styles);

      return () => {
        const api = apiRef.value;
        return h(
          luniand.div,
          {
            sx: {
              "> div": styles.value.root,
            },
          },
          () => h("div", { ...api.rootProps }, getValidChildren(slots))
        );
      };
    },
  });

export interface LAccordionItemProps extends HTMLLuniandProps<"div"> {
  disabled?: boolean;
}

export interface LAccordionItemContext {
  id: ComputedRef<string>;
  isOpen: ComputedRef<boolean>;
  isDisabled: ComputedRef<boolean | undefined>;
}

const [AccordionItemProvider, useAccordionItem] =
  createContext<LAccordionItemContext>({
    name: "AccordionItemContext",
    strict: true,
  });
export const LAccordionItem: ComponentWithProps<LAccordionItemProps> =
  defineComponent({
    name: "LAccordionItem",
    props: {
      disabled: Boolean as PropType<boolean>,
      value: String as PropType<string>,
    },
    setup(props, { slots, attrs }) {
      const _uid = useId(undefined, "accordion-item");
      const id = computed(() => (attrs.id as string) || _uid.value);
      const { api } = useAccordion();
      const itemValue = computed(() => id.value);
      const state = computed(() =>
        api.value.getItemState({ value: itemValue.value })
      );

      const isOpen = computed(() => state.value.isOpen);
      const isDisabled = computed(() => props.disabled);

      AccordionItemProvider({
        id,
        isOpen,
        isDisabled,
      });

      const styles = useStyles();

      const containerStyles = computed<SystemStyleObject>(() => ({
        ...styles.value.container,
        overflowAnchor: "none",
      }));

      return () =>
        h(
          luniand.div,
          {
            __css: containerStyles.value,
            ...api.value.getItemProps({
              value: itemValue.value,
              disabled: props.disabled,
            }),
            ...attrs,
          },
          getValidChildren(slots)
        );
    },
  });

export interface LAccordionButtonProps extends HTMLLuniandProps<"button"> {
  disabled?: boolean;
}
export const LAccordionButton: ComponentWithProps<LAccordionButtonProps> =
  defineComponent({
    name: "LAccordionButton",
    props: {
      disabled: Boolean as PropType<boolean>,
    },
    setup(props, { slots, attrs }) {
      const { id } = useAccordionItem();

      const { api } = useAccordion();
      const styles = useStyles();
      const buttonStyles = computed<SystemStyleObject>(() => ({
        display: "flex",
        alignItems: "center",
        width: "100%",
        outline: 0,
        ...styles.value.button,
      }));

      return () =>
        h(
          luniand.button,
          {
            ...api.value.getTriggerProps({
              value: id.value,
              disabled: props.disabled,
            }),
            __css: buttonStyles.value,
            ...attrs,
          },
          () => getValidChildren(slots)
        );
    },
  });

export interface LAccordionPanelProps extends HTMLLuniandProps<"div"> {
  disabled?: boolean;
}
export const LAccordionPanel: ComponentWithProps<LAccordionPanelProps> =
  defineComponent({
    name: "LAccordionPanel",
    props: {
      disabled: Boolean as PropType<boolean>,
    },
    setup(props, { slots, attrs }) {
      const { id, isOpen } = useAccordionItem();
      const { api } = useAccordion();
      const styles = useStyles();

      return () => {
        const { hidden, ...contentProps } = api.value.getContentProps({
          value: id.value,
          disabled: props.disabled,
        });
        return h(
          LCollapse,
          { isOpen: isOpen.value },
          h(
            luniand.div,
            {
              ...contentProps,
              __css: styles.value.panel,
              ...attrs,
            },
            getValidChildren(slots)
          )
        );
      };
    },
  });

export interface LAccordionIconProps extends HTMLLuniandProps<"svg"> {}
export const LAccordionIcon: ComponentWithProps<LAccordionIconProps> =
  defineComponent({
    name: "LAccordionIcon",
    setup(props, { slots, attrs }) {
      const { isOpen, isDisabled } = useAccordionItem();
      const { reduceMotion } = useAccordion();
      const styles = useStyles();

      const iconStyles = computed<SystemStyleObject>(() => ({
        opacity: isDisabled.value ? 0.4 : 1,
        transform: isOpen.value ? "rotate(-180deg)" : undefined,
        transition: reduceMotion.value ? undefined : "transform 0.2s",
        transformOrigin: "center",
        ...styles.value.icon,
      }));

      return () =>
        h(
          luniand.svg,
          {
            viewBox: "0 0 24 24",
            ariaHidden: true,
            __css: iconStyles.value,
            size: "1em",
            w: "1em",
            h: "1em",
            ...attrs,
          },
          h(
            "g",
            h("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            })
          )
        );
    },
  });
