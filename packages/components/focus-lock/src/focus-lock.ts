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
  defineComponent,
  PropType,
  computed,
  cloneVNode,
  VNode,
  ref,
  unref,
  h,
  watchEffect,
} from "vue";
import { FocusableElement, warn, __DEV__ } from "@luniand-ui/utils";
import { useFocusTrap, useReturnFocusSelector } from "./use-focus-trap";
import {
  MaybeElementRef,
  unrefElement,
  VueComponentInstance,
} from "@luniand-ui/utils";

type RefProp =
  | (() => HTMLElement | string | object | undefined | unknown)
  | string;

export interface FocusLockProps {
  /**
   * Element to which to send focus when focus trap has been deacivated
   */
  finalFocusRef?: RefProp;
  /**
   * Element to which to send focus when focus trap has been activated
   */
  initialFocusRef?: RefProp;
  /**
   * If `true`, the first focuable element within the `contentRef`
   * will be auto-focused once `LFocusLock` mounts
   */
  autoFocus?: boolean;
}

export const LFocusLock = defineComponent({
  name: "LFocusLock",
  emits: ["activate", "deactivate"],
  props: {
    finalFocusRef: [String, Object, Function] as PropType<
      FocusLockProps["finalFocusRef"]
    >,
    initialFocusRef: [String, Object, Function] as PropType<
      FocusLockProps["initialFocusRef"]
    >,
    autoFocus: {
      type: Boolean as PropType<FocusLockProps["autoFocus"]>,
      default: true,
    },
    escapeDeactivates: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    clickOutsideDeactivates: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    allowOutsideClick: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    restoreFocus: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const target = ref<HTMLElement | VueComponentInstance>();
    const initialFocusElement = computed<HTMLElement>(() => {
      let initialFocus;
      if (props.initialFocusRef) {
        let resolvedInitialFocusRef: MaybeElementRef =
          typeof props.initialFocusRef === "function"
            ? props.initialFocusRef()
            : props.initialFocusRef;

        resolvedInitialFocusRef = unref(resolvedInitialFocusRef);
        if (typeof resolvedInitialFocusRef === "string") {
          initialFocus = document.querySelector<FocusableElement & Element>(
            resolvedInitialFocusRef
          );
        } else {
          initialFocus =
            resolvedInitialFocusRef?.$el || resolvedInitialFocusRef;
        }
      }
      return initialFocus;
    });

    const enabled = ref(true);
    function activate() {
      enabled.value = true;
    }
    function deactivate() {
      enabled.value = false;
    }
    const hasFocus = computed(() => enabled.value === true);

    const containers = ref<Set<HTMLElement>>(new Set());
    watchEffect(
      (onInvalidate) => {
        let el: HTMLElement;
        if (target.value) {
          el = unrefElement(target);
          containers.value.add(el);
        }

        onInvalidate(() => {
          containers.value.delete(el);
        });
      },
      { flush: "post" }
    );

    useReturnFocusSelector(enabled);

    useFocusTrap(
      containers,
      enabled,
      computed(() => ({
        initialFocus: initialFocusElement.value,
      }))
    );

    return () => {
      const [firstChild] = slots.default?.({}) as VNode[];

      if (!firstChild) {
        warn({
          condition: __DEV__,
          message: `[luniand-ui:focus-lock]: Focus lock component expects at least and only one child element.`,
        });
        return;
      }

      return h(
        cloneVNode(firstChild, {
          ref: target,
          ...attrs,
          "data-luniand-focus-lock": "",
        }),
        {},
        () =>
          slots?.default?.({
            enabled,
            hasFocus,
            activate,
            deactivate,
          })
      );
    };
  },
});
