/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  var StarlightThemeProvider: {
    updatePickers(theme?: string): void;
  };
}

export {};
