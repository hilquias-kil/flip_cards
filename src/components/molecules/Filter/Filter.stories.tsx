import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Filter } from './Filter';

export default {
  title: 'molecules/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: 'component-Filter-id',
};
