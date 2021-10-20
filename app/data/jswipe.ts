export default {
    name: "JSwipe",
    fields: [
        {
            type: "prompt",
            name: "welcome",
            label: "Welcome, John",
            button: ["Continue"],
        },
        {
            name: "first_name",
            type: "input",
            label: "My first name is...",
        },
        {
            name: "birthday",
            type: "facebook",
            label: "Gotten from facebook",
        },
        {
            name: "gender",
            type: "facebook",
            label: "Gotten from facebook",
        },
        {
            name: "jewishness",
            type: "mc",
            label: "What do you identify with?",
            options: ["orthodox", "traditional", "conservative", "blah", "blah"],
        },
        {
            name: "kosher",
            type: "mc",
            label: "Do you keep kosher?",
            options: ["yes", "no"],
        },
        {
            type: "instagram",
            name: "instagram",
            label: "Get more matches with instagram",
            sublabel:
                "You're more than just a swipe. We know that and everyone else should too. Adding instagram is easy and effective!",
            button: ["Link Instagram", "Maybe Later"],
        },
        {
            name: "bio",
            type: "input",
            label: "Write a short bio",
            sublabel: "Enter something interesting here",
            skippable: true,
            guidelines: true,
        },
        {
            type: "profile_photo",
            name: "profile_photo",
            label: "Photo avatar is present on every page",
        },
        {
            name: "notifications",
            type: "prompt",
            buttons: ["Yes of course", "No thanks"],
            label: "Would you like to be alerted when you receive a match or a message",
        },
        {
            name: "location",
            type: "map",
            label: "Allow 'JSwipe' to use your location?",
        },
    ],
}
