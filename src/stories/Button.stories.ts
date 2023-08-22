import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { description: 'ボタンの文字' },
    color: { control: 'color', description: 'ボタンの文字色' },
    theme: { description: 'ボタンの背景色' },
    size: { description: 'ボタンのサイズ' },
    isDisabled: { description: 'ボタンのdisabled' },
    onClick: { description: 'クリックイベント' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    theme: 'secondary',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    theme: 'error',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    theme: 'warning',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    theme: 'info',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    theme: 'success',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};
