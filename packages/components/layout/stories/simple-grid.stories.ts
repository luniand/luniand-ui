import type { StoryFn } from "@storybook/vue3";
import { LSimpleGrid, LBox } from "../src";

export default {
  title: "Components / Layout / SimpleGrid",
  component: { LSimpleGrid, LBox },
};

const Template: StoryFn = (args: any) => ({
  components: { LSimpleGrid, LBox },
  setup() {
    return { args };
  },
  template: `
  <div>
      <span> Specifying the number of columns for the grid layout. </span>
      <LSimpleGrid :columns="2" :spacing="10">
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
     </LSimpleGrid>
     <span> You can also make it responsive by passing array or object values into the columns prop. </span>
      <LSimpleGrid :columns="[2, null, 3]" spacing="40px">
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
        <LBox background="green" height="80px"></LBox>
    </LSimpleGrid>
    </div>
  `,
});

export const SimpleGrid = Template.bind({});

const responsiveTemplate: StoryFn = (args: any) => ({
  components: { LSimpleGrid, LBox },
  setup() {
    return { args };
  },
  template: `
    <LSimpleGrid min-child-width="120px" spacing="40px">
      <LBox background="green" height="80px"></LBox>
      <LBox background="green" height="80px"></LBox>
      <LBox background="green" height="80px"></LBox>
      <LBox background="green" height="80px"></LBox>
      <LBox background="green" height="80px"></LBox>
      <LBox background="green" height="80px"></LBox>
    </LSimpleGrid>
  `,
});

export const responsive = responsiveTemplate.bind({});

const spacingTemplate: StoryFn = (args: any) => ({
  components: { LSimpleGrid, LBox },
  setup() {
    return { args };
  },
  template: `
  <LSimpleGrid :columns="2" spacing-x="40px" spacing-y="20px">
    <LBox background="green" height="80px"></LBox>
    <LBox background="green" height="80px"></LBox>
    <LBox background="green" height="80px"></LBox>
    <LBox background="green" height="80px"></LBox>
    <LBox background="green" height="80px"></LBox>
  </LSimpleGrid>
  `,
});

export const spacingForColumnsAndRows = spacingTemplate.bind({});
