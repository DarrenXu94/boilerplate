import React from "react";
import Button, { ButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
