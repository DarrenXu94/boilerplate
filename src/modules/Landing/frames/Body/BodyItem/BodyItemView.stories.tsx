import React from "react";
import BodyItemView from "./BodyItemView";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Example/Button",
  component: BodyItemView,
  argTypes: {
    item: { control: "Test" },
  },
} as Meta;

export const Primary = () => <BodyItemView item={{ title: "Test" }} />;
export const Secondary = () => <BodyItemView item={{ title: "Test 2" }} />;
