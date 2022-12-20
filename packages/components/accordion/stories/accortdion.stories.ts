import type { StoryFn } from "@storybook/vue3";
import {
  LAccordion,
  LAccordionItem,
  LAccordionPanel,
  LAccordionIcon,
  LAccordionButton,
} from "../src";
import { LStack, LBox, LWrap, LWrapItem } from "@luniand-ui/layout";

export default {
  title: "Components / Accordion",
  component: {
    LAccordion,
    LAccordionItem,
    LAccordionPanel,
    LAccordionIcon,
    LAccordionButton,
    LBox,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LAccordion,
    LAccordionItem,
    LAccordionPanel,
    LAccordionIcon,
    LAccordionButton,
    LBox,
  },
  setup() {
    return { args };
  },
  template: `
  <LAccordion allowMultiple allowToggle>
  <LAccordionItem>
    <h2>
      <LAccordionButton :_expanded="{ bg: 'tomato', color: 'white' }">
        <LBox as="span" flex='1' textAlign='left'>
          Section 1 title
        </LBox>
        <LAccordionIcon />
      </LAccordionButton>
    </h2>
    <LAccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>

  <LAccordionItem>
    <h2>
      <LAccordionButton>
        <LBox as="span" flex='1' textAlign='left'>
          Section 2 title
        </LBox>
        <LAccordionIcon />
      </LAccordionButton>
    </h2>
    <LAccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
</LAccordion>
  `,
});

export const Basic = Template.bind({});
