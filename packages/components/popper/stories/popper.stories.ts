import type { StoryFn } from '@storybook/vue3';
import { usePopper } from '../src';
import { LButton } from '@luniand-ui/button';
import { LPortal } from '../../portal/src';
import { LBox, LText } from '../../layout/src';

import { computed, nextTick, ref, watch } from 'vue';
import { useMotion } from '@vueuse/motion';
import { variants, innerVariants } from './motion.utils';

export default {
  title: 'Components / Popper',
  component: { LButton },
};

const Template: StoryFn = (args: any) => ({
  components: { LButton },
  setup() {
    const isOpen = ref(false);

    const { reference, popper } = usePopper({
      gutter: 16,
      placement: 'right-end',
    });

    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      args,
      isOpen,
      toggle,
      reference,
      popper,
    };
  },
  template: `
    <div>
        <LButton left-icon="arrow-forward" :ref="reference" @click="toggle">Toggle</LButton>
        <div v-if="isOpen" :ref="popper" style="padding: 20px; background: red">
        <div
            data-popper-arrow=""
            style="--popper-arrow-size: 10px; background: yellow"
        />
        Popper
        </div>
    </div>
  `,
});

export const Basic = Template.bind({});

const PopperTranstionTemplate: StoryFn = (args: any) => ({
  components: { LButton, LPortal, LBox, LText },
  setup() {
    const isOpen = ref(false);
    const motionInstance = ref();
    const innerMotionInstance = ref();
    const innerPopperElement = ref();
    const { reference, popper, popperEl } = usePopper({
      gutter: 16,
      placement: 'right-end',
    });

    const _innerPopperElement = computed(
      () => innerPopperElement.value?.$el || innerPopperElement.value
    );

    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    watch(
      isOpen,
      async (newVal) => {
        await nextTick();
        if (newVal) {
          motionInstance.value = useMotion(popperEl, variants);
          innerMotionInstance.value = useMotion(
            _innerPopperElement.value,
            innerVariants
          );
        }
      },
      {
        immediate: true,
      }
    );

    return {
      isOpen,
      toggleIsOpen,
      reference,
      popper,
      innerPopperElement,
      motionInstance,
      innerMotionInstance,
    };
  },
  template: `
    <LBox h="100%" d="flex" p="12">
    <LPortal>
      <transition
        :css="false"
        @leave="
          (el, done) => {
            motionInstance.leave(done)
            innerMotionInstance.leave?.(done)
          }
        "
      >
        <LText :ref="popper" v-if="isOpen">
          <LBox
            ref="innerPopperElement"
            d="inline-flex"
            flex-direction="column"
            w="150px"
            shadow="lg"
            rounded="lg"
            transform-origin="top left"
            bg="gray.50"
            border-width="1px"
            border-color="gray.300"
            color="gray.600"
            cursor="pointer"
            overflow="hidden"
          >
            <LButton
              @click="toggleIsOpen"
              variant="outline"
              size="sm"
              justify-content="flex-start"
              border="none"
              rounded="none"
            >
              New file
            </LButton>
            <LButton
              @click="toggleIsOpen"
              variant="outline"
              size="sm"
              justify-content="flex-start"
              border="none"
              rounded="none"
            >
              Save files
            </LButton>
            <LButton
              @click="toggleIsOpen"
              variant="outline"
              size="sm"
              justify-content="flex-start"
              border="none"
              rounded="none"
            >
              Save file as
            </LButton>
            <LButton
              @click="toggleIsOpen"
              variant="outline"
              size="sm"
              justify-content="flex-start"
              border="none"
              rounded="none"
            >
              Export file
            </LButton>
          </LBox>
        </LText>
      </transition>
    </LPortal>

    <LButton
      right-icon="chevron-down"
      :ref="reference"
      id="referenceElement"
      color-scheme="blue"
      @click="toggleIsOpen"
    >
      {{ isOpen ? 'Close' : 'Open' }}
    </LButton>
  </LBox>
  `,
});

export const PopperTranstion = PopperTranstionTemplate.bind({});
