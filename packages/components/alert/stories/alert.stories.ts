import type { Meta, StoryFn } from "@storybook/vue3";
import { LAlert , LAlertIcon , LAlertTitle ,  LAlertDescription } from "../src";

export default {
  title: "Components / Alert",
  component: { LAlert, LAlertIcon , LAlertTitle ,  LAlertDescription },
} as Meta;

const Template: StoryFn = (args: any) => ({
  components: { LAlert, LAlertIcon , LAlertTitle ,  LAlertDescription },
  setup() {
    return { args };
  },
  template: `
  <LAlert status='error'>
    <LAlertIcon />
    <LAlertTitle>Your browser is outdated!</LAlertTitle>
    <LAlertDescription>Your luniand experience may be degraded.</LAlertDescription>
  </LAlert>
  <LAlert status='error'>
    <LAlertIcon />
    There was an error processing your request
  </LAlert>

  <LAlert status='success'>
    Data uploaded to the server. Fire on!
  </LAlert>

  <LAlert status='warning'>
    <LAlertIcon />
    Seems your account is about expire, upgrade now
  </LAlert>

  <LAlert status='info'>
    <LAlertIcon />
    luniand is going live on August 30th. Get ready!
  </LAlert>
  `,
});

export const Basic = Template.bind({});
