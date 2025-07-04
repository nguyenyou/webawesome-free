import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

/**
 * Scrollers create an accessible container while providing visual cues that help users identify and navigate through content that scrolls.
 */
const meta: Meta = {
  component: 'wa-scroller',
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <wa-scroller id="scroller__overview">
      <table>
        <tr>
          <th>Party Role</th>
          <th>Combat Style</th>
          <th>Group Size</th>
          <th>Campaign Setting</th>
          <th>Signature Traits</th>
        </tr>
        <tr>
          <td>Warrior</td>
          <td>Melee Tank</td>
          <td>1-2</td>
          <td>Forgotten Realms</td>
          <td>Plate-armored swordmaster who taunts foes.</td>
        </tr>
        <tr>
          <td>Rogue</td>
          <td>Stealth Striker</td>
          <td>1</td>
          <td>Eberron</td>
          <td>Shadowy lockpick with daggers and a secret gold stash.</td>
        </tr>
        <tr>
          <td>Wizard</td>
          <td>Spell Slinger</td>
          <td>1</td>
          <td>Greyhawk</td>
          <td>Robe-clad mage hurling fireballs from a messy spellbook.</td>
        </tr>
        <tr>
          <td>Cleric</td>
          <td>Divine Support</td>
          <td>1</td>
          <td>Ravnica</td>
          <td>Holy healer with a glowing amulet and sneaky ale habit.</td>
        </tr>
        <tr>
          <td>Bard</td>
          <td>Charisma King</td>
          <td>1</td>
          <td>Dragonlance</td>
          <td>Lute-playing charmer with magical songs and bad puns.</td>
        </tr>
      </table>
    </wa-scroller>

    <style>
      #scroller__overview {
        table {
          margin-block: 0;
        }

        th,
        td {
          white-space: nowrap;
        }

        th:nth-child(5),
        td:nth-child(5) {
          min-width: 50ch;
          white-space: wrap;
        }
      }
    </style>
  `,
};
