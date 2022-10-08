import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Filter } from './Filter';

export default {
  title: 'molecules/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: 'component-Filter-id',
  tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
  setFilter: () => {},
  removeFilter: () => {},
  filter: ['tag 2'],
};
