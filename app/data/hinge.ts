export default {
    name: "Hinge",
    fields: [
        {
            name: "phone",
            type: "input",
            label: "What's your phone number",
        },
        {
            type: "prompt",
            name: "welcome",
            label: "Welcome to Hinge. The dating app designed to be deleted.",
            button: ["Continue"],
        },
        {
            name: "first_name",
            type: "input",
            label: "What's your name",
        },
        {
            name: "email",
            type: "input",
            label: "What's your email",
        },
        {
            name: "birthday",
            type: "datepicker",
            label: "What's your date of birth",
        },
        {
            name: "notifications",
            type: "mc",
            options: ["Enable notifications", "Disable Notifications"],
            label: "Never miss a message from someone great",
            additional: {
                type: "confirm",
                label:
                    "Are you sure? By disabling notifications, you'll miss new likes, matches and messages form other Members",
                button: ["enable notifications", "not now"],
            },
        },
        {
            type: "prompt",
            name: "basic_prompt",
            label: "adding basic infor leads to better matches",
            button: ["enter basic information"],
        },
        {
            name: "location",
            type: "map",
            label: "Where do you live",
        },
        {
            name: "gender",
            type: "mc",
            options: ["man", "woman", "more"],
            label: "What's your gender",
            hideable: true,
        },
        {
            name: "height",
            type: "spinner",
            label: "How tall are you?",
            hideable: true,
        },
        {
            name: "race",
            type: "mc",
            options: [
                "American Indian",
                "East Asian",
                "Middle Easterm",
                "South Asian",
                "Other",
                "Black/African Descent",
                "Hispanic/Latino",
                "Pacific Islander",
                "White/Caucasian",
                "Prefer Not to Say",
            ],
            label: "What's your ethnicity",
            hideable: true,
        },
        {
            name: "children",
            type: "mc",
            options: [
                "Don't have children",
                "Have children",
                "Prefer Not Say",
                "Don't want children",
                "Want children",
                "Open to children",
                "Prefer not to say",
            ],
            label: "What about children?",
            hideable: true,
        },
        {
            name: "hometown",
            type: "location_input",
            label: "Where's your hometown?",
            hideable: true,
            skippable: true,
        },
        {
            name: "workplace",
            type: "input",
            label: "Where do you work?",
            hideable: true,
            skippable: true,
        },
        {
            name: "occupation",
            type: "input",
            label: "What's your job title?",
            hideable: true,
            skippable: true,
        },
        {
            name: "school",
            type: "input",
            label: "Where did you go to school?",
            hideable: true,
            skippable: true,
        },
        {
            name: "education",
            type: "mc",
            options: ["High School", "Undergraduate", "Postgraduate", "Prefer Not to Say"],
            label: "What's the highest level you attained?",
            hideable: true,
        },
        {
            name: "religion",
            type: "mc",
            options: [
                "Buddhist",
                "Catholic",
                "Christian",
                "Hindu",
                "Jewish",
                "Muslim",
                "Spiritual",
                "Agnostic",
                "Atheist",
                "Other",
                "Prefer Not to Say",
            ],
            label: "What are your religious beliefs?",
            hideable: true,
        },
        {
            name: "political_views",
            type: "mc",
            options: ["Liberal", "Moderate", "Conservative", "Other", "Prefer Not to Say"],
            label: "What are your political beliefs?",
            hideable: true,
        },
        {
            name: "drinking",
            type: "mc",
            options: ["Yes", "Sometimes", "No", "Prefer Not to Say"],
            label: "Do you drink?",
            hideable: true,
        },
        {
            name: "smoking",
            type: "mc",
            options: ["Yes", "Sometimes", "No", "Prefer Not to Say"],
            label: "Do you smoke?",
            hideable: true,
        },
        {
            name: "weed",
            type: "mc",
            options: ["Yes", "Sometimes", "No", "Prefer Not to Say"],
            label: "Do you do weed?",
            hideable: true,
        },
        {
            name: "drugs",
            type: "mc",
            options: ["Yes", "Sometimes", "No", "Prefer Not to Say"],
            label: "Do you do drugs?",
            hideable: true,
        },
        {
            type: "prompt",
            name: "create_profile_prompt",
            label: "Profiles with personality lead to better convos. So you can delete us.",
            button: ["Create your Profile"],
        },
        {
            type: "profile_photo",
            name: "profile_photo",
            label: "Start with your best headshot",
            tip: "Brightly lit photos of just you work best here",
        },
        {
            type: "edit_photo",
            name: "edit_photo",
            label: "Pair a prompt with a photo or video",
            tip: [
                "Brightly lit photos of just you work best here",
                "Photos with prompts get more likes and spark more conversation",
            ],
        },
        {
            type: "photos",
            name: "photos",
            requiredCount: 6,
            draggable: true,
            label: "show the different sides of yourself",
            tip: ["photos that include hobbies and activites are great conversation starters"],
            skippable: true,
            additional: {
                type: "confirm",
                label:
                    "Sure you want to skip? Skipping means you won't be able to send or receive likes, message people or match",
                button: ["Finish now", "yes, I want to skip"],
            },
        },
        {
            type: "short_answers",
            name: "short_answers",
            requiredCount: 3,
            draggable: true,
            label: "Write your profile answers",
            skippable: true,
            additional: {
                type: "confirm",
                label:
                    "Sure you want to skip? Skipping means you won't be able to send or receive likes, message people or match",
                button: ["Finish now", "yes, I want to skip"],
            },
        },
        {
            type: "prompt",
            name: "end_prompt",
            label: "Thoughtful liking leads to better dates. So you can delete us.",
            button: ["Start sending likes"],
        },
    ],
}
