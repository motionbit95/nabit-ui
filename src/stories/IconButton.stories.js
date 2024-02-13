import { IconButton } from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Google = {
  args: {
    icon: "https://img.icons8.com/color/48/000000/google-logo.png",
  },
};

export const Facebook = {
  args: {
    icon: "https://img.icons8.com/color/48/000000/facebook-new.png",
  },
};

export const Apple = {
  args: {
    icon: "https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png",
  },
};
