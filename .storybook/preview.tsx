import { definePreview } from "@storybook/nextjs-vite";
import "@/styles/variables.css";

const preview = definePreview({
  addons: [],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
});

export default preview;
