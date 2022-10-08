import { cleanup, render } from '@testing-library/react';
import { configureAxe } from 'jest-axe';
import React from 'react';
import { afterEach, beforeEach } from 'vitest';

beforeEach(() => {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
});

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });

export const axe = configureAxe({
  rules: {
    // Disabled because not all components need landmarks
    region: { enabled: false },
  },
});

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
