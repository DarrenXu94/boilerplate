import React from "react";
import Button from "~/library/common/components/Button/Button";
import LargeButton from "~/library/common/components/Button/variants/LargeButton";

interface NavbarViewProps {
  onClick;
}

export default function NavbarView({ onClick }: NavbarViewProps) {
  return (
    <div>
      <Button onClick={onClick} />
      <Button isPrimary={true} onClick={onClick} />
      <LargeButton onClick={onClick} />
    </div>
  );
}
