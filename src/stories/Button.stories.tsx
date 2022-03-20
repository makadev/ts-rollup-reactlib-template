import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";
import "./button.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onClick: { action: "clicked" },
        children: {
            name: "label",
            type: { name: "string", required: false },
            defaultValue: "Hello",
            description: "overwritten description",
            table: {
                type: {
                    summary: "something short",
                    detail: "something really really long",
                },
                defaultValue: { summary: "Hello" },
            },
            control: {
                type: "text",
            },
        },
    },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    children: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    children: "Button",
};
