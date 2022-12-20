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
  Transition,
  defineComponent,
  PropType,
  ref,
  watch,
  cloneVNode,
} from "vue";
import type { DOMElements } from "@luniand-ui/system";
import { useRef } from "@luniand-ui/utils";
import { MotionVariants, useMotion } from "@vueuse/motion";
import { __DEV__ } from "@luniand-ui/utils";

type LMotionVariants = {
  [key: string]: MotionVariants;
};

export const variants: LMotionVariants = {
  fade: {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  },
  scale: {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
      translateY: 0,
    },
    leave: {
      scale: 0.8,
      opacity: 0,
    },
  },
};

type CMotionVariant = keyof LMotionVariants;

export const LMotion = defineComponent({
  name: "LMotion",
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: "div",
    },
    type: {
      type: String as PropType<keyof LMotionVariants>,
      default: "fade",
    },
  },
  setup(props, { slots, attrs }) {
    const [targetRef, targetNode] = useRef();
    const motionInstance = ref();
    watch(
      targetNode,
      (node) => {
        if (!node) return;
        motionInstance.value = useMotion(targetNode, variants[props.type]);
      },
      {
        immediate: true,
        flush: "post",
      }
    );

    const onLeave = (el: Element, done: VoidFunction) => {
      motionInstance.value.leave(done);
    };
    return () => {
      let children: any = undefined;

      const vNodes = slots
        ?.default?.()
        .filter((vnode) => String(vnode.type) !== "Symbol(Comment)");

      children = vNodes?.length
        ? cloneVNode(vNodes[0], { ref: targetRef as any })
        : vNodes;

      return h(
        Transition,
        { css: false, mode: "out-in", onLeave: onLeave },
        () => [children]
      );
    };
  },
});
