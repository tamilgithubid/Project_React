// src/stories/Button.stories.js
import { Button } from '@/components/ui/button';
import { action } from '@storybook/addon-actions';
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: { onClick: action('Clicked') },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    size: 'md',
    children: 'Button',
    variant: 'primary',
  },
};

