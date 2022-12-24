import type { StoryFn } from '@storybook/vue3';
import { LPortal } from '../src';
import { LBox } from '@luniand-ui/layout';
import { onBeforeMount, ref } from 'vue';

export default {
  title: 'Components / Portal',
  component: {
    LPortal,
    LBox,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LPortal,
    LBox,
  },
  setup() {
    return { args };
  },
  template: `
    <LBox bg='red.400' color='white'>
        I'm here,
        <LPortal>This text is portaled at the end of document.body!</LPortal>
    </LBox>
  `,
});

export const Basic = Template.bind({});

const CustomContainerTemplate: StoryFn = (args: any) => ({
  components: {
    LPortal,
    LBox,
  },
  setup() {
    const value = ref(5000);
    const isMounted = ref(true);

    onBeforeMount(() => {
      const target = document.createElement('div');
      target.style.display = 'inline-block';
      target.style.position = 'absolute';
      target.style.top = '50px';
      target.style.left = '250px';

      target.id = 'new-target';
      document.body.appendChild(target);
    });

    setInterval(() => {
      isMounted.value = !isMounted.value;
    }, 2000);

    setInterval(() => {
      if (value.value <= 0) {
        value.value = 5000;
        return;
      }
      value.value -= 100;
    }, 100);

    return { args };
  },
  template: `
    <LBox bg='red.400' color='white'>
    <h1> Open Vue Dev Tools to inspect page for portal elements. </h1>
        I'm here,
        <LPortal  to="#new-target">
             <LBox  bg='yellow.600'>
            <div>LPortal: This text is portaled to the yellow box!</div>
           </LBox>
        </LPortal>
        <LBox  bg='yellow.500'>
         <div>Container: Hey,</div>
        </LBox>
    </LBox>
  `,
});

export const CustomContainer = CustomContainerTemplate.bind({});
