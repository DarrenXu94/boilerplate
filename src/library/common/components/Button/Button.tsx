import React from "react";

import styled from "styled-components";

interface IButton {
  onClick?;
  isPrimary?;
}

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "var(--color-primary)" : "white")};
  color: ${(props) => (props.primary ? "white" : "var(--color-primary)")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color-primary);
  border-radius: 3px;
`;
export default function Button({ onClick, isPrimary }: IButton) {
  return (
    <div>
      <StyledButton primary={isPrimary} onClick={onClick}>
        Test button
      </StyledButton>
    </div>
  );
}
