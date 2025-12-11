import { cell, STRONG, MIDDLE, WEAK } from '../utils/sanskritUtils';
import { tad_group } from './tadGroupData';
import { consonant_ending, marut, vac, dvis, apad, jagat, ruj, dis, vis, lih } from './consonantEndingData';

export const CASE_NAMES = ["一", "二", "三", "四", "五", "六", "七", "呼"];
export const COL_NAMES = ["單", "雙", "複"];

export const DATA = {
    // --- Original Tables ---
    "a_masc": {
        id: "a_masc",
        stem: "a-stem Masculine",
        shortStem: "-a",
        gender: "陽",
        example: "deva (god)",
        base: "dev",
        data: [
            ["devas", "devau", "devās"],
            ["devam", "devau", "devān"],
            ["devena", "devābhyām", "devais"],
            ["devāya", "devābhyām", "devebhyas"],
            ["devāt", "devābhyām", "devebhyas"],
            ["devasya", "devayos", "devānām"],
            ["deve", "devayos", "deveṣu"],
            ["deva", "devau", "devās"]
        ]
    },
    "a_neut": {
        id: "a_neut",
        stem: "a-stem Neuter",
        shortStem: "-a",
        gender: "中",
        example: "phala (fruit)",
        base: "phal",
        data: [
            ["phalam", "phale", "phalāni"],
            ["phalam", "phale", "phalāni"],
            ["phalena", "phalābhyām", "phalais"],
            ["phalāya", "phalābhyām", "phalebhyas"],
            ["phalāt", "phalābhyām", "phalebhyas"],
            ["phalasya", "phalayos", "phalānām"],
            ["phale", "phalayos", "phaleṣu"],
            ["phala", "phale", "phalāni"]
        ]
    },
    "aa_fem": {
        id: "aa_fem",
        stem: "ā-stem Feminine",
        shortStem: "-ā",
        gender: "陰",
        example: "senā (army)",
        base: "sen",
        data: [
            ["senā", "sene", "senās"],
            ["senām", "sene", "senās"],
            ["senayā", "senābhyām", "senābhis"],
            ["senāyai", "senābhyām", "senābhyas"],
            ["senāyās", "senābhyām", "senābhyas"],
            ["senāyās", "senayos", "senānām"],
            ["senāyām", "senayos", "senāsu"],
            ["sene", "sene", "senās"]
        ]
    },
    "i_masc": {
        id: "i_masc",
        stem: "i-stem Masculine",
        shortStem: "-i",
        gender: "陽",
        example: "agni (fire)",
        base: "agn",
        data: [
            ["agnis", "agnī", "agnayas"],
            ["agnim", "agnī", "agnīn"],
            ["agninā", "agnibhyām", "agnibhis"],
            ["agnaye", "agnibhyām", "agnibhyas"],
            ["agnes", "agnibhyām", "agnibhyas"],
            ["agnes", "agnyos", "agnīnām"],
            ["agnau", "agnyos", "agniṣu"],
            ["agne", "agnī", "agnayas"]
        ]
    },
    "i_neut": {
        id: "i_neut",
        stem: "i-stem Neuter",
        shortStem: "-i",
        gender: "中",
        example: "vāri (water)",
        base: "vār",
        data: [
            ["vāri", "vāriṇī", "vārīṇi"],
            ["vāri", "vāriṇī", "vārīṇi"],
            ["vāriṇā", "vāribhyām", "vāribhis"],
            ["vāriṇe", "vāribhyām", "vāribhyas"],
            ["vāriṇas", "vāribhyām", "vāribhyas"],
            ["vāriṇas", "vāriṇos", "vārīṇām"],
            ["vāriṇi", "vāriṇos", "vāriṣu"],
            ["vāri / vāre", "vāriṇī", "vārīṇi"]
        ]
    },
    "i_fem": {
        id: "i_fem",
        stem: "i-stem Feminine",
        shortStem: "-i",
        gender: "陰",
        example: "mati (mind)",
        base: "mat",
        data: [
            [{ t: "matis", userMarked: true }, "matī", { t: "matayas", userMarked: true }],
            [{ t: "matim", userMarked: true }, "matī", { t: "matīs", userMarked: true }],
            ["matyā", "matibhyām", "matibhis"],
            ["matye / matyai", "matibhyām", "matibhyas"],
            ["mates / matyās", "matibhyām", "matibhyas"],
            ["mates / matyās", "matyos", { t: "matīnām", userMarked: true }],
            ["matau / matyām", "matyos", "matiṣu"],
            [{ t: "mate", userMarked: true }, "matī", { t: "matayas", userMarked: true }]
        ]
    },
    "nadi_fem": {
        id: "nadi_fem",
        stem: "Polysyllabic ī-stem Feminine",
        shortStem: "-ī",
        gender: "陰",
        example: "nadī (river)",
        base: "nad",
        data: [
            [{ t: "nadī", userMarked: true }, "nadyau", "nadyas"],
            [{ t: "nadīm", userMarked: true }, "nadyau", { t: "nadīs", userMarked: true }],
            ["nadyā", "nadībhyām", "nadībhis"],
            [{ t: "nadyai", userMarked: true }, "nadībhyām", "nadībhyas"],
            ["nadyās", "nadībhyām", "nadībhyas"],
            ["nadyās", "nadyos", { t: "nadīnām", userMarked: true }],
            [{ t: "nadyām", userMarked: true }, "nadyos", "nadīṣu"],
            [{ t: "nadi", userMarked: true }, "nadyau", "nadyas"]
        ],
        relatedTables: [
            { id: "gramani_fem", label: "grāmaṇī【陽、陰】村長" },
            { id: "yavakri_fem", label: "yavakrī【陽、陰】買大麥者" }
        ]
    },
    "dhi_fem": {
        id: "dhi_fem",
        stem: "Monosyllabic ī-stem Feminine",
        shortStem: "-ī",
        gender: "陰",
        example: "dhī (thought)",
        base: "dh",
        data: [
            ["dhīs", "dhiyau", "dhiyas"],
            ["dhiyam", "dhiyau", "dhiyas"],
            ["dhiyā", "dhībhyām", "dhībhis"],
            ["dhiye / dhiyai", "dhībhyām", "dhībhyas"],
            ["dhiyas / dhiyās", "dhībhyām", "dhībhyas"],
            ["dhiyas / dhiyās", "dhiyos", "dhiyām / dhīnām"],
            ["dhiyi / dhiyām", "dhiyos", "dhīṣu"],
            ["dhīs", "dhiyau", "dhiyas"]
        ],
        relatedTables: [
            { id: "gramani_fem", label: "grāmaṇī【陽、陰】村長" },
            { id: "yavakri_fem", label: "yavakrī【陽、陰】買大麥者" }
        ]
    },
    "gramani_fem": {
        id: "gramani_fem",
        stem: "Root-stem (ī-stem) Yan",
        shortStem: "-ī",
        gender: "陽、陰",
        example: "grāmaṇī (village leader)",
        base: "grāmaṇ",
        note: "以 ī 收尾的詞根語幹構成複合詞時，遇以元音起始的格尾，若 ī 前只有一個輔音，則 ī 變為 y (下表斜體部分)。\n例如: grāma-nī【陽、陰】村長",
        excludeFromDropdown: true,
        data: [
            ["grāmaṇīs", "grāmaṇyau", "grāmaṇyas"],
            ["grāmaṇyam", "grāmaṇyau", "grāmaṇyas"],
            [{ t: "grāmaṇyā", userMarked: true }, "grāmaṇībhyām", "grāmaṇībhis"],
            [{ t: "grāmaṇye / grāmaṇyai", userMarked: true }, "grāmaṇībhyām", "grāmaṇībhyas"],
            [{ t: "grāmaṇyas / grāmaṇyās", userMarked: true }, "grāmaṇībhyām", "grāmaṇībhyas"],
            [{ t: "grāmaṇyas / grāmaṇyās", userMarked: true }, "grāmaṇyos", { t: "grāmaṇyām / grāmaṇīnām", userMarked: true }],
            [{ t: "grāmaṇyi / grāmaṇyām", userMarked: true }, "grāmaṇyos", "grāmaṇīṣu"],
            ["grāmaṇīs", "grāmaṇyau", "grāmaṇyas"]
        ],
        relatedTables: [
            { id: "dhi_fem", label: "dhī【陰】思想" },
            { id: "nadi_fem", label: "nadī【陰】河流" }
        ]
    },
    "yavakri_fem": {
        id: "yavakri_fem",
        stem: "Root-stem (ī-stem) Iyang",
        shortStem: "-ī",
        gender: "陽、陰",
        example: "yavakrī (corn buyer)",
        base: "yavakr",
        note: "若 ī 前有兩個或兩個以上輔音，遇以元音起始的格尾，則 ī 變為 iy (下表斜體部分)。\n例如: yavakrī【陽、陰】買大麥者\n*有兩種形式的: 前者同普通單音節語幹形式(參見第十三課 dhī)，後者同普通多音節語幹形式(參見第十一課 nadī)。",
        excludeFromDropdown: true,
        data: [
            ["yavakrīs", { t: "yavakriyau", userMarked: true }, { t: "yavakriyas", userMarked: true }],
            [{ t: "yavakriyam", userMarked: true }, { t: "yavakriyau", userMarked: true }, { t: "yavakriyas", userMarked: true }],
            [{ t: "yavakriyā", userMarked: true }, "yavakrībhyām", "yavakrībhis"],
            [{ t: "yavakriye / yavakriyai", userMarked: true }, "yavakrībhyām", "yavakrībhyas"],
            [{ t: "yavakriyas / yavakriyās", userMarked: true }, "yavakrībhyām", "yavakrībhyas"],
            [{ t: "yavakriyas / yavakriyās", userMarked: true }, "yavakriyos", { t: "yavakriyām / yavakrīnām", userMarked: true }],
            [{ t: "yavakriyi / yavakriyām", userMarked: true }, "yavakriyos", "yavakrīṣu"],
            ["yavakrīs", { t: "yavakriyau", userMarked: true }, { t: "yavakriyas", userMarked: true }]
        ],
        relatedTables: [
            { id: "dhi_fem", label: "dhī【陰】思想" },
            { id: "nadi_fem", label: "nadī【陰】河流" }
        ]
    },
    "suci_neut": {
        id: "suci_neut",
        stem: "i-stem Adjective Neuter",
        shortStem: "-i",
        gender: "中",
        example: "śuci (pure)",
        base: "śuc",
        note: "以 i 收尾的形容詞，中單四五六七格，雙六七，可用陽性變格",
        data: [
            ["śuci", "śucinī", "śucīni"],
            ["śuci", "śucinī", "śucīni"],
            ["śucinā", "śucibhyām", "śucibhis"],
            ["śucine / śucaye", "śucibhyām", "śucibhyas"],
            ["śucinas / śuces", "śucibhyām", "śucibhyas"],
            ["śucinas / śuces", "śucinos / śucyos", "śucīnām"],
            ["śucini / śucau", "śucinos / śucyos", "śuciṣu"],
            ["śuci / śuce", "śucinī", "śucīni"]
        ]
    },
    "u_masc": {
        id: "u_masc",
        stem: "u-stem Masculine",
        shortStem: "-u",
        gender: "陽",
        example: "bhānu (sun)",
        base: "bhān",
        data: [
            ["bhānus", { t: "bhānū", userMarked: true }, { t: "bhānavas", userMarked: true }],
            ["bhānum", { t: "bhānū", userMarked: true }, { t: "bhānūn", userMarked: true }],
            [{ t: "bhānunā", userMarked: true }, "bhānubhyām", "bhānubhis"],
            [{ t: "bhānave", userMarked: true }, "bhānubhyām", "bhānubhyas"],
            ["bhānos", "bhānubhyām", "bhānubhyas"],
            ["bhānos", "bhānvos", "bhānūnām"],
            [{ t: "bhānau", userMarked: true }, "bhānvos", "bhānuṣu"],
            ["bhāno", "bhānū", { t: "bhānavas", userMarked: true }]
        ]
    },
    "u_neut": {
        id: "u_neut",
        stem: "u-stem Neuter",
        shortStem: "-u",
        gender: "中",
        example: "madhu (honey)",
        base: "madh",
        memorizeNote: "標準語尾。語尾開頭前為母音的話，語尾前加n。子音直接加。例外:複一二u變ū，複六為madhūnām",
        data: [
            ["madhu", "madhunī", { t: "madhūni", userMarked: true }],
            ["madhu", "madhunī", { t: "madhūni", userMarked: true }],
            ["madhunā", "madhubhyām", "madhubhis"],
            ["madhune", "madhubhyām", "madhubhyas"],
            ["madhunas", "madhubhyām", "madhubhyas"],
            ["madhunas", "madhunos", "madhūnām"],
            ["madhuni", "madhunos", "madhuṣu"],
            [{ t: "madhu / madho", userMarked: true }, "madhunī", "madhūni"]
        ]
    },
    "vadhu_fem": {
        id: "vadhu_fem",
        stem: "Polysyllabic ū-stem Feminine",
        shortStem: "-ū",
        gender: "陰",
        example: "vadhū (woman)",
        base: "vadh",
        memorizeNote: "標準詞尾，母音開頭語尾前+ v ,再前ū消失。子音直接加。例外：單一vadhūm,複二同單ㄧ為vadhūs",
        data: [
            ["vadhūs", "vadhvau", "vadhvas"],
            [{ t: "vadhūm", userMarked: true }, "vadhvau", { t: "vadhūs", userMarked: true }],
            ["vadhvā", "vadhūbhyām", "vadhūbhis"],
            ["vadhvai", "vadhūbhyām", "vadhūbhyas"],
            ["vadhvās", "vadhūbhyām", "vadhūbhyas"],
            ["vadhvās", "vadhvos", "vadhūnām"],
            ["vadhvām", "vadhvos", "vadhūṣu"],
            [{ t: "vadhu", userMarked: true }, "vadhvau", "vadhvas"]
        ],
        relatedTables: [
            { id: "khalapu_fem", label: "khalapū【陽、陰】清潔工" },
            { id: "punarbhu_fem", label: "punarbhū【陽、陰】再嫁的女人" }
        ]
    },
    "bhu_fem": {
        id: "bhu_fem",
        stem: "Monosyllabic ū-stem Feminine",
        shortStem: "-ū",
        gender: "陰",
        example: "bhū (earth)",
        memorizeNote: "標準詞尾，母音開頭語尾前+ v ,再前u不變。子音直接加。",
        base: "bh",
        data: [
            ["bhūs", "bhuvau", "bhuvas"],
            ["bhuvam", "bhuvau", "bhuvas"],
            ["bhuvā", "bhūbhyām", "bhūbhis"],
            ["bhuve", "bhūbhyām", "bhūbhyas"],
            ["bhuvas", "bhūbhyām", "bhūbhyas"],
            ["bhuvas", "bhuvos", "bhuvām"],
            ["bhuvi", "bhuvos", "bhūṣu"],
            ["bhūs", "bhuvau", "bhuvas"]
        ],
        relatedTables: [
            { id: "khalapu_fem", label: "khalapū【陽、陰】清潔工" },
            { id: "punarbhu_fem", label: "punarbhū【陽、陰】再嫁的女人" }
        ]
    },
    "khalapu_fem": {
        id: "khalapu_fem",
        stem: "Root-stem (ū-stem) Yan",
        shortStem: "-ū",
        gender: "陽、陰",
        example: "khalapū (cleaner)",
        base: "khalap",
        note: "以 ū 收尾的詞根語幹構成複合詞時，遇以元音起始的格尾，若 ū 前只有一個輔音，則 ū 變為 v (下表斜體部分)。\n例如: khala-pū【陽、陰】清潔工\n*有兩種形式的: 前者同普通單音節語幹形式，後者同普通多音節語幹形式。(參見第十四課 ū 語幹變格)",
        excludeFromDropdown: true,
        data: [
            ["khalapūs", { t: "khalapvau", userMarked: true }, { t: "khalapvas", userMarked: true }],
            [{ t: "khalapvam", userMarked: true }, { t: "khalapvau", userMarked: true }, { t: "khalapvas", userMarked: true }],
            [{ t: "khalapvā", userMarked: true }, "khalapūbhyām", "khalapūbhis"],
            [{ t: "khalapve / khalapvai", userMarked: true }, "khalapūbhyām", "khalapūbhyas"],
            [{ t: "khalapvas / khalapvās", userMarked: true }, "khalapūbhyām", "khalapūbhyas"],
            [{ t: "khalapvas / khalapvās", userMarked: true }, "khalapvos", { t: "khalapvām / khalapūnām", userMarked: true }],
            [{ t: "khalapvi / khalapvām", userMarked: true }, "khalapvos", "khalapūṣu"],
            [{ t: "khalapūs / khalapu", userMarked: true }, { t: "khalapvau", userMarked: true }, { t: "khalapvas", userMarked: true }]
        ],
        relatedTables: [
            { id: "bhu_fem", label: "bhū【陰】大地" },
            { id: "vadhu_fem", label: "vadhū【陰】女子" }
        ]
    },
    "punarbhu_fem": {
        id: "punarbhu_fem",
        stem: "Root-stem (ū-stem) Uvang",
        shortStem: "-ū",
        gender: "陽、陰",
        example: "punarbhū (remarried woman)",
        base: "punarbh",
        note: "若 ū 前有兩個或兩個以上輔音，遇以元音起始的格尾，則 ū 變為 uv (下表斜體部分)。\n例如: punar-bhū【陽、陰】再嫁的女人",
        excludeFromDropdown: true,
        data: [
            ["punarbhūs", { t: "punarbhuvau", userMarked: true }, { t: "punarbhuvas", userMarked: true }],
            [{ t: "punarbhuvam", userMarked: true }, { t: "punarbhuvau", userMarked: true }, { t: "punarbhuvas", userMarked: true }],
            [{ t: "punarbhuvā", userMarked: true }, "punarbhūbhyām", "punarbhūbhis"],
            [{ t: "punarbhuve / punarbhuvai", userMarked: true }, "punarbhūbhyām", "punarbhūbhyas"],
            [{ t: "punarbhuvas / punarbhuvās", userMarked: true }, "punarbhūbhyām", "punarbhūbhyas"],
            [{ t: "punarbhuvas / punarbhuvās", userMarked: true }, "punarbhuvos", { t: "punarbhuvām / punarbhūnām", userMarked: true }],
            [{ t: "punarbhuvi / punarbhuvām", userMarked: true }, "punarbhuvos", "punarbhūṣu"],
            ["punarbhūs", { t: "punarbhuvau", userMarked: true }, { t: "punarbhuvas", userMarked: true }]
        ],
        relatedTables: [
            { id: "bhu_fem", label: "bhū【陰】大地" },
            { id: "vadhu_fem", label: "vadhū【陰】女子" }
        ]
    },
    "visvapa_masc": {
        id: "visvapa_masc",
        stem: "Root-stem (ā-stem)",
        shortStem: "-ā 陽 複合詞",
        gender: "陽",
        example: "viśvapā (protector of all)",
        base: "viśvap",
        hasStrength: true,
        stemStrength: { strong: "viśvapā", middle: "viśvapā", weak: "viśvap" },
        note: "詞根語幹：由詞根轉化而來，多數是單音節語幹，意義與詞根直接相關。例如：\n√pā【2P】保護 → pā【陽、陰】保護，保護者\n•複合詞：詞根語幹加名詞或代詞組成複合詞。如：\nviśva【代】一切 + pā → viśvapā【陽、陰】保護一切，保護一切者\n詞根語幹和複合詞的變格基本是規則的。但也有以下特殊情況：\n❶ 以 ā 收尾的詞根語幹構成複合詞時，弱語幹(母音起始的格尾)，複二除外，ā 要脫落掉。\n除了這類不規則的，基本沒有以 ā 收尾的陽性名詞，以 ā 收尾的常為陰性。此類詞還有以下單詞等：\ngopā (go+√pā)【陽】護牛者，放牛人，庇護者。\nśaṅkhadhmā (śaṅkha+√dhmā)【陽】吹海螺者，吹螺號者。\nsomapā (soma+√pā)【陽】喝蘇摩汁者，有資格喝蘇摩汁者；行蘇摩祭者。\ndhūmrapā (dhūmra+√pā)【陽】吸煙者。\nbaladā (bala+√dā)【陽】力量給予者，賜予力量者。",
        excludeFromDropdown: true,
        relatedTables: [
            { id: "r_masc", label: "kartṛ【陽】行動者" }
        ],
        data: [
            [{ t: "viśvapās", s: STRONG }, { t: "viśvapau", s: STRONG }, { t: "viśvapās", s: STRONG }],
            [{ t: "viśvapām", s: STRONG }, { t: "viśvapau", s: STRONG }, { t: "viśvapās", s: WEAK, userMarked: true }],
            [{ t: "viśvapā", s: WEAK }, { t: "viśvapābhyām", s: MIDDLE }, { t: "viśvapābhis", s: MIDDLE }],
            [{ t: "viśvape", s: WEAK }, { t: "viśvapābhyām", s: MIDDLE }, { t: "viśvapābhyas", s: MIDDLE }],
            [{ t: "viśvapas", s: WEAK }, { t: "viśvapābhyām", s: MIDDLE }, { t: "viśvapābhyas", s: MIDDLE }],
            [{ t: "viśvapas", s: WEAK }, { t: "viśvapos", s: WEAK }, { t: "viśvapām", s: WEAK }],
            [{ t: "viśvapi", s: WEAK }, { t: "viśvapos", s: WEAK }, { t: "viśvapāsu", s: MIDDLE }],
            [{ t: "viśvapās", s: STRONG }, { t: "viśvapau", s: STRONG }, { t: "viśvapās", s: STRONG }]
        ]
    },
    "pitr": {
        id: "pitr",
        stem: "ṛ-stem Kinship Masc",
        shortStem: "-ṛ",
        gender: "陽",
        example: "pitṛ (father)",
        base: "pit",
        hasStrength: true,
        stemStrength: { strong: "pitar", middle: "pitṛ", weak: "pitr" },
        note: " 第三至七格及呼格同行动名词的变格规律。",
        data: [
            [{ t: "pitā", s: STRONG, userMarked: true }, { t: "pitarau", s: STRONG }, { t: "pitaras", s: STRONG }],
            [{ t: "pitaram", s: STRONG }, { t: "pitarau", s: STRONG }, { t: "pitṝn", s: WEAK, userMarked: true }],
            [{ t: "pitrā", s: WEAK }, { t: "pitṛbhyām", s: MIDDLE }, { t: "pitṛbhis", s: MIDDLE }],
            [{ t: "pitre", s: WEAK }, { t: "pitṛbhyām", s: MIDDLE }, { t: "pitṛbhyas", s: MIDDLE }],
            [{ t: "pitur", s: WEAK, userMarked: true }, { t: "pitṛbhyām", s: MIDDLE }, { t: "pitṛbhyas", s: MIDDLE }],
            [{ t: "pitur", s: WEAK, userMarked: true }, { t: "pitros", s: WEAK }, { t: "pitṝṇām", s: WEAK, userMarked: true }],
            [{ t: "pitari", s: WEAK, userMarked: true }, { t: "pitros", s: WEAK }, { t: "pitṛṣu", s: MIDDLE }],
            [{ t: "pitar", s: STRONG, userMarked: true }, { t: "pitarau", s: STRONG }, { t: "pitaras", s: STRONG }]
        ]
    },
    "matr": {
        id: "matr",
        stem: "ṛ-stem Kinship Fem",
        shortStem: "-ṛ",
        gender: "陰",
        example: "mātṛ (mother)",
        base: "māt",
        hasStrength: true,
        stemStrength: { strong: "mātar", middle: "mātṛ", weak: "mātr" },
        note: " 第三至七格及呼格同行动名词的变格规律。",
        data: [
            [{ t: "mātā", s: STRONG, userMarked: true }, { t: "mātarau", s: STRONG }, { t: "mātaras", s: STRONG }],
            [{ t: "mātaram", s: STRONG }, { t: "mātarau", s: STRONG }, { t: "mātṝs", s: WEAK, userMarked: true }],
            [{ t: "mātrā", s: WEAK }, { t: "mātṛbhyām", s: MIDDLE }, { t: "mātṛbhis", s: MIDDLE }],
            [{ t: "mātre", s: WEAK }, { t: "mātṛbhyām", s: MIDDLE }, { t: "mātṛbhyas", s: MIDDLE }],
            [{ t: "mātur", s: WEAK, userMarked: true }, { t: "mātṛbhyām", s: MIDDLE }, { t: "mātṛbhyas", s: MIDDLE }],
            [{ t: "mātur", s: WEAK, userMarked: true }, { t: "mātros", s: WEAK }, { t: "mātṝṇām", s: WEAK, userMarked: true }],
            [{ t: "mātari", s: WEAK, userMarked: true }, { t: "mātros", s: WEAK }, { t: "mātṛṣu", s: MIDDLE }],
            [{ t: "mātar", s: STRONG, userMarked: true }, { t: "mātarau", s: STRONG }, { t: "mātaras", s: STRONG }]
        ]
    },
    "r_masc": {
        id: "r_masc",
        stem: "ṛ-stem Agent Masc",
        shortStem: "-ṛ",
        gender: "陽",
        example: "kartṛ (doer)",
        base: "kart",
        hasStrength: true,
        stemStrength: { strong: "kartār", middle: "kartṛ", weak: "kartr" },
        note: "kartrī【陰】照 nadī 變格。svasṛ【阴】姐妹、naptṛ【阳】孙子与行动名词性变格相同。唯 svasṛ 复数第二格为 svasṝs。",
        relatedTables: [
            { id: "svasr_fem", label: "svasṛ【陰】姐妹" },
            { id: "naptr_masc", label: "naptṛ【陽】孫" },
            { id: "visvapa_masc", label: "viśvapā【陽】保護一切者" }
        ],
        data: [
            [{ t: "kartā", s: STRONG, userMarked: true }, { t: "kartārau", s: STRONG }, { t: "kartāras", s: STRONG }],
            [{ t: "kartāram", s: STRONG }, { t: "kartārau", s: STRONG }, { t: "kartṝn", s: WEAK, userMarked: true }],
            [{ t: "kartrā", s: WEAK }, { t: "kartṛbhyām", s: MIDDLE }, { t: "kartṛbhis", s: MIDDLE }],
            [{ t: "kartre", s: WEAK }, { t: "kartṛbhyām", s: MIDDLE }, { t: "kartṛbhyas", s: MIDDLE }],
            [{ t: "kartur", s: WEAK, userMarked: true }, { t: "kartṛbhyām", s: MIDDLE }, { t: "kartṛbhyas", s: MIDDLE }],
            [{ t: "kartur", s: WEAK, userMarked: true }, { t: "kartros", s: WEAK }, { t: "kartṝṇām", s: WEAK, userMarked: true }],
            [{ t: "kartari", s: WEAK, userMarked: true }, { t: "kartros", s: WEAK }, { t: "kartṛṣu", s: MIDDLE }],
            [{ t: "kartar", s: STRONG, userMarked: true }, { t: "kartārau", s: STRONG }, { t: "kartāras", s: STRONG }]
        ]
    },
    "svasr_fem": {
        id: "svasr_fem",
        stem: "ṛ-stem Sister (Irregular)",
        shortStem: "-ṛ",
        gender: "陰",
        example: "svasṛ (sister)",
        base: "svas",
        hasStrength: true,
        stemStrength: { strong: "svasār", middle: "svasṛ", weak: "svasr" },
        note: "與 kartṛ 變格相同，唯複數第二格為 svasṝs。",
        excludeFromDropdown: true,
        relatedTables: [
            { id: "r_masc", label: "kartṛ【陽】行動者" },
            { id: "naptr_masc", label: "naptṛ【陽】孫" }
        ],
        data: [
            [{ t: "svasā", s: STRONG }, { t: "svasārau", s: STRONG }, { t: "svasāras", s: STRONG }],
            [{ t: "svasāram", s: STRONG }, { t: "svasārau", s: STRONG }, { t: "svasṝs", s: WEAK, userMarked: true }],
            [{ t: "svasrā", s: WEAK }, { t: "svasṛbhyām", s: MIDDLE }, { t: "svasṛbhis", s: MIDDLE }],
            [{ t: "svasre", s: WEAK }, { t: "svasṛbhyām", s: MIDDLE }, { t: "svasṛbhyas", s: MIDDLE }],
            [{ t: "svasur", s: WEAK }, { t: "svasṛbhyām", s: MIDDLE }, { t: "svasṛbhyas", s: MIDDLE }],
            [{ t: "svasur", s: WEAK }, { t: "svasros", s: WEAK }, { t: "svasṝṇām", s: WEAK }],
            [{ t: "svasari", s: WEAK }, { t: "svasros", s: WEAK }, { t: "svasṛṣu", s: MIDDLE }],
            [{ t: "svasar", s: STRONG }, { t: "svasārau", s: STRONG }, { t: "svasāras", s: STRONG }]
        ]
    },
    "naptr_masc": {
        id: "naptr_masc",
        stem: "ṛ-stem Grandson",
        shortStem: "-ṛ",
        gender: "陽",
        example: "naptṛ (grandson)",
        base: "napt",
        hasStrength: true,
        stemStrength: { strong: "naptār", middle: "naptṛ", weak: "naptr" },
        note: "與 kartṛ 變格完全相同。",
        excludeFromDropdown: true,
        relatedTables: [
            { id: "r_masc", label: "kartṛ【陽】行動者" },
            { id: "svasr_fem", label: "svasṛ【陰】姐妹" }
        ],
        data: [
            [{ t: "naptā", s: STRONG }, { t: "naptārau", s: STRONG }, { t: "naptāras", s: STRONG }],
            [{ t: "naptāram", s: STRONG }, { t: "naptārau", s: STRONG }, { t: "naptṝn", s: WEAK }],
            [{ t: "naptrā", s: WEAK }, { t: "naptṛbhyām", s: MIDDLE }, { t: "naptṛbhis", s: MIDDLE }],
            [{ t: "naptre", s: WEAK }, { t: "naptṛbhyām", s: MIDDLE }, { t: "naptṛbhyas", s: MIDDLE }],
            [{ t: "naptur", s: WEAK }, { t: "naptṛbhyām", s: MIDDLE }, { t: "naptṛbhyas", s: MIDDLE }],
            [{ t: "naptur", s: WEAK }, { t: "naptros", s: WEAK }, { t: "naptṝṇām", s: WEAK }],
            [{ t: "naptari", s: WEAK }, { t: "naptros", s: WEAK }, { t: "naptṛṣu", s: MIDDLE }],
            [{ t: "naptar", s: STRONG }, { t: "naptārau", s: STRONG }, { t: "naptāras", s: STRONG }]
        ]
    },
    "r_neut": {
        id: "r_neut",
        stem: "ṛ-stem Agent Neut",
        shortStem: "-ṛ",
        gender: "中",
        example: "kartṛ (doer - neuter)",
        base: "kart",
        note: "照vāri變格，但單三四五六七，雙六七照陽姓變格",
        data: [
            ["kartṛ", "kartṛṇī", "kartṝṇi"],
            ["kartṛ", "kartṛṇī", "kartṝṇi"],
            ["kartrā / kartṛṇā", "kartṛbhyām", "kartṛbhis"],
            ["kartre / kartṛṇe", "kartṛbhyām", "kartṛbhyas"],
            ["kartur / kartṛṇas", "kartṛbhyām", "kartṛbhyas"],
            ["kartur / kartṛṇas", "kartros / kartṛṇos", "kartṝṇām"],
            ["kartari / kartṛṇi", "kartros / kartṛṇos", "kartṛṣu"],
            ["kartar / kartṛ", "kartṛṇī", "kartṝṇi"]
        ]
    },
    "bhavat_masc": {
        id: "bhavat_masc",
        stem: "Honorific Pronoun Masc",
        shortStem: "-at",
        gender: "陽",
        example: "bhavat (Your Honor)",
        base: "bhav",
        hasStrength: true,
        stemStrength: { strong: "bhavant", weak: "bhavat" },
        note: "注意t加濁輔音變d。阴性不分强弱语干，由弱语干加 ī 构成→ bhavatī，并按照 nadī 变格",
        data: [
            [{ t: "bhavān", s: STRONG, userMarked: true }, { t: "bhavantau", s: STRONG }, { t: "bhavantas", s: STRONG }],
            [{ t: "bhavantam", s: STRONG }, { t: "bhavantau", s: STRONG }, { t: "bhavatas", s: WEAK }],
            [{ t: "bhavatā", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhis", s: WEAK }],
            [{ t: "bhavate", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhyas", s: WEAK }],
            [{ t: "bhavatas", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhyas", s: WEAK }],
            [{ t: "bhavatas", s: WEAK }, { t: "bhavatos", s: WEAK }, { t: "bhavatām", s: WEAK }],
            [{ t: "bhavati", s: WEAK }, { t: "bhavatos", s: WEAK }, { t: "bhavatsu", s: WEAK }],
            [{ t: "bhavan / bhos", s: STRONG, userMarked: true }, { t: "bhavantau", s: STRONG }, { t: "bhavantas", s: STRONG }]
        ]
    },
    "jivat_masc": {
        id: "jivat_masc",
        stem: "Present Participle Active Masc",
        shortStem: "-at",
        gender: "陽",
        example: "jīvat (living)",
        base: "jīv",
        hasStrength: true,
        stemStrength: { strong: "jīvant", weak: "jīvat" },
        memorizeNote: "强语干:现在时语干+nt (陈主复三去 i); 弱语干:现在时语干+t (陈主复三去 i 和 n)",
        data: [
            [{ t: "jīvan", s: STRONG }, { t: "jīvantau", s: STRONG }, { t: "jīvantas", s: STRONG }],
            [{ t: "jīvantam", s: STRONG }, { t: "jīvantau", s: STRONG }, { t: "jīvatas", s: WEAK }],
            [{ t: "jīvatā", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhis", s: WEAK }],
            [{ t: "jīvate", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhyas", s: WEAK }],
            [{ t: "jīvatas", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhyas", s: WEAK }],
            [{ t: "jīvatas", s: WEAK }, { t: "jīvatos", s: WEAK }, { t: "jīvatām", s: WEAK }],
            [{ t: "jīvati", s: WEAK }, { t: "jīvatos", s: WEAK }, { t: "jīvatsu", s: WEAK }],
            [{ t: "jīvan", s: STRONG }, { t: "jīvantau", s: STRONG }, { t: "jīvantas", s: STRONG }]
        ]
    },
    "jivat_neut": {
        id: "jivat_neut",
        stem: "Present Participle Active Neut (Class 1, 4, 10)",
        shortStem: "-at",
        gender: "中",
        example: "jīvat (living - neuter)",
        base: "jīva",
        hasStrength: true,
        stemStrength: { strong: "jīvant", weak: "jīvat" },
        memorizeNote: "强语干:现在时语干+nt (陈主复三去 i); 弱语干:现在时语干+t (陈主复三去 i 和 n); 雙數一、二、呼格為 jīvantī。其餘同陽性。",
        data: [
            [{ t: "jīvat", s: WEAK }, { t: "jīvantī", s: STRONG, userMarked: true }, { t: "jīvanti", s: STRONG }],
            [{ t: "jīvat", s: WEAK }, { t: "jīvantī", s: STRONG, userMarked: true }, { t: "jīvanti", s: STRONG }],
            [{ t: "jīvatā", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhis", s: WEAK }],
            [{ t: "jīvate", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhyas", s: WEAK }],
            [{ t: "jīvatas", s: WEAK }, { t: "jīvadbhyām", s: WEAK }, { t: "jīvadbhyas", s: WEAK }],
            [{ t: "jīvatas", s: WEAK }, { t: "jīvatos", s: WEAK }, { t: "jīvatām", s: WEAK }],
            [{ t: "jīvati", s: WEAK }, { t: "jīvatos", s: WEAK }, { t: "jīvatsu", s: WEAK }],
            [{ t: "jīvat", s: WEAK }, { t: "jīvantī", s: STRONG, userMarked: true }, { t: "jīvanti", s: STRONG }]
        ]
    },
    "ksipat_neut": {
        id: "ksipat_neut",
        stem: "Present Participle Active Neut (Class 6)",
        shortStem: "-at",
        gender: "中",
        example: "kṣipat (throwing)",
        base: "kṣipa",
        hasStrength: true,
        stemStrength: { strong: "kṣipant", weak: "kṣipat" },
        note: "第 6 類動詞，雙數一、二、呼格既可以是 kṣipantī 也可以是 kṣipatī。其餘同陽性。",
        data: [
            [{ t: "kṣipat", s: WEAK }, { t: "kṣipantī / kṣipatī", userMarked: true }, { t: "kṣipanti", s: STRONG }],
            [{ t: "kṣipat", s: WEAK }, { t: "kṣipantī / kṣipatī", userMarked: true }, { t: "kṣipanti", s: STRONG }],
            [{ t: "kṣipatā", s: WEAK }, { t: "kṣipadbhyām", s: WEAK }, { t: "kṣipadbhis", s: WEAK }],
            [{ t: "kṣipate", s: WEAK }, { t: "kṣipadbhyām", s: WEAK }, { t: "kṣipadbhyas", s: WEAK }],
            [{ t: "kṣipatas", s: WEAK }, { t: "kṣipadbhyām", s: WEAK }, { t: "kṣipadbhyas", s: WEAK }],
            [{ t: "kṣipatas", s: WEAK }, { t: "kṣipatos", s: WEAK }, { t: "kṣipatām", s: WEAK }],
            [{ t: "kṣipati", s: WEAK }, { t: "kṣipatos", s: WEAK }, { t: "kṣipatsu", s: WEAK }],
            [{ t: "kṣipat", s: WEAK }, { t: "kṣipantī / kṣipatī", userMarked: true }, { t: "kṣipanti", s: STRONG }]
        ]
    },
    "yusmad": {
        id: "yusmad",
        stem: "2nd Person Pronoun",
        shortStem: "yuṣmad",
        gender: "通",
        example: "yuṣmad (you)",
        base: "",
        note: "斜線後的形式不可出現在句首，不可用在 ca、eva、vā 等不變詞前，也不能出現在韻腳。",
        data: [
            ["tvam", "yuvām", "yūyam"],
            ["tvām / tvā", "yuvām / vām", "yuṣmān / vas"],
            ["tvayā", "yuvābhyām", "yuṣmābhis"],
            ["tubhyam / te", "yuvābhyām / vām", "yuṣmabhyam / vas"],
            ["tvat", "yuvābhyām", "yuṣmat"],
            ["tava / te", "yuvayos / vām", "yuṣmākam / vas"],
            ["tvayi", "yuvayos", "yuṣmāsu"],
            ["-", "-", "-"]
        ]
    },
    "asmad": {
        id: "asmad",
        stem: "1st Person Pronoun",
        shortStem: "asmad",
        gender: "通",
        example: "asmad (I/we)",
        base: "",
        note: "斜線後的形式不可出現在句首，也不可用在 ca、eva、vā 等小詞前。單數第五格也可是 mattas。",
        data: [
            ["aham", "āvām", "vayam"],
            ["mām / mā", "āvām / nau", "asmān / nas"],
            ["mayā", "āvābhyām", "asmābhis"],
            ["mahyam / me", "āvābhyām / nau", "asmabhyam / nas"],
            ["mat (mattas)", "āvābhyām", "asmat"],
            ["mama / me", "āvayos / nau", "asmākam / nas"],
            ["mayi", "āvayos", "asmāsu"],
            ["-", "-", "-"]
        ]
    },
    // --- TAD GROUP (Pronouns) ---
    // --- TAD GROUP (Pronouns) ---
    "tad_group": tad_group,
    // --- Consonant Ending Group ---
    "consonant_ending": consonant_ending,
    "marut": marut,
    "vac": vac,
    "dvis": dvis,
    "apad": apad,
    "jagat": jagat,
    "ruj": ruj,
    "dis": dis,
    "vis": vis,
    "lih": lih,
    "o_masc": {
        id: "o_masc",
        stem: "o-stem Masc/Fem",
        shortStem: "-o",
        gender: "陽",
        example: "go (cow)",
        base: "g",
        data: [
            ["gaus", "gavau", "gāvas"],
            ["gām", "gavau", "gās"],
            ["gavā", "gobhyām", "gobhis"],
            ["gave", "gobhyām", "gobhyas"],
            ["gos", "gobhyām", "gobhyas"],
            ["gos", "gavos", "gavām"],
            ["gavi", "gavos", "goṣu"],
            ["gaus", "gavau", "gavas"]
        ]
    },
    "au_fem": {
        id: "au_fem",
        stem: "au-stem Feminine",
        shortStem: "-au",
        gender: "陰",
        example: "nau (ship)",
        base: "n",
        data: [
            ["naus", "nāvau", "nāvas"],
            ["nāvam", "nāvau", "nāvas"],
            ["nāvā", "naubhyām", "naubhis"],
            ["nāve", "naubhyām", "naubhyas"],
            ["nāvas", "naubhyām", "naubhyas"],
            ["nāvas", "nāvos", "nāvām"],
            ["nāvi", "nāvos", "nauṣu"],
            ["naus", "nāvau", "nāvas"]
        ]
    }
};
