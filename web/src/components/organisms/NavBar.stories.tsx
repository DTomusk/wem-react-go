import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
  title: "Organisms/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
