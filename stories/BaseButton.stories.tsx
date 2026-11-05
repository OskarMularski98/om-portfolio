import preview from "@/.storybook/preview";

import BaseButton from "@/components/BaseButton";

//👇 This default export determines where your story goes in the story list
const meta = preview.meta({
  component: BaseButton,
});

export const Default = meta.story({
  args: {
    children: "Click me",
  },
});
