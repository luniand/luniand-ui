import { h, ref, defineComponent, toRefs } from "vue";
import { luniand } from "@luniand-ui/system";
import { vueThemingProps } from "@luniand-ui/prop-utils";

import { SkeletonProps, LSkeleton } from "./skeleton";

export const LSkeletonCircle = defineComponent({
  props: {
    ...vueThemingProps,
  },
  setup(props) {
    const { size = ref("2rem"), ...rest } = toRefs(props);
    return () => {
      return h(luniand(LSkeleton, { label: "skeleton__circle" }), {
        borderRadius: "full",
        boxSize: size.value,
        ...rest,
      });
    };
  },
});
