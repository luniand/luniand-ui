import type { StoryFn } from "@storybook/vue3";
import { LLink, LText } from "../src";
import { LIcon } from "@luniand-ui/icons";
export default {
  title: "Components / Layout / Link",
  component: { LLink, LText },
};

const Template: StoryFn = (args: any) => ({
  components: { LLink, LText },
  setup() {
    return { args };
  },
  template: `
    <LLink>Luniand UI</LLink>
  `,
});

export const Basic = Template.bind({});

const ExternalTemplate: StoryFn = (args: any) => ({
  components: { LLink, LText, LIcon },
  setup() {
    return { args };
  },
  template: `
    <LLink href="https://luiandui.com" is-external>
     Luniand Design system <LIcon name="external-link" mx="2px" />
    </LLink>
    <LText>
    Did you know that 
    <LLink color="teal.500" href="#">
      links can live inline with text
    </LLink>
  </LText>
  `,
});

export const ExternalLink = ExternalTemplate.bind({});

const RouterAndNuxtTemplate: StoryFn = (args: any) => ({
  components: { LLink, LText },
  setup() {
    return { args };
  },
  template: `
    <LLink as="router-link" to="/">
    Luniand Design system from router-link
    </LLink>
  `,
});

export const RouterAndNuxt = RouterAndNuxtTemplate.bind({});
