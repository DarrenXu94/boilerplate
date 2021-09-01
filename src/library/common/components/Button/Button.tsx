import React from "react";

import styled from "styled-components";
import { COLORS } from "~/library/common/constants/cssVariables";

export interface ButtonProps {
  isPrimary?;
}

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.primary ? COLORS.colorPrimary : COLORS.colorBackground};
  color: ${(props) =>
    props.primary ? COLORS.colorBackground : COLORS.colorPrimary};

  font-size: 1em;
  // margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${COLORS.colorPrimary};
  border-radius: 3px;
  cursor: pointer;
`;
export default function Button({
  isPrimary,
  ...props
}: ButtonProps & React.HTMLProps<HTMLButtonElement>) {
  console.log(props);
  return (
    <StyledButton primary={isPrimary} {...props}>
      {props.children}
    </StyledButton>
  );
}
