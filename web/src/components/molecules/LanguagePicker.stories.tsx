import type { Meta, StoryObj } from "@storybook/react";
import LanguagePicker from "./LanguagePicker";
import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";

const meta: Meta<typeof LanguagePicker> = {
  title: "Molecules/LanguagePicker",
  component: LanguagePicker,
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof LanguagePicker>;

export const Default: Story = {};