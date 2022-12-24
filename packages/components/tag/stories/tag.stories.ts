import type { StoryFn } from '@storybook/vue3';
import {
  LTag,
  LTagLabel,
  LTagCloseButton,
  LTagLeftIcon,
  LTagRightIcon,
} from '../src';
import { ref } from 'vue';
import { LStack } from '@luniand-ui/layout';
import { LIcon } from "@luniand-ui/icons";

export default {
  title: 'Components / Tag',
  component: {
    LTag,
    LTagLabel,
    LTagCloseButton,
    LTagLeftIcon,
    LTagRightIcon,
    LStack,
    LIcon,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LTag,
    LTagLabel,
    LTagCloseButton,
    LTagLeftIcon,
    LTagRightIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <LTag>Awesome Tag</LTag>
  `,
});

export const Basic = Template.bind({});

const SizeTemplate: StoryFn = (args: any) => ({
  components: {
    LTag,
    LTagLabel,
    LTagCloseButton,
    LTagLeftIcon,
    LTagRightIcon,
    LStack,
  },
  setup() {
    const sizes = ref(['sm', 'md', 'lg']);
    return { args, sizes };
  },
  template: `
    <div>
        <LStack :spacing="4" align-items="start" is-inline>
            <LTag v-for="size in sizes" :size="size" :key="size" color-scheme="teal">
                Vue {{ size }}
            </LTag>
         </LStack>
    </div>
  `,
});

export const SizeTag = SizeTemplate.bind({});

const LefticonTemplate: StoryFn = (args: any) => ({
  components: {
    LTag,
    LTagLabel,
    LTagCloseButton,
    LTagLeftIcon,
    LTagRightIcon,
    LStack,
    LIcon
  },
  setup() {
    const sizes = ref(['sm', 'md', 'lg']);
    return { args, sizes };
  },
  template: `
    <div>
        <LStack :spacing="4" align-items="start" is-inline>
            <LTag v-for="size in sizes" :size="size" :key="size" color-scheme="cyan">
                <LTagLeftIcon size="12px" > </LTagLeftIcon>
                <LTagLabel> Vue {{ size }} </LTagLabel>
            </LTag>
         </LStack>
    </div>
  `,
});

export const LeftIconTag = LefticonTemplate.bind({});
