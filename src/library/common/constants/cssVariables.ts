const getCssVariable = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(name);
};

export enum COLORS {
  colorPrimary = "var(--color-primary)",
  colorBackground = "var(--color-background)",
  colorText = "var(--color-text)",
}

export const globalStyle = `
html {
  --color-text: ${getCssVariable("--color-text")};
  --color-background: ${getCssVariable("--color-background")};
  --color-primary: ${getCssVariable("--color-primary")};
}
`;
