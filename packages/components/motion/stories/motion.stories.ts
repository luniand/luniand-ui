import type { StoryFn } from "@storybook/vue3";
import { LMotion, LCollapse } from "../src";
import { LStack, LHStack, LText } from "@luniand-ui/layout/";
import { LButton } from "@luniand-ui/button";
import { ref, computed } from "vue";
import { LAnimatePresence } from "../src";
import type { LMotionVariant } from "../src/motion-utils";
import { TransitionVariants } from "../src/motion-utils";

export default {
  title: "Components / Motion",
  component: { LMotion, LCollapse },
};

const Template: StoryFn = (args: any) => ({
  components: { LMotion, LCollapse, LText, LButton },
  setup() {
    const open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };
    return { args, open, toggle };
  },
  template: `
    <LButton @click="toggle">With Collapse</LButton>
    <LCollapse :is-open="open">
      <div
      :style="{
          'background' : 'red',
          'padding': '30px',
          'color': 'white',
          'fontWeight': 'bold',
        }"
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.
        </p>
      </div>
    </LCollapse>
    <LText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </LText>
  `,
});

export const Basic = Template.bind({});

const ScaleTemplate: StoryFn = (args: any) => ({
  components: { LMotion, LCollapse, LText, LButton },
  setup() {
    const open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };
    return { args, open, toggle };
  },
  template: `
  <div>
    <LButton @click="toggle" mb="10"> Toggle Scale </LButton>

    <LMotion type="scale">
      <div
        :style="{
          'background' : '#B2DFDB',
          'padding': '30px',
          'color': 'white',
          'fontWeight': 'bold',
        }"
        v-if="open"
      >
        Scale component
      </div>
    </LMotion>
  </div>
`,
});

export const ScaleMotion = ScaleTemplate.bind({});

const fadeTemplate: StoryFn = (args: any) => ({
  components: { LMotion, LCollapse, LText, LButton },
  setup() {
    const open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };
    return { args, open, toggle };
  },
  template: `
  <div>
    <LButton @click="toggle" mb="10"> Toggle Fade </LButton>

    <LMotion type="fade">
      <div
        :style="{
          'background' : '#B2DFDB',
          'padding': '30px',
          'color': 'white',
          'fontWeight': 'bold',
        }"
        v-if="open"
      >
        Fade component
      </div>
    </LMotion>
  </div>
`,
});

export const FadeMotion = fadeTemplate.bind({});

const animateTemplate: StoryFn = (args: any) => ({
  components: {
    LMotion,
    LCollapse,
    LText,
    LButton,
    LHStack,
    LStack,
    LAnimatePresence,
  },
  setup() {
    const open = ref(false);
    const activeVariant = ref("slideLeft");

    const toggle = () => {
      open.value = !open.value;
    };

    const variants = computed(
      () => Object.keys(TransitionVariants) as LMotionVariant[]
    );

    const handleOnBeforeEnter = (...args: any[]) => {
      console.log("handleOnBeforeEnter", ...args);
    };
    const handleOnAfterEnter = (...args: any[]) => {
      console.log("handleOnAfterEnter", ...args);
    };

    const setVariant = (variant: any) => {
      activeVariant.value = variant;
    };

    return {
      args,
      open,
      toggle,
      activeVariant,
      variants,
      handleOnBeforeEnter,
      handleOnAfterEnter,
      setVariant,
    };
  },
  template: `
    <LStack>
      <LButton align-self="start" @click="toggle">
        Toggle Presence
      </LButton>

      <LHStack>
        <!-- @ts-ignore -->
        <LButton
          v-for="(variant, i) in variants"
          :key="i"
          @click="setVariant(variant)"
          size="xs"
        >
          {{ variant }}
        </LButton>
      </LHStack>

      <LText> Active variant: {{ activeVariant }} </LText>
    </LStack>
    <!-- <c-portal> -->
    <LAnimatePresence
      :type="activeVariant"
      @before-enter="handleOnBeforeEnter"
      @after-enter="handleOnAfterEnter"
    >
      <div
        :style="{
          'background' : '#B2DFDB',
          'padding': '30px',
          'color': 'white',
          'fontWeight': 'bold',
        }"
        v-if="open"
      >
        {{ activeVariant }} component
      </div>
    </LAnimatePresence>
`,
});

export const animatePresence = animateTemplate.bind({});
