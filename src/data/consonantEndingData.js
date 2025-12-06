export const marut = {
    id: "marut",
    stem: "t-stem Masculine",
    shortStem: "-t",
    gender: "陽",
    example: "marut (wind)",
    base: "maru",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
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
};

export const vac = {
    id: "vac",
    stem: "k-stem Feminine",
    shortStem: "-k",
    gender: "陰",
    example: "vāc (speech)",
    base: "vā",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
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
};

export const dvis = {
    id: "dvis",
    stem: "ṭ-stem Masculine",
    shortStem: "-ṭ",
    gender: "陽",
    example: "dviṣ (enemy)",
    base: "dvi",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    note: "以 ṭ 停顿的语干。大多數 ś 和 ṣ 收尾的語干，一些以 h 收尾的語干。",
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
};

export const apad = {
    id: "apad",
    stem: "t-stem Feminine",
    shortStem: "-t",
    gender: "陰",
    example: "āpad (misfortune)",
    base: "āpa",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    relatedTables: [
        { id: "consonant_ending", variant: "-t 陽 -- marut", label: "marut【陽】風" },
        { id: "jagat", label: "jagat【中】眾生" }
    ],
    data: [
        ["āpat", "āpadau", "āpadas"],
        ["āpadam", "āpadau", "āpadas"],
        ["āpadā", "āpadbhyām", "āpadbhis"],
        ["āpade", "āpadbhyām", "āpadbhyas"],
        ["āpadas", "āpadbhyām", "āpadbhyas"],
        ["āpadas", "āpados", "āpadām"],
        ["āpadi", "āpados", "āpatsu"],
        ["āpat", "āpadau", "āpadas"]
    ]
};

export const jagat = {
    id: "jagat",
    stem: "t-stem Neuter",
    shortStem: "-t",
    gender: "中",
    example: "jagat (world)",
    base: "jaga",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    note: "jaganti*: 作為強語干，插入鼻音加強。",
    relatedTables: [
        { id: "consonant_ending", variant: "-t 陽 -- marut", label: "marut【陽】風" },
        { id: "apad", label: "āpad【陰】不幸" }
    ],
    data: [
        ["jagat", "jagatī", { t: "jaganti", userMarked: true }],
        ["jagat", "jagatī", { t: "jaganti", userMarked: true }],
        ["jagatā", "jagadbhyām", "jagadbhis"],
        ["jagate", "jagadbhyām", "jagadbhyas"],
        ["jagatas", "jagadbhyām", "jagadbhyas"],
        ["jagatas", "jagatos", "jagatām"],
        ["jagati", "jagatos", "jagatsu"],
        ["jagat", "jagatī", "jaganti"]
    ]
};

export const ruj = {
    id: "ruj",
    stem: "k-stem Feminine",
    shortStem: "-k",
    gender: "陰",
    example: "ruj (disease)",
    base: "ru",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    relatedTables: [
        { id: "consonant_ending", variant: "-k 陰 -- vac", label: "vāc【陰】語言" },
        { id: "dis", label: "diś【陰】方位" }
    ],
    data: [
        ["ruk", "rujau", "rujas"],
        ["rujam", "rujau", "rujas"],
        ["rujā", "rugbhyām", "rugbhis"],
        ["ruje", "rugbhyām", "rugbhyas"],
        ["rujas", "rugbhyām", "rugbhyas"],
        ["rujas", "rujos", "rujām"],
        ["ruji", "rujos", "rukṣu"],
        ["ruk", "rujau", "rujas"]
    ]
};

export const dis = {
    id: "dis",
    stem: "k-stem Feminine",
    shortStem: "-k",
    gender: "陰",
    example: "diś (direction)",
    base: "di",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    relatedTables: [
        { id: "consonant_ending", variant: "-k 陰 -- vac", label: "vāc【陰】語言" },
        { id: "ruj", label: "ruj【陰】疾病" }
    ],
    data: [
        ["dik", "diśau", "diśas"],
        ["diśam", "diśau", "diśas"],
        ["diśā", "digbhyām", "digbhis"],
        ["diśe", "digbhyām", "digbhyas"],
        ["diśas", "digbhyām", "digbhyas"],
        ["diśas", "diśos", "diśām"],
        ["diśi", "diśos", "dikṣu"],
        ["dik", "diśau", "diśas"]
    ]
};

export const vis = {
    id: "vis",
    stem: "ṭ-stem Masculine",
    shortStem: "-ṭ",
    gender: "陽",
    example: "viś (clan)",
    base: "vi",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    relatedTables: [
        { id: "consonant_ending", variant: "-ṭ 陽 -- dvis", label: "dviṣ【陽】敵人" },
        { id: "lih", label: "lih【形】舔" }
    ],
    data: [
        ["viṭ", "viśau", "viśas"],
        ["viśam", "viśau", "viśas"],
        ["viśā", "viḍbhyām", "viḍbhis"],
        ["viśe", "viḍbhyām", "viḍbhyas"],
        ["viśas", "viḍbhyām", "viḍbhyas"],
        ["viśas", "viśos", "viśām"],
        ["viśi", "viśos", "viṭsu"],
        ["viṭ", "viśau", "viśas"]
    ]
};

export const lih = {
    id: "lih",
    stem: "ṭ-stem Adjective",
    shortStem: "-ṭ",
    gender: "形",
    example: "lih (licking)",
    base: "li",
    groupId: "consonant_ending",
    excludeFromDropdown: true,
    relatedTables: [
        { id: "consonant_ending", variant: "-ṭ 陽 -- dvis", label: "dviṣ【陽】敵人" },
        { id: "vis", label: "viś【陽】吠舍" }
    ],
    data: [
        ["liṭ", "lihau", "lihas"],
        ["liham", "lihau", "lihas"],
        ["lihā", "liḍbhyām", "liḍbhis"],
        ["lihe", "liḍbhyām", "liḍbhyas"],
        ["lihas", "liḍbhyām", "liḍbhyas"],
        ["lihas", "lihos", "lihām"],
        ["lihi", "lihos", "liṭsu"],
        ["liṭ", "lihau", "lihas"]
    ]
};

export const consonant_ending = {
    id: "consonant_ending",
    name: "輔音結尾",
    isGroup: true,
    variants: ["-t 陽 -- marut", "-k 陰 -- vac", "-ṭ 陽 -- dvis"],
    defaultVariant: "-t 陽 -- marut",
    hideGenderTabs: true,
    data: {
        "-t 陽 -- marut": marut,
        "-k 陰 -- vac": vac,
        "-ṭ 陽 -- dvis": dvis
    }
};
