import React from "react";
import Button from "~/library/common/components/Button/Button";

interface INavbarView {
  onClick;
}

export default function NavbarView({ onClick }: INavbarView) {
  return (
    <div>
      <Button onClick={onClick} />
      <Button isPrimary={true} onClick={onClick} />
    </div>
  );
}
