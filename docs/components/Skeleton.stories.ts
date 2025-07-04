import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Skeletons are used to provide a visual representation of where content will eventually be drawn.
 */
const meta: Meta = {
  component: 'wa-skeleton',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="skeleton-overview">
      <header>
        <wa-skeleton effect="sheen"></wa-skeleton>
        <wa-skeleton effect="sheen"></wa-skeleton>
      </header>

      <wa-skeleton effect="sheen"></wa-skeleton>
      <wa-skeleton effect="sheen"></wa-skeleton>
      <wa-skeleton effect="sheen"></wa-skeleton>
    </div>

    <style>
      .skeleton-overview header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .skeleton-overview header wa-skeleton:last-child {
        flex: 0 0 auto;
        width: 30%;
      }

      .skeleton-overview wa-skeleton {
        margin-bottom: 1rem;
      }

      .skeleton-overview wa-skeleton:nth-child(1) {
        float: left;
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        vertical-align: middle;
      }

      .skeleton-overview wa-skeleton:nth-child(3) {
        width: 95%;
      }

      .skeleton-overview wa-skeleton:nth-child(4) {
        width: 80%;
      }
    </style>
  `,
};
