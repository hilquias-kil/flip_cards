import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  testId: 'component-Card-id',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
  title: 'title1 : title 2',
  image: 'https://via.placeholder.com/540x240',
  tags: ['tag1', 'tag2'],
  url: '/',
  featured: 1,
};
