import React from "react";
import Button from "../Button";

interface LargeButtonProps {
  onClick?;
  isPrimary?;
}

export default function LargeButton(props: LargeButtonProps) {
  return <Button style={{ padding: "2rem" }} {...props} />;
}
