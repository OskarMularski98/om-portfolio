import preview from "@/.storybook/preview";

import BaseCard from "@/components/BaseCard";

const meta = preview.meta({
  component: BaseCard,
});

export const Priamry = meta.story({
  args: {
    children: "Click me",
  },
});

export const Secondary = meta.story({
  args: {
    children: "Secondary",
    variant: "secondary",
  },
});

export const GhostMuted = meta.story({
  args: {
    children: "Muted",
    variant: "muted",
  },
});
