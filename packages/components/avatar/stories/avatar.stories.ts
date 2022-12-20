import type { StoryFn } from '@storybook/vue3';
import { LAvatar, LAvatarGroup, LAvatarBadge, LAvatarGroup } from '../src';
import { LStack } from '@luniand-ui/layout';
export default {
  title: 'Components / Avatar',
  component: { LAvatar, LAvatarGroup },
};

const Template: StoryFn = (args: any) => ({
  components: { LAvatar, LAvatarGroup },
  setup() {
    return { args };
  },
  template: `
  <LAvatar  name="Evan You" src="https://bit.ly/chakra-evan-you" />
  <LAvatar  name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
  <LAvatar  name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
  <LAvatar  name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
  <LAvatar  name="Mesut Koca" src="https://bit.ly/chakra-mesut-koca" />
  <LAvatar  name="Gift Egwuenu" src="https://bit.ly/chakra-gift-egwuenu" />
  <LAvatar  name="Maya Shavin" src="https://bit.ly/chakra-maya-shavin" />
  <LAvatar  name="Jonathan Bakebwa" src="https://bit.ly/chakra-jonathan-bakebwa" />
  `,
});

export const Basic = Template.bind({});

const SizesTemplate: StoryFn = (args: any) => ({
  components: { LAvatar, LStack },
  setup() {
    return { args };
  },
  template: `
  <LStack spacing="4" direction="row" align="center">
    <LAvatar  size="2xs" name="Evan You" src="https://bit.ly/chakra-evan-you" />
    <LAvatar  size="xs" name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
    <LAvatar  size="sm" name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
    <LAvatar  size="md" name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
    <LAvatar  size="lg" name="Mesut Koca" src="https://bit.ly/chakra-mesut-koca" />
    <LAvatar  size="xl" name="Maya Shavin" src="https://bit.ly/chakra-maya-shavin" />
    <LAvatar  size="2xl" name="Jonathan Bakebwa" src="https://bit.ly/chakra-jonathan-bakebwa" />
  </LStack>
  `,
});

export const AvatarSizes = SizesTemplate.bind({});

const FallbacksTemplate: StoryFn = (args: any) => ({
  components: { LAvatar, LStack },
  setup() {
    return { args };
  },
  template: `
  <LStack spacing="4" direction="row" align="center">
    <LAvatar  name="Lady Tsunade" src="https://bit.ly/broken-link" />
    <LAvatar  name="Kaguya Otsutsuki" src="https://bit.ly/broken-link" />
    <LAvatar  src="https://bit.ly/broken-link" />
  </LStack>
  `,
});

export const AvatarFallbacks = FallbacksTemplate.bind({});

const BadgeTemplate: StoryFn = (args: any) => ({
  components: { LAvatar, LStack, LAvatarBadge },
  setup() {
    return { args };
  },
  template: `
  <LStack spacing="4" direction="row" align="center">
    <LAvatar  name="Naruto Uzumaki" src="https://bit.ly/chakra-naruto-uzumaki">
    <LAvatarBadge size="1.0em" bg="green.500" />
    </LAvatar >
    <LAvatar  name="Sakura Haruno" src="https://bit.ly/chakra-sakura-haruno">
      <LAvatarBadge size="1.0em" bg="green.500" />
    </LAvatar >
    <LAvatar  name="Sasuke Uchiha" src="https://bit.ly/chakra-sasuke-uchiha">
      <LAvatarBadge size="1.0em" bg="red.400" />
    </LAvatar >
    <LAvatar  show-border name="Kakashi Hatake" src="https://bit.ly/chakra-kakashi-hatake">
      <LAvatarBadge size="1.0em" bg="orange.400" />
    </LAvatar >
  </LStack>
  `,
});

export const AvatarWithBadge = BadgeTemplate.bind({});

const AvatarGroupTemplate: StoryFn = (args: any) => ({
  components: { LAvatar, LAvatarGroup },
  setup() {
    return { args };
  },
  template: `
    <LAvatarGroup max="3">
      <LAvatar  name="Evan You" src="https://bit.ly/chakra-evan-you" />
      <LAvatar  name="Jonathan Bakebwa" src="https://bit.ly/chakra-jonathan-bakebwa" />
      <LAvatar  name="Segun Adebayo" src="https://bit.ly/chakra-segun-adebayo" />
      <LAvatar  name="Sarah Drasner" src="https://bit.ly/chakra-sarah-drasner" />
      <LAvatar  name="Kelvin Omereshone" src="https://bit.ly/chakra-kelvin-omereshone" />
      <LAvatar  name="Mesut Koca" src="https://bit.ly/chakra-mesut-koca" />
      <LAvatar  name="Maya Shavin" src="https://bit.ly/chakra-maya-shavin" />
    </LAvatarGroup>
  `,
});

export const AvatarGroup = AvatarGroupTemplate.bind({});
