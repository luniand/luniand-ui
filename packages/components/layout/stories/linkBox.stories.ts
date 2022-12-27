import type { StoryFn } from "@storybook/vue3";
import { LLinkBox, LLinkOverlay, LHeading, LBox, LText } from "../src";

export default {
  title: "Components / Layout / LinkBox",
  component: { LLinkBox },
};

const Template: StoryFn = (args: any) => ({
  components: { LLinkBox, LLinkOverlay, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
    <LLinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
    <LBox as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
      13 days ago
    </LBox>
    <LHeading size='md' my='2'>
      <LLinkOverlay href='#'>
        New Year, New Beginnings: Smashing Workshops & Audits
      </LLinkOverlay>
    </LHeading>
    <LText>
      Catch up on what’s been cookin’ at Smashing and explore some of the most
      popular community resources.
    </LText>
  </LLinkBox>
  `,
});

export const Basic = Template.bind({});

const NestedLinksTemplate: StoryFn = (args: any) => ({
  components: { LLinkBox, LLinkOverlay, LBox, LText, LHeading },
  setup() {
    return { args };
  },
  template: `
  <LLinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
  <LBox as='time' dateTime='2021-01-15 15:30:00 +0000 UTC'>
    13 days ago
  </LBox>
  <LHeading size='md' my='2'>
    <LLinkOverlay href='#'>
      New Year, New Beginnings: Smashing Workshops & Audits
    </LLinkOverlay>
  </LHeading>
  <LText mb='3'>
    Catch up on what’s been cookin’ at Smashing and explore some of the most
    popular community resources.
  </LText>
  <LBox as='a' color='teal.400' href='#' fontWeight='bold'>
    Some inner link
  </LBox>
</LLinkBox>
  `,
});

export const NestedLinks = NestedLinksTemplate.bind({});
