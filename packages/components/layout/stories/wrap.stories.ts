import type { StoryFn } from "@storybook/vue3";
import { LWrap, LWrapItem, LCenter } from "../src";

export default {
  title: "Components / Layout / Wrap",
  component: { LWrap, LWrapItem, LCenter },
};

const Template: StoryFn = (args: any) => ({
  components: { LWrap, LWrapItem, LCenter },
  setup() {
    return { args };
  },
  template: `
    <LWrap spacing="13px">
    <LWrapItem>
      <LCenter w='180px' h='80px' bg='red.200'>
        Box 1
      </LCenter>
    </LWrapItem>
    <LWrapItem>
      <LCenter w='180px' h='80px' bg='green.200'>
        Box 2
      </LCenter>
    </LWrapItem>
    <LWrapItem>
      <LCenter w='180px' h='80px' bg='purple.300'>
        Box 3
      </LCenter>
    </LWrapItem>
    <LWrapItem>
      <LCenter w='180px' h='80px' bg='blue.200'>
        Box 4
      </LCenter>
    </LWrapItem>
  </LWrap>
  `,
});

export const SimpleGrid = Template.bind({});

const spacingTemplate: StoryFn = (args: any) => ({
  components: { LWrap, LWrapItem, LCenter },
  setup() {
    return { args };
  },
  template: `
  <LWrap spacing='30px'>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='red.200'>
      Box 1
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='green.200'>
      Box 2
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='purple.300'>
      Box 3
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='blue.200'>
      Box 4
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='blackAlpha.500'>
      Box 5
    </LCenter>
  </LWrapItem>
</LWrap>
  `,
});

export const spacing = spacingTemplate.bind({});

const alignmentTemplate: StoryFn = (args: any) => ({
  components: { LWrap, LWrapItem, LCenter },
  setup() {
    return { args };
  },
  template: `
  <LWrap spacing='30px' align='center'>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='red.200'>
      Box 1
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='40px' bg='green.200'>
      Box 2
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='120px' h='80px' bg='purple.300'>
      Box 3
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='40px' bg='blue.200'>
      Box 4
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='blackAlpha.500'>
      Box 5
    </LCenter>
  </LWrapItem>
</LWrap>
  <span> Pass the justify prop to change the alignment of the child along the main axis. </span>
  <LWrap spacing='30px' justify='center'>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='red.200'>
      Box 1
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='green.200'>
      Box 2
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='120px' h='80px' bg='purple.300'>
      Box 3
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='blue.200'>
      Box 4
    </LCenter>
  </LWrapItem>
  <LWrapItem>
    <LCenter w='180px' h='80px' bg='blackAlpha.500'>
      Box 5
    </LCenter>
  </LWrapItem>
</LWrap>
  `,
});

export const alignment = alignmentTemplate.bind({});
