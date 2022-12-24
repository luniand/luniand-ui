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
  Teleport,
  TeleportProps,
  onBeforeMount,
  ref,
  onUnmounted,
  warn,
} from "vue";
import {
  createPortalTarget,
  ensureTarget,
  unmountTarget,
} from "./portal.utils";
import { useStackProvider } from "@luniand-ui/composables";

export interface LPortalProps extends Omit<TeleportProps, "to"> {
  /**
   * The target element to which to mount the portal
   */
  to?: string;
  /**
   * Determines whether the `CPortal` component is enabled or disabled
   */
  disabled?: boolean;
  /**
   * Name of the portal we use to label component with
   */
  label?: string;
}

/**
 * luniand component to teleport it's children to pre-ordained target.
 *
 * If no target is given to the `CPortal` component via the `to` prop,
 * it will generate a target and append to the document body
 */
const LPortal = defineComponent({
  name: "LPortal",
  props: {
    to: String as PropType<LPortalProps["to"]>,
    disabled: Boolean as PropType<LPortalProps["disabled"]>,
    label: String as PropType<LPortalProps["label"]>,
  },
  setup(props, { slots, attrs }) {
    const target = ref<string | null>(null);

    onBeforeMount(() => {
      if (props.to) {
        ensureTarget(props.to);
        target.value = props.to;
      } else {
        target.value = `#${createPortalTarget(props.label).id}`;
      }
    });

    onUnmounted(() => {
      if (!props.to) {
        unmountTarget(target.value!);
      }
    });

    useStackProvider();

    return () => {
      return h(
        // @ts-ignore
        Teleport,
        {
          ...props,
          ...attrs,
          to: target.value,
        },
        slots
      );
    };
  },
});

export default LPortal;
