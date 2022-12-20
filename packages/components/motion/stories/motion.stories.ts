import type { StoryFn } from "@storybook/vue3";
import { LMotion, LCollapse } from "../src";

export default {
  title: "Components / Motion",
  component: { LMotion, LCollapse },
};

const Template: StoryFn = (args: any) => ({
  components: { LMotion, LCollapse },
  setup() {
    return { args };
  },
  template: `<h2> LMotion </h2>
    <LMotion type="fade">
      <div
        bg="teal.100"
        px="4"
        py="4"
        font-weight="bold"
        rounded="md"
        shadow="lg"
      >
        Fade component
      </div>
    </LMotion>

    <LMotion type="scale">
      <div
        bg="teal.100"
        px="4"
        py="4"
        font-weight="bold"
        rounded="md"
        shadow="lg"
      >
        Scale
      </div>
    </LMotion>
    <h2> collaspe </h2>
    <LCollapse>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
  </LCollapse>
  `,
});

export const Basic = Template.bind({});
