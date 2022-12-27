import type { StoryFn } from '@storybook/vue3';
import { LBox, LBadge } from '../src';
import { LIcon } from '@luniand-ui/icons';
import { LImage } from '@luniand-ui/image';
import { reactive } from 'vue';
export default {
  title: 'Components / Layout / Box',
  component: { LBox },
};

const Template: StoryFn = (args: any) => ({
  components: { LBox },
  setup() {
    return { args };
  },
  template: `
    <LBox bg="purple" w="100%" p="4" color="white">
    This is the Box
    </LBox>
  `,
});

export const Basic = Template.bind({});

const CompositionTemplate: StoryFn<typeof LBox> = (args: any) => ({
  components: { LBox, LIcon, LImage, LBadge },
  setup() {
    const property = reactive({
      imageUrl:
        'https://backan.gov.vn/PictureLibrary/9f35456be5aa0969/image003.jpg',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Babe lake in Backan',
      formattedPrice: '$100.00',
      reviewCount: 34,
      rating: 4,
    });

    return { args, property };
  },
  template: `
  <LBox maxW="sm" border-width="1px" rounded="lg" overflow="hidden">
  <LImage :src="property.imageUrl" :alt="property.imageAlt" />
  <LBox p="6">
    <LBox d="flex" align-items="baseline">
      <LBadge rounded="full" px="2" variant-color="green">
        New
      </LBadge>
      <LBox
        color="gray.500"
        font-weight="semibold"
        letter-spacing="wide"
        font-size="xs"
        text-transform="uppercase"
        ml="2"
      >
        {{ property.beds }} beds &bull; {{ property.baths }} baths
      </LBox>
    </LBox>
    <LBox
      mt="1"
      font-weight="semibold"
      as="h4"
      line-height="tight"
      is-truncated
    >
      {{ property.title }}
    </LBox>
    <LBox>
      {{ property.formattedPrice }}
      <LBox as="span" color="gray.600" fontSize="sm">
        / wk
      </LBox>
    </LBox>
    <LBox d="flex" mt="2" align-items="center">
      <LIcon
        v-for="(_, i) in Array(5).fill('')"
        name="star"
        :key="i"
        :color="i < property.rating ? 'green.500' : 'gray.300'"
      />
      <LBox as="span" ml="2" color="gray.600" font-size="sm">
        {{ property.reviewCount }} reviews
      </LBox>
    </LBox>
  </LBox>
</LBox>
  `,
});

export const CompositionWithBox = CompositionTemplate.bind({});

const asPROPTemplate: StoryFn = (args: any) => ({
  components: { LBox },
  setup() {
    return { args };
  },
  template: `
    <LBox as="button" rounded="md" bg="purple" color="white" px="4" h="8">
      Button
    </LBox>
  `,
});

export const BoxWithProp = asPROPTemplate.bind({});
