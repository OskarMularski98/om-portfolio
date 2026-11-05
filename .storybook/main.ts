import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "..\\public"
  ],
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [tailwindcss()],
    }),
};
export default config;