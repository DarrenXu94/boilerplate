import React from "react";
import KDramas, { KDramasProps } from "./KDramas";
import { Meta, Story } from "@storybook/react";

export default {
  title: "KDramas",
} as Meta;

const Template: Story<KDramasProps> = (args) => {
  return <KDramas {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
