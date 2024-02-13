import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const Text = {
  args: {
    type: "text",
    label: "Name",
  },
};
export const Email = {
  args: {
    type: "email",
    label: "Email",
  },
};
export const Password = {
  args: {
    type: "password",
    label: "Password",
  },
};
