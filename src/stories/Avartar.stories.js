import { Avartar } from "./Avartar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Component/Avartar",
  component: Avartar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: "medium",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Medium = {
  args: {
    size: "medium",
  },
};

export const Motionbit = {
  args: {
    size: "medium",
    src: "https://firebasestorage.googleapis.com/v0/b/deez-node-firebase.appspot.com/o/images%2FIMG_2494.JPG?alt=media&token=f8a363aa-18fe-4675-86df-f15d0d16591d",
  },
};
