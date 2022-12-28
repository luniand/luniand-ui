import { h, ref, defineComponent, toRefs } from "vue";
import { luniand } from "@luniand-ui/system";
import { vueThemingProps } from "@luniand-ui/prop-utils";

import { LSkeleton } from "./skeleton";

export const LSkeletonCircle = defineComponent({
  props: {
    ...vueThemingProps,
  },
  setup(props) {
    console.log("props: ", props);

    const { size = ref("2rem") } = toRefs(props);
    return () => {
      return h(luniand(LSkeleton, { label: "skeleton__circle" }), {
        borderRadius: "full",
        boxSize: size.value,
      });
    };
  },
});
