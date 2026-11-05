import { definePreview } from "@storybook/nextjs-vite";
import "@/styles/variables.css";
import "./preview.css";

const preview = definePreview({
  addons: [],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: "Dark", value: "#0E1013" },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  initialGlobals: {
    backgrounds: {
      value: "#0E1013",
    },
  },
});

export default preview;
