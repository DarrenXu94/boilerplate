import React from "react";
import Button, { ButtonProps } from "./Button";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Storybook Button",
};
