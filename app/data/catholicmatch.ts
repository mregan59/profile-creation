export default {
    name: "CatholicMatch",
    fields: [
        {
            name: "first_name",
            type: "input",
            label: "What is your first name",
        },
        {
            name: "last_name",
            type: "input",
            label: "What is your last name",
        },
        {
            name: "location",
            type: "input",
            label: "What is your location?",
        },
        {
            name: "gender",
            type: "mc",
            options: ["man", "woman"],
            label: "What's your gender",
        },
        {
            type: "prompt",
            name: "welcome",
            label: "Welcome to CatholicMatch, Name",
            sublabel:
                "In order to find the best Catholic singles for you...lelt's set up your profile!",
            button: ["Get Started"],
        },
        {
            name: "marital_status",
            type: "mc",
            label: "What is your marital status?",
            options: ["Never Married", "Widowed", "Divorced", "Anulled"],
        },
        {
            name: "birthday",
            type: "datepicker",
            label: "What's your date of birth",
        },
        {
            name: "diocese",
            type: "mc",
            label: "What Diocese are you in?",
            options: ["Diocese"],
        },
        {
            name: "referrer",
            type: "mc",
            label: "How did you hear about us?",
            options: [
                "Search Engine (Google/Yahoo/Bing/Other)",
                "Ave Maria Radio",
                "Relevant Radio",
                "In my church bulletin",
                "From a friend/family member",
                "At a conference",
            ],
        },
        {
            type: "profile_photo",
            name: "profile_photo",
            skippable: true,
            label: "Add a profile photo!",
            tip: ["Profiles with photos do 10x better than those that don't have any photos"],
        },
        {
            name: "height",
            type: "spinner",
            section: "Appearance",
            label_view: "Height",
            label: "How tall are you?",
            // options: [
            //     {
            //         name: "Under 122 cm",
            //         title: "Under 122 cm",
            //     },
            //     {
            //         name: "125 cm",
            //         title: "125 cm",
            //     },
            //     {
            //         name: "127 cm",
            //         title: "127 cm",
            //     },
            //     {
            //         name: "130 cm",
            //         title: "130 cm",
            //     },
            //     {
            //         name: "132 cm",
            //         title: "132 cm",
            //     },
            //     {
            //         name: "135 cm",
            //         title: "135 cm",
            //     },
            //     {
            //         name: "137 cm",
            //         title: "137 cm",
            //     },
            //     {
            //         name: "140 cm",
            //         title: "140 cm",
            //     },
            //     {
            //         name: "142 cm",
            //         title: "142 cm",
            //     },
            //     {
            //         name: "145 cm",
            //         title: "145 cm",
            //     },
            //     {
            //         name: "147 cm",
            //         title: "147 cm",
            //     },
            //     {
            //         name: "150 cm",
            //         title: "150 cm",
            //     },
            //     {
            //         name: "152 cm",
            //         title: "152 cm",
            //     },
            //     {
            //         name: "155 cm",
            //         title: "155 cm",
            //     },
            //     {
            //         name: "158 cm",
            //         title: "158 cm",
            //     },
            //     {
            //         name: "160 cm",
            //         title: "160 cm",
            //     },
            //     {
            //         name: "163 cm",
            //         title: "163 cm",
            //     },
            //     {
            //         name: "165 cm",
            //         title: "165 cm",
            //     },
            //     {
            //         name: "168 cm",
            //         title: "168 cm",
            //     },
            //     {
            //         name: "170 cm",
            //         title: "170 cm",
            //     },
            //     {
            //         name: "173 cm",
            //         title: "173 cm",
            //     },
            //     {
            //         name: "175 cm",
            //         title: "175 cm",
            //     },
            //     {
            //         name: "178 cm",
            //         title: "178 cm",
            //     },
            //     {
            //         name: "180 cm",
            //         title: "180 cm",
            //     },
            //     {
            //         name: "183 cm",
            //         title: "183 cm",
            //     },
            //     {
            //         name: "185 cm",
            //         title: "185 cm",
            //     },
            //     {
            //         name: "188 cm",
            //         title: "188 cm",
            //     },
            //     {
            //         name: "191 cm",
            //         title: "191 cm",
            //     },
            //     {
            //         name: "193 cm",
            //         title: "193 cm",
            //     },
            //     {
            //         name: "196 cm",
            //         title: "196 cm",
            //     },
            //     {
            //         name: "198 cm",
            //         title: "198 cm",
            //     },
            //     {
            //         name: "201 cm",
            //         title: "201 cm",
            //     },
            //     {
            //         name: "203 cm",
            //         title: "203 cm",
            //     },
            //     {
            //         name: "206 cm",
            //         title: "206 cm",
            //     },
            //     {
            //         name: "208 cm",
            //         title: "208 cm",
            //     },
            //     {
            //         name: "211 cm",
            //         title: "211 cm",
            //     },
            //     {
            //         name: "Over 214 cm",
            //         title: "Over 214 cm",
            //     },
            // ],
            //  answer: "127 cm",
            input_type: "slider",
            // title: "How tall are you?",
        },
        {
            name: "eye_color",
            type: "mc",
            section: "Appearance",
            label_view: "Eye Color",
            label: "What color are your eyes?",
            options: [
                {
                    name: "Blue",
                    title: "Blue",
                },
                {
                    name: "Brown",
                    title: "Brown",
                },
                {
                    name: "Green",
                    title: "Green",
                },
                {
                    name: "Hazel",
                    title: "Hazel",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "%s Eyes",
            map: {
                Other: "Eyes (Other)",
            },
            answer: "Blue",
            input_type: "radio",
            title: "What color are your eyes?",
        },
        {
            name: "hair_color",
            type: "mc",
            section: "Appearance",
            label_view: "Hair Color",
            label: "What color is your hair?",
            options: [
                {
                    name: "Brown",
                    title: "Brown",
                },
                {
                    name: "Blonde",
                    title: "Blonde",
                },
                {
                    name: "Black",
                    title: "Black",
                },
                {
                    name: "Red",
                    title: "Red",
                },
                {
                    name: "White",
                    title: "White",
                },
                {
                    name: "Gray",
                    title: "Gray",
                },
                {
                    name: "Bald",
                    title: "Bald",
                },
                {
                    name: "Salt-n-Pepper",
                    title: "Salt-n-Pepper",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "%s Hair",
            map: {
                Other: "Hair (Other)",
                Bald: "No Hair",
            },
            answer: "Red",
            input_type: "radio",
            title: "What color is your hair?",
        },
        {
            name: "body_type",
            type: "mc",
            section: "Appearance",
            label_view: "Body Type",
            label: "How would you describe your body type?",
            options: [
                {
                    name: "Slender",
                    title: "Slender",
                },
                {
                    name: "Athletic",
                    title: "Athletic",
                },
                {
                    name: "Average",
                    title: "Average",
                },
                {
                    name: "A few extra pounds",
                    title: "A few extra pounds",
                },
                {
                    name: "Heavyset",
                    title: "Heavyset",
                },
            ],
            map: {
                Average: "Average Build",
            },
            answer: "Slender",
            input_type: "radio",
            title: "How would you describe your body type?",
        },
        {
            name: "race",
            type: "mc",
            section: "Appearance",
            label_view: "Race",
            label: "What is your race?",
            options: [
                {
                    name: "Asian",
                    title: "Asian",
                },
                {
                    name: "Black / African",
                    title: "Black / African",
                },
                {
                    name: "East Indian",
                    title: "East Indian",
                },
                {
                    name: "Hispanic / Latino",
                    title: "Hispanic / Latino",
                },
                {
                    name: "Middle Eastern",
                    title: "Middle Eastern",
                },
                {
                    name: "Native American",
                    title: "Native American",
                },
                {
                    name: "Pacific Islander",
                    title: "Pacific Islander",
                },
                {
                    name: "White / Caucasian",
                    title: "White / Caucasian",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "%s",
            map: {
                Other: "Race (Other)",
            },
            answer: "White / Caucasian",
            input_type: "radio",
            title: "What is your race?",
        },
        {
            name: "tattoos",
            type: "mc",
            section: "Appearance",
            label_view: "Tattoos",
            label: "Do you have any tattoos?",
            options: [
                {
                    name: "No, never",
                    title: "No, never",
                },
                {
                    name: "No, not anymore",
                    title: "No, not anymore",
                },
                {
                    name: "No, not yet",
                    title: "No, not yet",
                },
                {
                    name: "Yes, 1 - 2",
                    title: "Yes, 1 - 2",
                },
                {
                    name: "Yes, 3 - 5",
                    title: "Yes, 3 - 5",
                },
                {
                    name: "Yes, 5+",
                    title: "Yes, 5+",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            map: {
                "No, never": "Never had tattoos",
                "No, not anymore": "No longer have tattoos",
                "No, not yet": "No tattoos yet",
                "Yes, 1 - 2": "1 or 2 tattoos",
                "Yes, 3 - 5": "3-5 tattoos",
                "Yes, 5+": "More than 5 tattoos",
                "Get to know me first": "",
            },
            answer: "No, never",
            input_type: "radio",
            title: "Do you have any tattoos?",
        },
        {
            name: "piercings",
            type: "mc",
            section: "Appearance",
            label_view: "Piercings",
            label: "Do you have any piercings?",
            options: [
                {
                    name: "No, never",
                    title: "No, never",
                },
                {
                    name: "No, not anymore",
                    title: "No, not anymore",
                },
                {
                    name: "No, not yet",
                    title: "No, not yet",
                },
                {
                    name: "Yes, just my ears",
                    title: "Yes, just my ears",
                },
                {
                    name: "Yes, other than ears",
                    title: "Yes, other than ears",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            map: {
                "No, never": "No piercings",
                "No, not anymore": "Used to have piercings",
                "No, not yet": "No piercings - yet",
                "Yes, just my ears": "Pierced ears",
                "Yes, other than ears": "Piercings",
                "Get to know me first": "",
            },
            answer: "Yes, just my ears",
            input_type: "radio",
            title: "Do you have any piercings?",
        },
        {
            name: "daily_rhythm",
            type: "mc",
            section: "Lifestyle",
            label_view: "Early Bird or Night Owl",
            label: "Are you an early bird or a night owl?",
            options: [
                {
                    name: "Early bird",
                    title: "Early bird",
                },
                {
                    name: "Night owl",
                    title: "Night owl",
                },
                {
                    name: "Both",
                    title: "Both",
                },
                {
                    name: "Neither",
                    title: "Neither",
                },
            ],
            template: "%s",
            map: {
                Both: "Both night owl and early bird",
                Neither: "Not really an early bird or night owl",
            },
            answer: "Night owl",
            input_type: "radio",
            title: "Are you an early bird or a night owl?",
        },
        {
            name: "exercise",
            type: "mc",
            section: "Lifestyle",
            label_view: "Exercise",
            label: "Do you exercise?",
            options: [
                {
                    name: "No, not very often",
                    title: "No, not very often",
                },
                {
                    name: "No, but I'm active",
                    title: "No, but I'm active",
                },
                {
                    name: "1 - 2 times per week",
                    title: "1 - 2 times per week",
                },
                {
                    name: "3 - 4 times per week",
                    title: "3 - 4 times per week",
                },
                {
                    name: "5+ times per week",
                    title: "5+ times per week",
                },
            ],
            template: "Exercise %s",
            map: {
                "No, not very often": "Don't exercise very often",
                "No, but I'm active": "Don't regularly exercise, but active",
            },
            answer: "3 - 4 times per week",
            input_type: "radio",
            title: "Do you exercise?",
        },
        {
            name: "diet",
            type: "mc",
            section: "Lifestyle",
            label_view: "Diet",
            label: "How would you describe your diet?",
            options: [
                {
                    name: "A bit of everything",
                    title: "A bit of everything",
                },
                {
                    name: "Meat and potatoes",
                    title: "Meat and potatoes",
                },
                {
                    name: "Natural / organic",
                    title: "Natural / organic",
                },
                {
                    name: "Vegetarian / Vegan",
                    title: "Vegetarian / Vegan",
                },
                {
                    name: "Low carb / meat",
                    title: "Low carb / meat",
                },
                {
                    name: "Fast food / microwave",
                    title: "Fast food / microwave",
                },
                {
                    name: "A lot of everything",
                    title: "A lot of everything",
                },
            ],
            template: "Diet: %s",
            answer: "A bit of everything",
            input_type: "radio",
            title: "How would you describe your diet?",
        },
        {
            name: "eat_dinner_out",
            type: "mc",
            section: "Lifestyle",
            label_view: "Eating Out",
            label: "How often do you eat dinner out?",
            options: [
                {
                    name: "Not very often",
                    title: "Not very often",
                },
                {
                    name: "1-2 times per week",
                    title: "1-2 times per week",
                },
                {
                    name: "3-4 times per week",
                    title: "3-4 times per week",
                },
                {
                    name: "5 or more times per week",
                    title: "5 or more times per week",
                },
            ],
            template: "Eat out %s",
            map: {
                "Not very often": "Don't eat out very often",
            },
            answer: "1-2 times per week",
            input_type: "radio",
            title: "How often do you eat dinner out?",
        },
        {
            name: "drinking",
            type: "mc",
            section: "Lifestyle",
            label_view: "Drinking Habits",
            label: "Do you drink alcohol?",
            options: [
                {
                    name: "I don't",
                    title: "I don't",
                },
                {
                    name: "Rarely",
                    title: "Rarely",
                },
                {
                    name: "Socially",
                    title: "Socially",
                },
                {
                    name: "Regularly",
                    title: "Regularly",
                },
                {
                    name: "Probably a bit too much",
                    title: "Probably a bit too much",
                },
            ],
            template: "I drink %s",
            map: {
                "I don't": "No Alcohol",
            },
            answer: "Socially",
            input_type: "radio",
            title: "Do you drink alcohol?",
        },
        {
            name: "smoking",
            type: "mc",
            section: "Lifestyle",
            label_view: "Smoking Habits",
            label: "Do you smoke or use tobacco?",
            options: [
                {
                    name: "I don't",
                    title: "I don't",
                },
                {
                    name: "Occasionally",
                    title: "Occasionally",
                },
                {
                    name: "Regularly",
                    title: "Regularly",
                },
            ],
            map: {
                "I don't": "Non-smoker",
                Occasionally: "Occasional smoker",
                Regularly: "Regular smoker",
            },
            answer: "I don't",
            input_type: "radio",
            title: "Do you smoke or use tobacco?",
        },
        {
            name: "tv_habits",
            type: "mc",
            section: "Lifestyle",
            label_view: "Television Habits",
            label: "How much television do you watch?",
            options: [
                {
                    name: "Never / no TV",
                    title: "Never / no TV",
                },
                {
                    name: "A few hours a week",
                    title: "A few hours a week",
                },
                {
                    name: "0 - 1 hours a day",
                    title: "0 - 1 hours a day",
                },
                {
                    name: "1 - 2  hours a day",
                    title: "1 - 2  hours a day",
                },
                {
                    name: "2 - 4  hours a day",
                    title: "2 - 4  hours a day",
                },
                {
                    name: "TV is usually on",
                    title: "TV is usually on",
                },
            ],
            template: "%s of TV",
            map: {
                "Never / no TV": "Not a TV watcher",
                "TV is usually on": "%s",
            },
            answer: "A few hours a week",
            input_type: "radio",
            title: "How much television do you watch?",
        },
        {
            name: "long_distance",
            type: "mc",
            section: "Lifestyle",
            label_view: "Long-distance Relationship",
            label: "Feelings about long distance relationships?",
            options: [
                {
                    name: "I'm open to travel anywhere",
                    title: "I'm open to travel anywhere",
                },
                {
                    name: "Only within driving distance",
                    title: "Only within driving distance",
                },
                {
                    name: "Maybe, for the right person",
                    title: "Maybe, for the right person",
                },
                {
                    name: "Maybe, but not my style",
                    title: "Maybe, but not my style",
                },
                {
                    name: "No, its just too difficult",
                    title: "No, its just too difficult",
                },
            ],
            map: {
                "I'm open to travel anywhere": "Open to travel anywhere for a relationship",
                "Only within driving distance": "Open to a relationship within driving distance",
                "Maybe, for the right person":
                    "A long distance relationship could work with the right person",
                "Maybe, but not my style": "A long distance relationship is not really my style",
                "No, its just too difficult": "Not open to a long distance relationship",
            },
            answer: "Maybe, for the right person",
            input_type: "radio",
            title: "Feelings about long distance relationships?",
        },
        {
            name: "relocating",
            type: "mc",
            section: "Lifestyle",
            label_view: "Relocating",
            label: "Would you consider relocating?",
            options: [
                {
                    name: "I'm open to live anywhere",
                    title: "I'm open to live anywhere",
                },
                {
                    name: "Near family (mine)",
                    title: "Near family (mine)",
                },
                {
                    name: "Near family (either)",
                    title: "Near family (either)",
                },
                {
                    name: "Prefer my current location/area",
                    title: "Prefer my current location/area",
                },
                {
                    name: "Prefer a specific location/area",
                    title: "Prefer a specific location/area",
                },
                {
                    name: "I can't relocate",
                    title: "I can't relocate",
                },
            ],
            template: "Prefer to live %s",
            map: {
                "I'm open to live anywhere": "%s",
                "Prefer my current location/area": "%s",
                "Prefer a specific location/area": "%s",
                "I can't relocate": "%s",
            },
            answer: "I'm open to live anywhere",
            input_type: "radio",
            title: "Would you consider relocating?",
        },
        {
            name: "children",
            type: "mc",
            section: "Background",
            label_view: "Have Children",
            label: "Do you currently have any children?",
            options: [
                {
                    name: "No",
                    title: "No",
                },
                {
                    name: "Yes - at home full-time",
                    title: "Yes - at home full-time",
                },
                {
                    name: "Yes - at home part-time",
                    title: "Yes - at home part-time",
                },
                {
                    name: "Yes - but not at home",
                    title: "Yes - but not at home",
                },
            ],
            map: {
                No: "No children",
                "Yes - at home full-time": "Children at home full-time",
                "Yes - at home part-time": "Children at home part-time",
                "Yes - but not at home": "Children, no longer at home",
            },
            answer: "No",
            input_type: "radio",
            title: "Do you currently have any children?",
        },
        {
            name: "parents_marital_status",
            type: "mc",
            section: "Background",
            label_view: "Raised By",
            label: "Growing up, who was responsible for you?",
            options: [
                {
                    name: "Dad and mom",
                    title: "Dad and mom",
                },
                {
                    name: "Mom and step dad",
                    title: "Mom and step dad",
                },
                {
                    name: "Dad and step mom",
                    title: "Dad and step mom",
                },
                {
                    name: "Mostly my mom",
                    title: "Mostly my mom",
                },
                {
                    name: "Mostly my dad",
                    title: "Mostly my dad",
                },
                {
                    name: "Grandparents / relatives",
                    title: "Grandparents / relatives",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            template: "%s raised me",
            map: {
                "Get to know me first": "",
            },
            answer: "Dad and mom",
            input_type: "radio",
            title: "Growing up, who was responsible for you?",
        },
        {
            name: "family_ties",
            type: "mc",
            section: "Background",
            label_view: "Family Ties",
            label: "How close are you with your family?",
            options: [
                {
                    name: "Often talk and do things together",
                    title: "Often talk and do things together",
                },
                {
                    name: "Often talk, but live far apart",
                    title: "Often talk, but live far apart",
                },
                {
                    name: "Talk and visit occasionally",
                    title: "Talk and visit occasionally",
                },
                {
                    name: "Don't have much family",
                    title: "Don't have much family",
                },
                {
                    name: "Distant, we rarely talk or visit",
                    title: "Distant, we rarely talk or visit",
                },
                {
                    name: "We don't see eye to eye",
                    title: "We don't see eye to eye",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "%s with family",
            map: {
                "Don't have much family": "Don't have much family",
                "Distant, we rarely talk or visit": "Rarely talk or visit with family",
                "We don't see eye to eye": "Don't see eye to eye with family",
                "Get to know me first": "",
                Other: "Family Ties (Other)",
            },
            answer: "Often talk and do things together",
            input_type: "radio",
            title: "How close are you with your family?",
        },
        {
            name: "birth_order",
            type: "mc",
            section: "Background",
            label_view: "Birth Order",
            label: "Where do you fall in your family?",
            options: [
                {
                    name: "Oldest",
                    title: "Oldest",
                },
                {
                    name: "In the middle",
                    title: "In the middle",
                },
                {
                    name: "Youngest",
                    title: "Youngest",
                },
                {
                    name: "Only child",
                    title: "Only child",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            map: {
                Oldest: "The oldest child",
                "In the middle": "A middle child",
                Youngest: "The youngest child",
                "Only child": "An only child",
                Other: "Birth Order (Other)",
            },
            answer: "In the middle",
            input_type: "radio",
            title: "Where do you fall in your family?",
        },
        {
            name: "rural_urban",
            type: "mc",
            section: "Background",
            label_view: "Grew Up",
            label: "Did you grow up more rural or urban?",
            options: [
                {
                    name: "City / Urban",
                    title: "City / Urban",
                },
                {
                    name: "City / Suburbs",
                    title: "City / Suburbs",
                },
                {
                    name: "Country / Farm",
                    title: "Country / Farm",
                },
                {
                    name: "Country / Rural",
                    title: "Country / Rural",
                },
                {
                    name: "Small Town",
                    title: "Small Town",
                },
                {
                    name: "Wilderness",
                    title: "Wilderness",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "Grew up %s",
            map: {
                Other: "Grew Up (Other)",
            },
            answer: "Small Town",
            input_type: "radio",
            title: "Did you grow up more rural or urban?",
        },
        {
            name: "children_ideal",
            type: "mc",
            section: "Background",
            label_view: "Ideal # of Kids",
            label: "What would your ideal number of kids be?",
            options: [
                {
                    name: "1-2",
                    title: "1-2",
                },
                {
                    name: "3-5",
                    title: "3-5",
                },
                {
                    name: "5+",
                    title: "5+",
                },
                {
                    name: "Don't have an ideal",
                    title: "Don't have an ideal",
                },
            ],
            template: "Ideally want %s children",
            map: {
                "Don't have an ideal": "Don't have an ideal # of kids",
            },
            answer: "Don't have an ideal",
            input_type: "radio",
            title: "What would your ideal number of kids be?",
        },
        {
            name: "political_views",
            type: "mc",
            section: "Background",
            label_view: "Political Views",
            label: "Describe your political views:",
            options: [
                {
                    name: "Very Conservative",
                    title: "Very Conservative",
                },
                {
                    name: "Conservative",
                    title: "Conservative",
                },
                {
                    name: "Moderate",
                    title: "Moderate",
                },
                {
                    name: "Liberal",
                    title: "Liberal",
                },
                {
                    name: "Very Liberal",
                    title: "Very Liberal",
                },
                {
                    name: "Other",
                    title: "Other",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            template: "Politically %s",
            map: {
                Other: "Political Views (Other)",
                "Get to know me first": "",
            },
            answer: "Conservative",
            input_type: "radio",
            title: "Describe your political views:",
        },
        {
            name: "education",
            type: "mc",
            section: "Background",
            label_view: "Education",
            label: "What is your education?",
            options: [
                {
                    name: "High school",
                    title: "High school",
                },
                {
                    name: "Some college",
                    title: "Some college",
                },
                {
                    name: "Trade school",
                    title: "Trade school",
                },
                {
                    name: "Associates degree",
                    title: "Associates degree",
                },
                {
                    name: "Bachelors degree",
                    title: "Bachelors degree",
                },
                {
                    name: "Graduate degree",
                    title: "Graduate degree",
                },
                {
                    name: "Doctoral degree",
                    title: "Doctoral degree",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "Completed %s",
            map: {
                Other: "Education (Other)",
            },
            answer: "Graduate degree",
            input_type: "radio",
            title: "What is your education?",
        },
        {
            name: "primary_schooling",
            type: "mc",
            section: "Background",
            label_view: "Primary Schooling",
            label: "Primary schooling growing up?",
            options: [
                {
                    name: "Public School",
                    title: "Public School",
                },
                {
                    name: "Parochial School",
                    title: "Parochial School",
                },
                {
                    name: "Christian School",
                    title: "Christian School",
                },
                {
                    name: "Homeschool",
                    title: "Homeschool",
                },
                {
                    name: "Private School",
                    title: "Private School",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "Attended %s",
            map: {
                Other: "Schooling (Other)",
                Homeschool: "Homeschooled",
            },
            answer: "Homeschool",
            input_type: "radio",
            title: "Primary schooling growing up?",
        },
        {
            name: "occupation",
            type: "mc",
            section: "Background",
            label_view: "Occupation / Specialty",
            label: "What do you specialize in?",
            options: [
                {
                    name: "Artistic / Musical / Writer",
                    title: "Artistic / Musical / Writer",
                },
                {
                    name: "Banking / Financial Services / Real Estate",
                    title: "Banking / Financial Services / Real Estate",
                },
                {
                    name: "Clerical / Administrative / Secretarial",
                    title: "Clerical / Administrative / Secretarial",
                },
                {
                    name: "Computers / Software / Hardware",
                    title: "Computers / Software / Hardware",
                },
                {
                    name: "Construction / Craftsman",
                    title: "Construction / Craftsman",
                },
                {
                    name: "Education / Teacher / Academic Research",
                    title: "Education / Teacher / Academic Research",
                },
                {
                    name: "Entertainment / News / Media",
                    title: "Entertainment / News / Media",
                },
                {
                    name: "Executive / Management",
                    title: "Executive / Management",
                },
                {
                    name: "Food Service",
                    title: "Food Service",
                },
                {
                    name: "Hospitality / Travel",
                    title: "Hospitality / Travel",
                },
                {
                    name: "Legal Services",
                    title: "Legal Services",
                },
                {
                    name: "Manufacturing / Distributions",
                    title: "Manufacturing / Distributions",
                },
                {
                    name: "Medical / Health Services",
                    title: "Medical / Health Services",
                },
                {
                    name: "Politics / Government / Military",
                    title: "Politics / Government / Military",
                },
                {
                    name: "Sales / Marketing",
                    title: "Sales / Marketing",
                },
                {
                    name: "Self Employed",
                    title: "Self Employed",
                },
                {
                    name: "Student / Graduate Student",
                    title: "Student / Graduate Student",
                },
                {
                    name: "Technical / Science / Engineering",
                    title: "Technical / Science / Engineering",
                },
                {
                    name: "Transportation",
                    title: "Transportation",
                },
                {
                    name: "Other",
                    title: "Other",
                },
            ],
            template: "%s",
            map: {
                Other: "Occupation (Other)",
            },
            answer: "Computers / Software / Hardware",
            input_type: "radio",
            title: "What do you specialize in?",
        },
        {
            name: "employment_status",
            type: "mc",
            section: "Background",
            label_view: "Employment Status",
            label: "What is your current employment status?",
            options: [
                {
                    name: "Full-time",
                    title: "Full-time",
                },
                {
                    name: "Part-time",
                    title: "Part-time",
                },
                {
                    name: "Self-Employed",
                    title: "Self-Employed",
                },
                {
                    name: "Student",
                    title: "Student",
                },
                {
                    name: "Retired",
                    title: "Retired",
                },
                {
                    name: "Homemaker",
                    title: "Homemaker",
                },
                {
                    name: "Unemployed",
                    title: "Unemployed",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            template: "%s",
            map: {
                "Full-time": "Employed %s",
                "Part-time": "Employed %s",
                "Get to know me first": "",
            },
            answer: "Full-time",
            input_type: "radio",
            title: "What is your current employment status?",
        },
        {
            name: "attendance",
            type: "mc",
            section: "Faith",
            label_view: "Mass Attendance",
            label: "How often do you attend Mass?",
            options: [
                {
                    name: "Daily",
                    title: "Daily",
                },
                {
                    name: "Weekly",
                    title: "Weekly",
                },
                {
                    name: "Monthly",
                    title: "Monthly",
                },
                {
                    name: "Rarely",
                    title: "Rarely",
                },
                {
                    name: "Never",
                    title: "Never",
                },
            ],
            template: "Attend Mass %s",
            map: {
                Rarely: "I rarely attend Mass",
                Never: "I don't attend Mass",
            },
            answer: "Weekly",
            input_type: "radio",
            title: "How often do you attend Mass?",
        },
        {
            name: "vocation_flag",
            type: "mc",
            section: "Faith",
            label_view: "Considering Religious Vocation",
            label: "Considering a religious vocation (priest, nun)?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            map: {
                Yes: "Considering a Vocation",
                No: "Not Considering a Vocation",
            },
            answer: "No",
            input_type: "radio",
            title: "Considering a religious vocation (priest, nun)?",
        },
        {
            name: "convert",
            type: "mc",
            section: "Faith",
            label_view: "Convert",
            label: "Are you a convert?",
            options: [
                {
                    name: "No",
                    title: "No",
                },
                {
                    name: "Yes, Protestant",
                    title: "Yes, Protestant",
                },
                {
                    name: "Yes, Atheism",
                    title: "Yes, Atheism",
                },
                {
                    name: "Yes, Judaism",
                    title: "Yes, Judaism",
                },
                {
                    name: "Yes, Islam",
                    title: "Yes, Islam",
                },
                {
                    name: "Yes,  Hinduism",
                    title: "Yes,  Hinduism",
                },
                {
                    name: "Yes, Buddhism",
                    title: "Yes, Buddhism",
                },
                {
                    name: "Yes, Other",
                    title: "Yes, Other",
                },
            ],
            map: {
                No: "Cradle Catholic",
                "Yes, Protestant": "Protestant Convert",
                "Yes, Atheism": "Atheist Convert",
                "Yes, Judaism": "Judaic Convert",
                "Yes, Islam": "Islamic Convert",
                "Yes, Hinduism": "Hindi Convert",
                "Yes, Buddhism": "Buddist Convert",
                "Yes, Other": "Convert (Other)",
            },
            answer: "No",
            input_type: "radio",
            title: "Are you a convert?",
        },
        {
            name: "liturgical_style",
            type: "mc",
            section: "Faith",
            label_view: "Liturgical Preference",
            label: "What liturgical style do you prefer?",
            options: [
                {
                    name: "No Preference",
                    title: "No Preference",
                },
                {
                    name: "Normal Sunday Mass",
                    title: "Normal Sunday Mass",
                },
                {
                    name: "Latin Novus Ordo",
                    title: "Latin Novus Ordo",
                },
                {
                    name: "Traditional Latin Mass",
                    title: "Traditional Latin Mass",
                },
                {
                    name: "Eastern Liturgies",
                    title: "Eastern Liturgies",
                },
                {
                    name: "Charismatic",
                    title: "Charismatic",
                },
                {
                    name: "Modern",
                    title: "Modern",
                },
                {
                    name: "Other / Not sure",
                    title: "Other / Not sure",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            template: "Prefer %s",
            map: {
                Charismatic: "Prefer %s Mass",
                Modern: "Prefer %s Mass",
                "No Preference": "No Mass style preference",
                "Other / Not sure": "Liturgical Preference (Other)",
                "Get to know me first": "",
            },
            answer: "Traditional Latin Mass",
            input_type: "radio",
            title: "What liturgical style do you prefer?",
        },
        {
            name: "faith_practice",
            type: "mc",
            section: "Faith",
            label_view: "Faith in Practice",
            label: "How much do you practice your Faith?",
            options: [
                {
                    name: "My Faith is part of my daily life",
                    title: "My Faith is part of my daily life",
                },
                {
                    name: "My Faith is important to me",
                    title: "My Faith is important to me",
                },
                {
                    name: "I turn to my Faith in difficult times",
                    title: "I turn to my Faith in difficult times",
                },
                {
                    name: "I consider myself Catholic, but not always practicing",
                    title: "I consider myself Catholic, but not always practicing",
                },
                {
                    name: "I was raised Catholic, not really practicing now",
                    title: "I was raised Catholic, not really practicing now",
                },
                {
                    name: "Get to know me first",
                    title: "Get to know me first",
                },
            ],
            template: "%s",
            map: ["Get to know me first"],
            answer: "My Faith is part of my daily life",
            input_type: "radio",
            title: "How much do you practice your Faith?",
        },
        {
            name: "eucharist",
            type: "mc",
            section: "Faith",
            label_view: "The Eucharist",
            label: "Do you accept Church's teaching on the Eucharist?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "The Holy Eucharist is the real Presence (Body, Blood, Soul and Divinity) of Jesus Christ and that when one receives Holy Communion, Jesus comes into the heart to dwell.",
            map: {
                Yes: "I accept the Church's teaching on the Eucharist",
                No: "I do not accept the Church's teaching on the Eucharist",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church's teaching on the Eucharist?",
        },
        {
            name: "contraception",
            type: "mc",
            section: "Faith",
            label_view: "Contraception",
            label: "Do you accept Church teaching on Contraception?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "God designed conjugal love between a husband and wife to be a total giving of one to the other, and open to the transmission of life. Since acts of contraception are not selfless, not a total giving of one to the other and are not open to the transmission of life, contraception is inherently wrong.",
            map: {
                Yes: "I accept the Church's teaching on Contraception",
                No: "I do not accept the Church's teaching on Contraception",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on Contraception?",
        },
        {
            name: "abortion",
            type: "mc",
            section: "Faith",
            label_view: "Sanctity of Life",
            label: "Do you accept Church teaching on the Sanctity of Life?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "All life is sacred and each life, from the moment of conception to the moment of natural death, has a right to life, and therefore abortion, or any other method of barring a new life from implanting in its mother's womb or terminating a pregnancy is inherently wrong.",
            map: {
                Yes: "I accept the Church's teaching on Contraception",
                No: "I do not accept the Church's teaching on Contraception",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on the Sanctity of Life?",
        },
        {
            name: "papal_infallibility",
            type: "mc",
            section: "Faith",
            label_view: "Papal Infallibility",
            label: "Do you accept Church teaching on Papal Infallibility?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "The Pope holds the keys of Saint Peter and Christ endowed the Church's shepherds with the charism of infallibility in matters of faith and morals. When the Church through its supreme Magisterium proposes a doctrine for belief as being divinely revealed, and as the teaching of Christ, the doctrine must be adhered to with the obedience of faith.",
            map: {
                Yes: "I accept the Church's teaching on Papal Infallibility",
                No: "I do not accept the Church's teaching on Papal Infallibility",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on Papal Infallibility?",
        },
        {
            name: "premarital_sex",
            type: "mc",
            section: "Faith",
            label_view: "Premarital Sex",
            label: "Do you accept Church teaching on Premarital Sex?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "God has exclusively given the gift of intercourse to a man and woman who have pledged their lives to one another in marriage as a way of fully giving oneself to the other, being fully open to the transmission of life should God so choose to bestow this blessing.",
            map: {
                Yes: "I accept the Church's teaching on Premarital Sex",
                No: "I do not accept the Church's teaching on Premarital Sex",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on Premarital Sex?",
        },
        {
            name: "immaculate_conception",
            type: "mc",
            section: "Faith",
            label_view: "The Immaculate Conception",
            label: "Do you accept Church teaching on the Immaculate Conception?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "The most Blessed Virgin Mary was, from the first moment of her conception, by a singular grace and privilege of almighty God and by virtue of the merits of Jesus Christ, Savior of the human race, preserved immune from all stain of original sin.",
            map: {
                Yes: "I accept the Church's teaching on the Immaculate Conception",
                No: "I do not accept the Church's teaching on the Immaculate Conception",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on the Immaculate Conception?",
        },
        {
            name: "ordination_of_women",
            type: "mc",
            section: "Faith",
            label_view: "Holy Orders",
            label: "Do you accept Church teaching on Holy Orders?",
            options: [
                {
                    name: "Yes",
                    title: "Yes",
                },
                {
                    name: "No",
                    title: "No",
                },
            ],
            label_overrides: {
                Yes: "Yes, I accept this teaching",
                No: "No, I do not accept this teaching",
            },
            help_header: "Church Teaching",
            help_text:
                "Only a baptized man can validly receive sacred ordination because the Lord Jesus chose men to form the college of the twelve apostles, and the apostles did the same when they chose collaborators to succeed them in their ministry. Therefore, the Church recognizes herself to be bound by this choice made by the Lord himself, and for this reason the ordination of women is not possible.",
            map: {
                Yes: "I accept the Church's teaching on Holy Orders",
                No: "I do not accept the Church's teaching on Holy Orders",
            },
            answer: "Yes",
            input_type: "radio",
            title: "Do you accept Church teaching on Holy Orders?",
        },
        {
            name: "bio",
            type: "input",
            requiredCount: 150,
            label: "Introduce yourself",
        },
        {
            name: "interests",
            type: "mc",
            max: 40,
            label: "What are you favorite hobbies, interests, pastimes",
            skippable: true,
        },
    ],
}
