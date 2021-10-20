import { types, flow, getRoot, getParent, getSnapshot, getParentOfType } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { v4 as uuid } from "uuid"
import Reactotron from "reactotron-react-native"
import { uniq } from "lodash"
import profiles from "../../data/profiles.json"
import { RootStoreModel } from "../root-store/root-store"

const Photo = types.model({
    image_src_s1200: types.string,
    image_src_s400: types.string,
    image_src: types.string,
    caption: types.string,
})

const ShortAnswer = types.model({
    label: types.string,
    value: types.string,
})

export const Profile = types
    .model({
        id: types.identifier,
        photos: types.optional(types.array(Photo), []),
        props: types.map(types.string),
        json: types.maybe(types.frozen()),
    })
    .views((self) => ({
        getProp(name) {
            const root = getParentOfType(self, RootStoreModel)
            const exclude = root.appList.hiddenFields.includes(name)
            if (exclude) {
                return ""
            }
            return self.props.get(name)
        },
    }))
    .actions((self) => ({
        updateProfileJson: () => {
            const model = {
                photos: self.photos,
                church_teachings: {
                    "The Eucharist": self.getProp("eucharist"),
                    Contraception: self.getProp("contraception"),
                    "Sanctity of Life": self.getProp("immaculate_conception"),
                    "Papal Infallibility": self.getProp("papal_infallibility"),
                    "Premarital Sex": self.getProp("premarital_sex"),
                    "Holy Orders": self.getProp("ordination_of_women"),
                    "The Immaculate Conception": self.getProp("immaculate_conception"),
                },
                short_answers: [
                    {
                        label: "Introduction",
                        value: self.getProp("bio"),
                        key: "sa_about_me",
                    },
                ],
                primary_answers: {
                    age: self.getProp("age"),
                    location: self.getProp("location"),
                    marital_status: self.getProp("marital_status"),
                    height: self.getProp("height"),
                    drinking: self.getProp("drinking"),
                    smoking: self.getProp("smoking"),
                    race: self.getProp("race"),
                },
                secondary_answers: {
                    fidelity: self.getProp("fidelity"),
                    political_views: self.getProp("political_views"),
                    education: self.getProp("education"),
                    occupation: self.getProp("occupation"),
                    attendance: self.getProp("attendance"),
                    children: self.getProp("children"),
                },
                multiple_choice: {
                    Appearance: [
                        self.getProp("eye_color"),
                        self.getProp("hair_color"),
                        self.getProp("body_type"),
                        // self.getProp("race"),
                        self.getProp("tattoos"),
                        self.getProp("piercings"),
                    ],
                    Faith: [
                        self.getProp("vocation_flag"),
                        self.getProp("convert"),
                        self.getProp("liturgical_style"),
                        self.getProp("faith_practice"),
                    ],
                    Background: [
                        self.getProp("parents_marital_status"),
                        self.getProp("family_ties"),
                        self.getProp("birth_order"),
                        self.getProp("rural_urban"),
                        self.getProp("children_ideal"),
                        self.getProp("primary_schooling"),
                        self.getProp("employment_status"),
                    ],
                    Lifestyle: [
                        self.getProp("daily_rhythm"),
                        self.getProp("exercise"),
                        self.getProp("diet"),
                        self.getProp("eat_dinner_out"),
                        self.getProp("tv_habits"),
                        self.getProp("long_distance"),
                        self.getProp("relocating"),
                    ],
                },
                show_user: {
                    id: self.getProp("id"),
                    age: self.getProp("age"),
                    location: self.getProp("location"),
                    first_name: self.getProp("first_name"),
                    gender: self.getProp("gender"),
                    latitude: self.getProp("latitude"),
                    longitude: self.getProp("longitude"),
                    city: self.getProp("city"),
                    state: self.getProp("state"),
                    region: self.getProp("region"),
                    country: self.getProp("country"),
                    zip_code: self.getProp("zip_code"),
                    diocese: self.getProp("diocese"),
                    forum_posts: self.getProp("forum_posts"),
                },
            }
            self.json = model
        },
    }))

export const ProfileList = types
    .model({
        profiles: types.array(Profile),
    })
    .extend(withEnvironment)
    .views((self) => ({}))
    .actions((self) => ({
        saveProfiles: () => {
            profiles.forEach((profile) => {
                const { photos, ...profileProps } = profile
                const profileModel = Profile.create({
                    id: profile.id,
                    photos: photos || [],
                    props: { ...profileProps },
                })

                self.profiles.push(profileModel)
                profileModel.updateProfileJson()
            })
        },
    }))
