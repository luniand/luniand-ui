import type { StoryFn } from "@storybook/vue3";
import { LSkeletonCircle, LSkeletonText, LSkeleton } from "../src";
import { LButton } from "../../button";
import { LBox, LStack } from "../../layout";
import { ref } from "vue";

export default {
  title: "Components / Skeleton",
  component: { LSkeletonCircle, LSkeletonText, LSkeleton, LBox },
};

const BasicTemplate: StoryFn = (args: any) => ({
  components: { LSkeletonCircle, LSkeletonText, LSkeleton, LStack, LBox },
  setup() {
    return { args };
  },
  template: `
    <h2> Basic </h2>
    <LStack>
      <LSkeleton height='20px' />
      <LSkeleton height='20px' />
      <LSkeleton height='20px' />
    </LStack>
    <LSkeleton>
      <div>contents wrapped</div>
      <div>won't be visible</div>
    </LSkeleton>
    `,
});

export const Basic = BasicTemplate.bind({});

const SkeletonColorTemplate: StoryFn = (args: any) => ({
  components: { LSkeletonCircle, LSkeletonText, LSkeleton, LStack, LBox },
  setup() {
    return { args };
  },
  template: `
    <h2> Skeleton color# </h2>
    <LSkeleton startColor='pink.500' endColor='orange.500' height='50px' />
    `,
});

export const SkeletonColor = SkeletonColorTemplate.bind({});

const CircleTemplate: StoryFn = (args: any) => ({
  components: { LSkeletonCircle, LSkeletonText, LSkeleton, LStack, LBox },
  setup() {
    return { args };
  },
  template: `
    <h2> Circle and Text Skeleton#
    </h2>
    <LBox padding='6' boxShadow='lg' bg='white'>
      <LSkeletonCircle size='10' />
      <LSkeletonText :mt='4' :noOfLines="4" spacing='4' skeletonHeight='2' />
    </LBox>
    `,
});

export const CircleAnText = CircleTemplate.bind({});

const ToggleTemplate: StoryFn = (args: any) => ({
  components: {
    LSkeletonCircle,
    LSkeletonText,
    LSkeleton,
    LBox,
    LButton,
    LStack,
  },
  setup() {
    const isLoaded: any = ref(false);

    function setIsLoaded() {
      isLoaded.value = !isLoaded.value;
      console.log("isLoaded", isLoaded.value);
    }

    return { args, setIsLoaded, isLoaded };
  },
  template: `
    <h2>  Toggle  </h2>
    <LStack padding="4" spacing="1">
    <LSkeleton height='40px' :isLoaded="isLoaded">
      <LBox>Hello World!</LBox>
    </LSkeleton>
    <LSkeleton
      height='40px'
      :isLoaded="isLoaded"
      bg='green.500'
      color='white'
      :fadeDuration="1"
    >
      <LBox>Hello Vue!</LBox>
    </LSkeleton>
    <LSkeleton
      height='40px'
      :isLoaded="isLoaded"
      :fadeDuration="1"
      bg='blue.500'
      color='white'
    >
      <LBox>Hello Luniand!</LBox>
    </LSkeleton>

    <LBox textAlign='center'>
      <LButton @click="setIsLoaded">toggle</LButton>
    </LBox>
  </LStack>
    `,
});

export const contentIsLoaded = ToggleTemplate.bind({});
