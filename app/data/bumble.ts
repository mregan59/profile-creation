export default {
    name: "Bumble",
    fields: [
        {
            name: "phone",
            type: "input",
            label: "What's your number",
            sublabel: "We protect our community by making sure everyone Bumble is real",
            security: "We never share this with anyone and it won't be in your profile",
        },
        {
            name: "notifications",
            type: "mc",
            options: ["Allow Notifications", "Not Now"],
            label: "Allow notifications",
            sublabel: "We'll let your know when you get new matches and messages",
        },
        {
            name: "first_name",
            type: "input",
            label: "What's your first name",
            sublabel: "You won't be able to change this later",
            security: "This will be shown on your profile",
        },
        {
            type: "profile_photo",
            name: "photos",
            requiredCount: 2,
            draggable: false,
            label: "Add your first 2 photos",
            sublabel: "2 Photos are better than 2, it's dating science. you can these later",
            addFromFacebook: true,
            guidelines: true,
        },
        {
            type: "photos",
            name: "more_photos",
            requiredCount: 0,
            draggable: false,
            label: "Add more photos",
            sublabel:
                "Profiles with more than 3 photos are 43% more likely to get a match. You can change these later",
            skippable: true,
        },
        {
            name: "birthday",
            type: "datepicker",
            label: "when's your birthday?",
            security: "We only show your age to potential matches, not your birthday",
        },
        {
            name: "gender",
            type: "mc",
            options: ["man", "woman", "Non-binary", "More gender options"],
            label: "How do you identify",
            sublabel: "Everyone is welcome on Bumble",
        },
        {
            name: "mode",
            type: "mc",
            label: "Choose a mode to get started",
            options: ["Date, BFF, Bizz"],
            default: "date",
            sublabel:
                "Bumble's for making all kinds of connections! you'll be able to switch modes once you're all set up",
            security: "You'll only be shown to others in the same more",
        },
        {
            name: "email",
            type: "input",
            label: "What's your email address",
            sublabel: "We use this to recover your account if you can't log in",
            additional: {
                type: "confirm",
                label:
                    "Want to keep up to date with all things Bumble? You can always change your mind later by changing your email settings",
                button: ["yes", "Maybe Later"],
            },
            skippable: true,
        },
        {
            type: "prompt",
            name: "start_prompt",
            label: "You're here for a relationship!",
            sublabel:
                "Amazing. You're more likely to find someone really special if you take the time to build your profile",
            button: ["Build my profile"],
        },
        {
            type: "instagram",
            name: "instagram",
            label: "Connect your instagram",
            sublabel: "This will add your latest posts to your profile, but never your username.",
            button: ["Connect Instagram", "Not Now"],
        },
        // {
        //     name: "interests",
        //     type: "multi_mc",
        //     skippable: true,
        //     max: 5,
        //     label: "Your interests",
        //     sublabel:
        //         "Pick up to 5 things you love. It'll help you match with people who love them too",
        //     options: [
        //         {
        //             name: "Creativity",
        //             options: [
        //                 "Art",
        //                 "Crafts",
        //                 "Dancing",
        //                 "Design",
        //                 "Makeup",
        //                 "Making videos",
        //                 "Photography",
        //                 "Singling",
        //                 "Writing",
        //             ],
        //         },
        //         {
        //             name: "Sports",
        //             options: [
        //                 "Athletics",
        //                 "Badminton",
        //                 "Baseball",
        //                 "basketball",
        //                 "Bouldering",
        //                 "Bowling",
        //                 "Boxing",
        //                 "Crew",
        //                 "Show more",
        //             ],
        //         },
        //     ],
        // },
        {
            name: "height",
            type: "spinner",
            label: "What is your height?",
            skippable: true,
        },
        {
            name: "excercise",
            type: "mc",
            options: ["Active", "Sometimes", "Never"],
            label: "Do you workout?",
            skippable: true,
        },
        {
            name: "zodiac",
            type: "mc",
            options: ["Blah", "Blah", "Blah"],
            label: "What's your zodiac sign?",
            skippable: true,
        },
        {
            name: "education",
            type: "mc",
            options: [
                "High School",
                "Trade/tech school",
                "In College",
                "Undergraduate degree",
                "In grad school",
                "Graduate",
                "Postgraduate",
            ],
            label: "What's your education?",
            skippable: true,
        },
        {
            name: "drink",
            type: "mc",
            options: ["Socially", "Never", "Frequently", "Sober"],
            label: "Do you drink?",
            skippable: true,
        },
        {
            name: "smoke",
            type: "mc",
            options: ["Socially", "Never", "Regularly"],
            label: "Do you smoke?",
            skippable: true,
        },
        {
            name: "children",
            type: "mc",
            options: [
                "Want someday",
                "Don't want",
                "Have and want more",
                "Have and don't want more",
                "Not sure yet",
            ],
            label: "Would you like to have children?",
            skippable: true,
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
                "Jain",
                "Probably more options...",
            ],
            label: "Do you identify with a religion?",
            skippable: true,
        },
        {
            name: "politics",
            type: "mc",
            options: ["Liberal", "Moderate", "Conservative", "Apolitical"],
            label: "What are you political leanings?",
            skippable: true,
        },
        {
            name: "weed",
            type: "mc",
            options: ["Yes", "Sometimes", "No", "Prefer Not to Say"],
            label: "Do you drink?",
            hideable: true,
        },
        {
            name: "ethnicity",
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
            name: "jobtitle",
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
            name: "politics",
            type: "mc",
            options: ["Liberal", "Moderate", "Conservative", "Other", "Prefer Not to Say"],
            label: "What are your political beliefs?",
            hideable: true,
        },
        {
            name: "short_answers",
            type: "short_answers",
            label: "Add a profile prompt",
            sublabel:
                "Help potential matches understand more about your personality by finishing the sentence",
            skippable: true,
            options: [
                "It's meant to be if...,",
                "Favorite quality in a person",
                "A fun fact i'm obsessed with...",
                "Swipe right if...",
            ],
        },
        {
            name: "bio",
            type: "input",
            label: "Add more about you",
            sublabel:
                "other people looking for a relationship love to see a bio that shows who you are",
            skippable: true,
            guidelines: true,
        },
        {
            type: "prompt",
            name: "instruction_prompt1",
            label: "Women make the first move",
            sublabel: "When you match with someone, they have to send a message first",
            button: ["Got it"],
        },
        {
            type: "prompt",
            name: "instruction_prompt2",
            label: "24 hours to connect",
            sublabel: "Matches expire after 24 hours if first messages aren't exchanged",
            button: ["Got it"],
        },
        {
            type: "prompt",
            name: "end_prompt",
            label: "It's cool to be kind",
            sublabel: "rule stuff",
            button: ["I agree"],
            guidelines: true,
        },
    ],
}
