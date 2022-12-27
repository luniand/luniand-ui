import type { Meta, StoryFn } from "@storybook/vue3";
import { LBadge, LFlex, LBox, LText } from "../src";
import { LAvatar } from "@luniand-ui/avatar";

export default {
  title: "Components / Layout / Badge",
  component: { LBadge },
};

const Template: StoryFn = (args: any) => ({
  components: { LBadge },
  setup() {
    return { args };
  },
  template: `
    <LBadge>Default</LBadge>
  `,
});

export const Basic = Template.bind({});

const BadgeColorTemplate: StoryFn = (args: any) => ({
  components: { LBadge },
  setup() {
    return { args };
  },
  template: `
  <LBadge mx="2">Default</LBadge>
  <LBadge mx="2" variant-color="green">Success</LBadge>
  <LBadge mx="2" variant-color="red">Removed</LBadge>
  <LBadge mx="2" variant-color="indigo">New</LBadge>
  `,
});

export const BadgeColor = BadgeColorTemplate.bind({});

const BadgeVariantsTemplate: StoryFn = (args: any) => ({
  components: { LBadge },
  setup() {
    return { args };
  },
  template: `
  <LBadge mx="2" variant="subtle" variant-color="green">Subtle</LBadge>
  <LBadge mx="2" variant="solid" variant-color="green">Solid</LBadge>
  <LBadge mx="2" variant="outline" variant-color="green">Outline</LBadge>
  `,
});

export const BadgeVariants = BadgeVariantsTemplate.bind({});

const CompositionTemplate: StoryFn = (args: any) => ({
  components: { LBadge, LFlex, LBox, LText, LAvatar },
  setup() {
    return { args };
  },
  template: `
  <LFlex>
  <LAvatar src="https://res.cloudinary.com/xtellar/image/upload/v1586070924/chakra-ui/docs/avatars/jonathan-bakebwa.jpg" />
  <LBox ml="3">
    <LText font-weight="bold">
      Ma Van Du
      <LBadge ml="1" variant-color="green">
        New
      </LBadge>
    </LText>
    <LText font-size="sm">UI Engineer</LText>
  </LBox>
</LFlex>

  <h1> You can also change the size of the badge by passing fontSize prop. </h1>

  <LText font-weight="bold">
  Ma Van Du
  <LBadge ml="1" font-size="1em" variant-color="green">
    New
  </LBadge>
</LText>


  `,
});

export const Composition = CompositionTemplate.bind({});
