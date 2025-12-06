export const consonant_ending = {
    id: "consonant_ending",
    name: "輔音結尾 marut 陽",
    isGroup: true,
    stem: "t-stem Masculine",
    shortStem: "-t",
    gender: "陽",
    example: "marut (wind)",
    variants: ["consonant-ended", "k-ended", "ṭ-ended"],
    defaultVariant: "consonant-ended",
    hideGenderTabs: true,
    data: {
        "consonant-ended": {
            id: "marut",
            stem: "t-stem Masculine",
            shortStem: "-t",
            gender: "陽",
            example: "marut (wind)",
            base: "maru",
            note: "大多数以辅音收尾的名词只有一个语干。由 t 停顿的语干。",
            relatedTables: [
                { id: "apad", label: "āpad【陰】不幸" },
                { id: "jagat", label: "jagat【中】眾生" }
            ],
            rows: [
                ["marut", "marutau", "marutas"],
                ["marutam", "marutau", "marutas"],
                ["marutā", "marudbhyām", "marudbhis"],
                ["marute", "marudbhyām", "marudbhyas"],
                ["marutas", "marudbhyām", "marudbhyas"],
                ["marutas", "marutos", "marutām"],
                ["maruti", "marutos", "marutsu"],
                ["marut", "marutau", "marutas"]
            ]
        },
        "k-ended": {
            id: "vac",
            stem: "k-stem Feminine",
            shortStem: "-k",
            gender: "陰",
            example: "vāc (speech)",
            base: "vā",
            note: "以 k 停顿的语干。c 收尾的语干大部分以 k 停顿。",
            relatedTables: [
                { id: "ruj", label: "ruj【陰】疾病" },
                { id: "dis", label: "diś【陰】方位" }
            ],
            rows: [
                ["vāk", "vācau", "vācas"],
                ["vācam", "vācau", "vācas"],
                ["vācā", "vāgbhyām", "vāgbhis"],
                ["vāce", "vāgbhyām", "vāgbhyas"],
                ["vācas", "vāgbhyām", "vāgbhyas"],
                ["vācas", "vācos", "vācām"],
                ["vāci", "vācos", "vākṣu"],
                ["vāk", "vācau", "vācas"]
            ]
        },
        "ṭ-ended": {
            id: "dvis",
            stem: "ṭ-stem Masculine",
            shortStem: "-ṭ",
            gender: "陽",
            example: "dviṣ (enemy)",
            base: "dvi",
            note: "以 ṭ 停顿的语干。大多数 ś 和 ṣ 收尾的语干，一些以 h 收尾的语干。",
            relatedTables: [
                { id: "vis", label: "viś【陽】吠舍" },
                { id: "lih", label: "lih【形】舔" }
            ],
            rows: [
                ["dviṭ", "dviṣau", "dviṣas"],
                ["dviṣam", "dviṣau", "dviṣas"],
                ["dviṣā", "dviḍbhyām", "dviḍbhis"],
                ["dviṣe", "dviḍbhyām", "dviḍbhyas"],
                ["dviṣas", "dviḍbhyām", "dviḍbhyas"],
                ["dviṣas", "dviṣos", "dviṣām"],
                ["dviṣi", "dviṣos", "dviṭsu"],
                ["dviṭ", "dviṣau", "dviṣas"]
            ]
        }
    }
};
