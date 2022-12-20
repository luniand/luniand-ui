import {
  h,
  Transition,
  defineComponent,
  PropType,
  ref,
  watch,
  cloneVNode,
  computed,
} from "vue";

import type { DOMElements } from "@luniand-ui/system";
import { useRef } from "@luniand-ui/utils";
import { MotionVariants, useMotion } from "@vueuse/motion";
import { warn, __DEV__ } from "@luniand-ui/utils";
import { LMotionVariant, TransitionVariants } from "./motion-utils";

/**
 * @todo Add usePrefersReducedMotion hook to disable animations in the browser
 */

export const LAnimatePresence = defineComponent({
  name: "LAnimatePresence",
  props: {
    as: {
      type: [Object, String] as PropType<DOMElements>,
      default: "div",
    },
    type: {
      type: String as PropType<LMotionVariant>,
      default: "fade",
    },
    variant: Object as PropType<MotionVariants>,
  },
  emits: ["leave", "beforeLeave"],
  setup(props, { slots, attrs, emit }) {
    const [targetRef, targetNode] = useRef();
    const motionInstance = ref();

    /**
     * If user provides the "variant" prop, we prefer it over the type prop.
     */

    warn({
      condition: !props.variant && !TransitionVariants[props.type],
      message:
        'The animate presence component expects either the "variant" or a value for "type" that is an existing preset' +
        "Please check to make sure that these values are correct.",
    });

    const variant = computed(
      () => props.variant || TransitionVariants[props.type]
    );

    watch(
      targetNode,
      (node) => {
        if (!node) return;
        motionInstance.value = useMotion(targetNode, variant.value);
      },
      {
        immediate: true,
        flush: "post",
      }
    );

    const onLeave = (el: Element, done?: VoidFunction) => {
      motionInstance.value.leave(done);
      emit("leave", el, done);
    };

    const onBeforeLeave = (el: Element, done?: VoidFunction) => {
      emit("beforeLeave", el, done);
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
        {
          css: false,
          mode: "out-in",
          onLeave: onLeave,
          onBeforeLeave: onBeforeLeave,
          ...attrs,
        },
        () => [children]
      );
    };
  },
});
