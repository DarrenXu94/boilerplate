import React from "react";
import Body, { BodyProps } from "./Body";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Body",
} as Meta;

const Template: Story<BodyProps> = (args) => {
  return <Body {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
