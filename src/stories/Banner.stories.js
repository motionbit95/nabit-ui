import { Banner } from "./Banner";

export default {
  title: "Component/Banner",
  component: Banner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    title: "Hooray, twe just released a new version.",
    description:
      "Exciting times ahead, as the new version integrates the most recent updates from Nabit UI.",
    align: "left",
  },
};
