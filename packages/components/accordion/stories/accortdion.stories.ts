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
  <LAccordion>
    <LAccordionItem>
      <LAccordionButton>
        <LBox flex="1" text-align="left">
          Section 1 title
        </LBox>
        <LAccordionIcon />
      </LAccordionButton>
      <LAccordionPanel >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </LAccordionPanel>
    </LAccordionItem>
    <LAccordionItem>
      <LAccordionButton>
        <LBox flex="1" text-align="left">
          Section 2 title
        </LBox>
        <LAccordionIcon />
      </LAccordionButton>
      <LAccordionPanel >
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

const ExpandTemplate: StoryFn = (args: any) => ({
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
  <LAccordion :allow-multiple="true" :default-index="[0]">
  <LAccordionItem>
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 1 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
  <LAccordionItem>
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 2 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
</LAccordion>
  `,
});

export const ExpandMultipleItems = ExpandTemplate.bind({});

const ToggleTemplate: StoryFn = (args: any) => ({
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
  <LAccordion :allow-toggle="true">
  <LAccordionItem>
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 1 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
  <LAccordionItem>
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 2 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
</LAccordion>
  `,
});

export const ToggleEachItems = ToggleTemplate.bind({});

const StylingTemplate: StoryFn = (args: any) => ({
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
  <LAccordion allowToggle>
    <LAccordionItem>
    <LAccordionButton :_expanded="{ bg: 'tomato', color: 'white' }">
      <LBox flex="1" text-align="left">
        Section 1 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
   </LAccordion>
  `,
});

export const StylingExpanded = StylingTemplate.bind({});

const AccessingTemplate: StoryFn = (args: any) => ({
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
  <LAccordion :allow-toggle="true">
  <LAccordionItem>
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 1 title
      </LBox>
      <LAccordionIcon />
    </LAccordionButton>
    <LAccordionPanel >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
  <LAccordionItem v-slot="isExpanded">
    <LAccordionButton>
      <LBox flex="1" text-align="left">
        Section 2 title
      </LBox>
      <LAccordionIcon size="12px" :name="isExpanded ? 'minus' : 'add'" />
    </LAccordionButton>
    <LAccordionPanel >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </LAccordionPanel>
  </LAccordionItem>
</LAccordion>
  `,
});

export const Accessing = AccessingTemplate.bind({});
