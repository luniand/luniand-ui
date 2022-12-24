import type { Meta, StoryFn } from "@storybook/vue3";
import { LLink } from "../src";

export default {
  title: "Components / Layout / Link",
  component: { LLink },
} as Meta<typeof LLink>;

const BasicTemplate: StoryFn<typeof LLink> = (args: any) => ({
  components: { LLink },
  setup() {
    return { args };
  },
  template: `
    <LLink href="https://www.google.com" isExternal>
      Luniand Design system
    </LLink>
  `,
});

export const ExternalLink = BasicTemplate.bind({});

const RoutingLink: StoryFn<typeof LLink> = (args: any) => ({
  components: { LLink },
  setup() {
    return { args };
  },
  template: `
    <LLink as="router-link" to="/">
      Luniand Design system from router-link
    </LLink>
  `,
});

export const RoutingLibrary = RoutingLink.bind({});
