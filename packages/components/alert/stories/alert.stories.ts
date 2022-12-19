import type { Meta, StoryFn } from "@storybook/vue3";
import { LAlert, LAlertIcon, LAlertTitle, LAlertDescription } from "../src";
import { luniand } from "@luniand-ui/vue";

export default {
  title: "Components / Alert",
  component: { LAlert, LAlertIcon, LAlertTitle, LAlertDescription },
} as Meta;

const BasicTemplate: StoryFn = (args: any) => ({
  components: { LAlert, LAlertIcon, LAlertTitle, LAlertDescription },
  setup() {
    return { args };
  },
  template: `
  <LAlert status="error">
    <LAlertIcon />
    <LAlertTitle>Your browser is outdated!</LAlertTitle>
    <LAlertDescription>Your luniand experience may be degraded.</LAlertDescription>
  </LAlert>
  `,
});

export const Basic = BasicTemplate.bind({});

const SubtleTemplate: StoryFn = (args: any) => ({
  components: { LAlert, LAlertIcon, LAlertTitle, LAlertDescription, luniand },
  setup() {
    return { args };
  },
  template: `
  <LAlert status="success">
    <LAlertIcon />
    <luniand.div>
      <LAlertTitle>Your browser is outdated!</LAlertTitle>
      <LAlertDescription>Your luniand experience may be degraded.</LAlertDescription>
    </luniand.div>
  </LAlert>
  `,
});

export const Subtle = SubtleTemplate.bind({});

const TopAccentTemplate: StoryFn = (args: any) => ({
  components: { LAlert, LAlertIcon, LAlertTitle, LAlertDescription, luniand },
  setup() {
    return { args };
  },
  template: `
  <LAlert
    variant="top-accent"
    mx="auto"
    alignItems="flex-start"
    pt="3"
    rounded="md">
    <LAlertIcon />
    <luniand.div flex="1">
      <AlertTitle display="block" mr="2">
        Holy Smokes
      </AlertTitle>
      <AlertDescription>Something just happened!</AlertDescription>
    </luniand.div>
  </LAlert>
  `,
});

export const TopAccent = TopAccentTemplate.bind({});

const LoadingTemplate: StoryFn = (args: any) => ({
  components: { LAlert, LAlertIcon, luniand },
  setup() {
    return { args };
  },
  template: `
  <luniand.div>
    <LAlert status="loading">
      <LAlertIcon />
      We are loading something
    </LAlert>
  </luniand.div>
  `,
});

export const Loading = LoadingTemplate.bind({});
