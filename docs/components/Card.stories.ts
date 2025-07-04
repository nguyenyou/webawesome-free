import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Cards can be used to group related subjects in a container.
 */
const meta: Meta = {
  component: 'wa-card',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-card class="card-overview">
      <img
        slot="media"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />

      <strong>Mittens</strong><br />
      This kitten is as cute as he is playful. Bring him home today!<br />
      <small class="wa-caption-m">6 weeks old</small>

      <div slot="footer" class="wa-split">
        <wa-button variant="brand" pill>More Info</wa-button>
        <wa-rating label="Rating"></wa-rating>
      </div>
    </wa-card>

    <style>
      .card-overview {
        width: 300px;
      }
    </style>
  `,
};
