import { Typography } from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: {
    style: "body",
    weight: "regular",
    color: "black",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Body = {
  args: {
    style: "body",
    weight: "regular",
    color: "black",
    content: "Lorem ipsum dolor sit amet",
  },
};
