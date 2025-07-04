import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta: Meta = {
  component: 'wa-breadcrumb',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-breadcrumb>
      <wa-breadcrumb-item>Catalog</wa-breadcrumb-item>
      <wa-breadcrumb-item>Clothing</wa-breadcrumb-item>
      <wa-breadcrumb-item>Women's</wa-breadcrumb-item>
      <wa-breadcrumb-item>Shirts &amp; Tops</wa-breadcrumb-item>
    </wa-breadcrumb>
  `,
};
