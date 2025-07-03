import "./badge.js";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
type BadgeProps = {
    variant: "brand" | "neutral" | "success" | "warning" | "danger";
    appearance: "accent" | "filled" | "outlined";
    attention: "pulse" | "bounce" | "none";
    pill: boolean;
};
declare const meta: Meta<BadgeProps>;
export default meta;
type Story = StoryObj<BadgeProps>;
export declare const Primary: Story;
export declare const Default: {};
export declare const Variants: () => import("lit-html").TemplateResult<1>;
export declare const Appearances: () => import("lit-html").TemplateResult<1>;
export declare const Sizes: () => import("lit-html").TemplateResult<1>;
export declare const Pill: () => import("lit-html").TemplateResult<1>;
export declare const DrawingAttention: () => import("lit-html").TemplateResult<1>;
