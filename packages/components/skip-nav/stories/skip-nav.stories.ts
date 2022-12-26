import type { StoryFn } from '@storybook/vue3';
import { LSkipNavContent, LSkipNavLink } from '../src';
import { LBox, LKbd, LList, LListItem, LText } from '@luniand-ui/layout';
import { LIcon } from '@luniand-ui/icons';

import { LCode } from '@luniand-ui/code';
import { LInput } from '@luniand-ui/input';

export default {
  title: 'Components / Skip-Nav',
  component: {
    LBox,
    LKbd,
    LList,
    LListItem,
    LText,
    LSkipNavContent,
    LSkipNavLink,
    LInput,
    LCode,
    LIcon,
  },
};

const Template: StoryFn = (args: any) => ({
  components: {
    LBox,
    LKbd,
    LList,
    LListItem,
    LText,
    LSkipNavContent,
    LSkipNavLink,
    LInput,
    LCode,
    LIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <LBox position="relative">
    <LSkipNavLink> HELLO LSkipNav </LSkipNavLink>
    <LSkipNavContent>
      <main>
        <LText>
          To test the SkipNav Components:
          <LList mb="4">
            <LListItem>
              <LIcon name="chevron-right" />
              Place focus on the below input
            </LListItem>
            <LListItem>
              <LIcon name="chevron-right" />
              Press <LKbd>Shift + Tab</LKbd> to make the
              <LCode>SkipNavLink</LCode> appear
            </LListItem>
            <LListItem>
              <LIcon name="chevron-right" />
              Hit <LKbd>Enter</LKbd>.
            </LListItem>
            <LListItem>
              <LIcon name="chevron-right" />
              You should now see the focus over all the content with a blue
              outline.
            </LListItem>
          </LList>
        </LText>
        <label>Example Form Search</label>
        <LInput placeholder="Search" />
      </main>
    </LSkipNavContent>
  </LBox>
  `,
});

export const Basic = Template.bind({});
