import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardsList } from './CardsList';

export default {
  title: 'layout/CardsList',
  component: CardsList,
} as ComponentMeta<typeof CardsList>;

const Template: ComponentStory<typeof CardsList> = (args) => <CardsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: 'component-CardsList-id',
};
