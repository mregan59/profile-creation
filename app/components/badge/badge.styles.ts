import { dimensions, variables, spacing } from "../../theme/variables"
import { withStyles } from "@ui-kitten/components"
import { Badge } from "./Badge.component"

export const ThemedBadge = withStyles(Badge, (theme) => {
    const setColors = (status) => {
        return {
            // color: theme[`color-${status}-500`],
            backgroundColor: theme[`color-${status}-transparent-100`],
        }
    }
    return {
        badge: {
            borderRadius: 6,
            maxWidth: "100%",
        },
        tiny: {
            paddingVertical: 6,
            paddingHorizontal: 10,
        },
        small: {
            paddingVertical: 8,
            paddingHorizontal: 12,
        },
        medium: {
            paddingVertical: 8,
            paddingHorizontal: 14,
        },
        large: {
            paddingVertical: 12,
            paddingHorizontal: 16,
        },
        giant: {
            paddingVertical: 14,
            paddingHorizontal: 18,
        },
        primary: {
            ...setColors("primary"),
        },
        filled: {
            backgroundColor: theme[`color-primary-500`],
        },
        info: {
            ...setColors("info"),
        },
        warning: {
            ...setColors("warning"),
        },
        success: {
            ...setColors("success"),
        },
        default: {
            backgroundColor: theme[`color-basic-transparent-200`],
        },
        danger: {
            ...setColors("danger"),
        },
        text: {
            fontWeight: "bold",
            color: "white",
        },
        defaultText: {
            color: theme["text-hint-color"],
        },
        primaryText: {
            color: theme["color-primary-600"],
        },
        dangerText: {
            color: theme["color-danger-600"],
        },
        filledText: {
            color: "white",
        },
    }
})
