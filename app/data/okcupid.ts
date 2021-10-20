export default {
    name: "OkCupid",
    fields: [
        {
            name: "email",
            type: "input",
            label: "Welcome! Who are you?",
        },
        {
            name: "password",
            type: "input",
            label: "Create a password",
        },
        {
            type: "prompt",
            name: "welcome",
            label: "Let's start with the basics",
            sublabel: "Set up your profile to meet new people",
            button: ["Next"],
        },
        {
            name: "first_name",
            type: "input",
            label: "about you",
            security: "this infor will be visibile to others",
        },
        {
            name: "gender",
            type: "mc",
            options: ["Woman", "Man", "More options"],
            label: "Gender",
        },
        {
            name: "birthday",
            type: "datepicker",
            label: "Birthdate",
        },
        {
            type: "input",
            name: "location",
            label: "Location",
        },
        {
            type: "profile_photo",
            name: "profile_photo",
            requiredCount: 1,
            label: "Add photos of you",
            sublabel: "You must be in the photo",
            guidelines: true,
        },
        {
            type: "input",
            name: "bio",
            label: "Introduce yourself with a short summary",
        },
        {
            type: "mc",
            name: "political_view",
            label: "Which best describes your political beliefs",
            options: ["Liberal", "Centrist", "Conservative", "other"],
            skippable: true,
        },
        {
            name: "phone",
            type: "input",
            label: "Verify you account",
        },
    ],
}
