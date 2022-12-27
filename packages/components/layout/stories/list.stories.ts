import type { StoryFn } from "@storybook/vue3";
import { LLink, LText, LList, LListItem, LListIcon } from "../src";

export default {
  title: "Components / Layout / List",
  component: { LLink, LText, LList, LListItem, LListIcon },
};

const Template: StoryFn = (args: any) => ({
  components: { LList, LListItem, LListIcon },
  setup() {
    return { args };
  },
  template: `
  <div>
      <LList styleType="disc">
      <LListItem>Lorem ipsum dolor sit amet</LListItem>
      <LListItem>Consectetur adipiscing elit</LListItem>
      <LListItem>Integer molestie lorem at massa</LListItem>
      <LListItem>Facilisis in pretium nisl aliquet</LListItem>
      </LList>
    </div>
  `,
});

export const UnorderedList = Template.bind({});

const OrdereListTemplate: StoryFn = (args: any) => ({
  components: { LList, LListItem, LListIcon },
  setup() {
    return { args };
  },
  template: `
    <LList as="ol" style-type="decimal">
    <LListItem>Lorem ipsum dolor sit amet</LListItem>
    <LListItem>Consectetur adipiscing elit</LListItem>
    <LListItem>Integer molestie lorem at massa</LListItem>
    <LListItem>Facilisis in pretium nisl aliquet</LListItem>
  </LList>
  `,
});

export const OrdereList = OrdereListTemplate.bind({});

const UnstyledListTemplate: StoryFn = (args: any) => ({
  components: { LList, LListItem, LListIcon },
  setup() {
    return { args };
  },
  template: `
  <LList spacing="3">
  <LListItem>
    <LListIcon icon="check-circle" color="green.500" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </LListItem>
  <LListItem>
    <LListIcon icon="check-circle" color="green.500" />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </LListItem>
  <LListItem>
    <LListIcon icon="check-circle" color="green.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </LListItem>
  <LListItem>
    <LListIcon icon="settings" color="green.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </LListItem>
</LList>
  `,
});

export const UnstyledList = UnstyledListTemplate.bind({});
