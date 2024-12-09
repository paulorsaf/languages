import { Verb } from "../types/verb.type";

export const verbsMock: Verb[] = [
    {
        id: "1",
        language: "rs",
        root: "хотеть",
        translation: "To want",
        forms: [
            {
                description: "Present Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "хочу́" },
                    { pronoum: "ты", conjugation: "хо́чешь" },
                    { pronoum: "он/она/оно", conjugation: "хо́чет" },
                    { pronoum: "мы", conjugation: "хоти́м" },
                    { pronoum: "вы", conjugation: "хоти́те" },
                    { pronoum: "они", conjugation: "хотя́т" },
                ]
            },
            {
                description: "Past Tense",
                conjugations: [
                    { pronoum: "я/он", conjugation: "хоте́л" },
                    { pronoum: "я/она", conjugation: "хоте́ла" },
                    { pronoum: "оно", conjugation: "хоте́ло" },
                    { pronoum: "мы/вы/они", conjugation: "хоте́ло" },
                ]
            },
            {
                description: "Future Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "буду хоте́ть" },
                    { pronoum: "ты", conjugation: "будешь хоте́ть" },
                    { pronoum: "он/она/оно", conjugation: "будет хоте́ть" },
                    { pronoum: "мы", conjugation: "будем хоте́ть" },
                    { pronoum: "вы", conjugation: "будете хоте́ть" },
                    { pronoum: "они", conjugation: "будут хоте́ть" },
                ]
            }
        ]
    },
    {
        id: "2",
        language: "rs",
        root: "пить",
        translation: "To drink",
        forms: [
            {
                description: "Present Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "пью́" },
                    { pronoum: "ты", conjugation: "пьёшь" },
                    { pronoum: "он/она/оно", conjugation: "пьёт" },
                    { pronoum: "мы", conjugation: "пьём" },
                    { pronoum: "вы", conjugation: "пьёте" },
                    { pronoum: "они", conjugation: "пью́т" },
                ]
            },
            {
                description: "Past Tense",
                conjugations: [
                    { pronoum: "я/он", conjugation: "пи́л" },
                    { pronoum: "я/она", conjugation: "пила́" },
                    { pronoum: "оно", conjugation: "пи́ло" },
                    { pronoum: "мы/вы/они", conjugation: "пи́ли" },
                ]
            },
            {
                description: "Future Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "буду пи́ть" },
                    { pronoum: "ты", conjugation: "будешь пи́ть" },
                    { pronoum: "он/она/оно", conjugation: "будет пи́ть" },
                    { pronoum: "мы", conjugation: "будем пи́ть" },
                    { pronoum: "вы", conjugation: "будете пи́ть" },
                    { pronoum: "они", conjugation: "будут пи́ть" },
                ]
            }
        ]
    },
    {
        id: "3",
        language: "rs",
        root: "спать",
        translation: "To sleep",
        forms: [
            {
                description: "Present Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "сплю́" },
                    { pronoum: "ты", conjugation: "спи́шь" },
                    { pronoum: "он/она/оно", conjugation: "спи́т" },
                    { pronoum: "мы", conjugation: "спи́м" },
                    { pronoum: "вы", conjugation: "спи́те" },
                    { pronoum: "они", conjugation: "спя́т" },
                ]
            },
            {
                description: "Past Tense",
                conjugations: [
                    { pronoum: "я/он", conjugation: "спа́л" },
                    { pronoum: "я/она", conjugation: "спала́" },
                    { pronoum: "оно", conjugation: "спа́ло" },
                    { pronoum: "мы/вы/они", conjugation: "спа́ли" },
                ]
            },
            {
                description: "Future Tense",
                conjugations: [
                    { pronoum: "я", conjugation: "буду спа́ть" },
                    { pronoum: "ты", conjugation: "будешь спа́ть" },
                    { pronoum: "он/она/оно", conjugation: "будет спа́ть" },
                    { pronoum: "мы", conjugation: "будем спа́ть" },
                    { pronoum: "вы", conjugation: "будете спа́ть" },
                    { pronoum: "они", conjugation: "будут спа́ть" },
                ]
            }
        ]
    }
]