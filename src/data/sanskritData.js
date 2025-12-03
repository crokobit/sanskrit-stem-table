import { cell, STRONG, MIDDLE, WEAK } from '../utils/sanskritUtils';

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
            ["matis", "matī", "matayas"],
            ["matim", "matī", "matīs"],
            ["matyā", "matibhyām", "matibhis"],
            ["matye / matyai", "matibhyām", "matibhyas"],
            ["mates / matyās", "matibhyām", "matibhyas"],
            ["mates / matyās", "matyos", "matīnām"],
            ["matau / matyām", "matyos", "matiṣu"],
            ["mate", "matī", "matayas"]
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
            ["nadī", "nadyau", "nadyas"],
            ["nadīm", "nadyau", "nadīs"],
            ["nadyā", "nadībhyām", "nadībhis"],
            ["nadyai", "nadībhyām", "nadībhyas"],
            ["nadyās", "nadībhyām", "nadībhyas"],
            ["nadyās", "nadyos", "nadīnām"],
            ["nadyām", "nadyos", "nadīṣu"],
            ["nadi", "nadyau", "nadyas"]
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
        ]
    },
    "suci_neut": {
        id: "suci_neut",
        stem: "i-stem Adjective Neuter",
        shortStem: "-i",
        gender: "中",
        example: "śuci (pure)",
        base: "śuc",
        note: "以 i 收尾的形容词，中单四五六七格，双六七，可用陽性變格",
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
        note: "單一二呼不變，複一二呼母音拉長後加 ni。全部為標準語尾。但語尾開頭前為母音的話，加n。例外為複六為 madhūnām",
        data: [
            ["madhu", "madhunī", "madhūni"],
            ["madhu", "madhunī", "madhūni"],
            ["madhunā", "madhubhyām", "madhubhis"],
            ["madhune", "madhubhyām", "madhubhyas"],
            ["madhunas", "madhubhyām", "madhubhyas"],
            ["madhunas", "madhunos", "madhūnām"],
            ["madhuni", "madhunos", "madhuṣu"],
            ["madhu / madho", "madhunī", "madhūni"]
        ]
    },
    "vadhu_fem": {
        id: "vadhu_fem",
        stem: "Polysyllabic ū-stem Feminine",
        shortStem: "-ū",
        gender: "陰",
        example: "vadhū (woman)",
        base: "vadh",
        data: [
            ["vadhūs", "vadhvau", "vadhvas"],
            ["vadhūm", "vadhvau", "vadhūs"],
            ["vadhvā", "vadhūbhyām", "vadhūbhis"],
            ["vadhvai", "vadhūbhyām", "vadhūbhyas"],
            ["vadhvās", "vadhūbhyām", "vadhūbhyas"],
            ["vadhvās", "vadhvos", "vadhūnām"],
            ["vadhvām", "vadhvos", "vadhūṣu"],
            ["vadhu", "vadhvau", "vadhvas"]
        ]
    },
    "bhu_fem": {
        id: "bhu_fem",
        stem: "Monosyllabic ū-stem Feminine",
        shortStem: "-ū",
        gender: "陰",
        example: "bhū (earth)",
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
        ]
    },
    "pitr": {
        id: "pitr",
        stem: "ṛ-stem Kinship Masc",
        shortStem: "-ṛ",
        gender: "陽",
        example: "pitṛ (father)",
        base: "pit",
        data: [
            ["pitā", "pitarau", "pitaras"],
            ["pitaram", "pitarau", "pitṝn"],
            ["pitrā", "pitṛbhyām", "pitṛbhis"],
            ["pitre", "pitṛbhyām", "pitṛbhyas"],
            ["pitur", "pitṛbhyām", "pitṛbhyas"],
            ["pitur", "pitros", "pitṝṇām"],
            ["pitari", "pitros", "pitṛṣu"],
            ["pitar", "pitarau", "pitaras"]
        ]
    },
    "matr": {
        id: "matr",
        stem: "ṛ-stem Kinship Fem",
        shortStem: "-ṛ",
        gender: "陰",
        example: "mātṛ (mother)",
        base: "māt",
        data: [
            ["mātā", "mātarau", "mātaras"],
            ["mātaram", "mātarau", "mātṝs"],
            ["mātrā", "mātṛbhyām", "mātṛbhis"],
            ["mātre", "mātṛbhyām", "mātṛbhyas"],
            ["mātur", "mātṛbhyām", "mātṛbhyas"],
            ["mātur", "mātros", "mātṝṇām"],
            ["mātari", "mātros", "mātṛṣu"],
            ["mātar", "mātarau", "mātaras"]
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
    "r_neut": {
        id: "r_neut",
        stem: "ṛ-stem Agent Neut",
        shortStem: "-ṛ",
        gender: "中",
        example: "kartṛ (doer - neuter)",
        base: "kart",
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
    "r_fem": {
        id: "r_fem",
        stem: "ṛ-stem Agent Fem",
        shortStem: "-ṛ",
        gender: "陰",
        example: "kartrī (doer - fem)",
        base: "kartr",
        data: [
            ["kartrī", "kartryau", "kartryas"],
            ["kartrīm", "kartryau", "kartrīs"],
            ["kartryā", "kartrībhyām", "kartrībhis"],
            ["kartryai", "kartrībhyām", "kartrībhyas"],
            ["kartryās", "kartrībhyām", "kartrībhyas"],
            ["kartryās", "kartryos", "kartrīnām"],
            ["kartryām", "kartryos", "kartrīṣu"],
            ["kartri", "kartryau", "kartryas"]
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
        data: [
            [{ t: "bhavān", s: STRONG }, { t: "bhavantau", s: STRONG }, { t: "bhavantas", s: STRONG }],
            [{ t: "bhavantam", s: STRONG }, { t: "bhavantau", s: STRONG }, { t: "bhavatas", s: WEAK }],
            [{ t: "bhavatā", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhis", s: WEAK }],
            [{ t: "bhavate", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhyas", s: WEAK }],
            [{ t: "bhavatas", s: WEAK }, { t: "bhavadbhyām", s: WEAK }, { t: "bhavadbhyas", s: WEAK }],
            [{ t: "bhavatas", s: WEAK }, { t: "bhavatos", s: WEAK }, { t: "bhavatām", s: WEAK }],
            [{ t: "bhavati", s: WEAK }, { t: "bhavatos", s: WEAK }, { t: "bhavatsu", s: WEAK }],
            [{ t: "bhavan / bhos", s: STRONG }, { t: "bhavantau", s: STRONG }, { t: "bhavantas", s: STRONG }]
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
        note: "第 1、4、10 類動詞，雙數一、二、呼格為 jīvantī。其餘同陽性。",
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
        note: "斜线后的形式不可出现在句首，不可用在 ca、eva、vā 等不变词前，也不能出现在韵脚。",
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
        note: "斜线后的形式不可出现在句首，也不可用在 ca、eva、vā 等小词前。单数第五格也可是 mattas。",
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
    "tad_group": {
        id: "tad_group",
        isGroup: true,
        stem: "Demonstrative/Pronouns",
        variants: ["tad", "etad", "yad", "kim", "sarva", "purva", "sva", "antara", "prathama", "nema", "eka"],
        defaultVariant: "tad",
        data: {
            "tad": {
                stem: "tad", example: "that", gender: "三性", base: "t",
                note: "泛指或遠指",
                rows: [
                    [{ M: { t: "sas", userMarked: true }, N: { t: "tad", userMarked: true }, F: { t: "sā", userMarked: true } }, { M: "tau", N: "te", F: "te" }, { M: "te", N: "tāni", F: "tās" }],
                    [{ M: "tam", N: { t: "tad", userMarked: true }, F: "tām" }, { M: "tau", N: "te", F: "te" }, { M: "tān", N: "tāni", F: "tās" }],
                    [{ M: "tena", N: "tena", F: "tayā" }, { M: "tābhyām", N: "tābhyām", F: "tābhyām" }, { M: "tais", N: "tais", F: "tābhis" }],
                    [{ M: "tasmai", N: "tasmai", F: "tasyai" }, { M: "tābhyām", N: "tābhyām", F: "tābhyām" }, { M: "tebhyas", N: "tebhyas", F: "tābhyas" }],
                    [{ M: "tasmāt", N: "tasmāt", F: "tasyās" }, { M: "tābhyām", N: "tābhyām", F: "tābhyām" }, { M: "tebhyas", N: "tebhyas", F: "tābhyas" }],
                    [{ M: "tasya", N: "tasya", F: "tasyās" }, { M: "tayos", N: "tayos", F: "tayos" }, { M: "teṣām", N: "teṣām", F: "tāsām" }],
                    [{ M: "tasmin", N: "tasmin", F: "tasyām" }, { M: "tayos", N: "tayos", F: "tayos" }, { M: "teṣu", N: "teṣu", F: "tāsu" }],
                    [{ M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }]
                ]
            },
            "etad": {
                stem: "etad", example: "this", gender: "三性", base: "et",
                note: "近指。同 tad，在 tad 变格前加前缀 e 即可。sas 和 eṣas 句内连声时，遇 a 变 so' 和 eṣo'，遇其他元音和辅音丢失 s。",
                rows: [
                    [{ M: { t: "eṣas", userMarked: true }, N: { t: "etad", userMarked: true }, F: { t: "eṣā", userMarked: true } }, { M: "etau", N: "ete", F: "ete" }, { M: "ete", N: "etāni", F: "etās" }],
                    [{ M: "etam", N: { t: "etad", userMarked: true }, F: "etām" }, { M: "etau", N: "ete", F: "ete" }, { M: "etān", N: "etāni", F: "etās" }],
                    [{ M: "etena", N: "etena", F: "etayā" }, { M: "etābhyām", N: "etābhyām", F: "etābhyām" }, { M: "etais", N: "etais", F: "etābhis" }],
                    [{ M: "etasmai", N: "etasmai", F: "etasyai" }, { M: "etābhyām", N: "etābhyām", F: "etābhyām" }, { M: "etebhyas", N: "etebhyas", F: "etābhyas" }],
                    [{ M: "etasmāt", N: "etasmāt", F: "etasyās" }, { M: "etābhyām", N: "etābhyām", F: "etābhyām" }, { M: "etebhyas", N: "etebhyas", F: "etābhyas" }],
                    [{ M: "etasya", N: "etasya", F: "etasyās" }, { M: "etayos", N: "etayos", F: "etayos" }, { M: "eteṣām", N: "eteṣām", F: "etāsām" }],
                    [{ M: "etasmin", N: "etasmin", F: "etasyām" }, { M: "etayos", N: "etayos", F: "etayos" }, { M: "eteṣu", N: "eteṣu", F: "etāsu" }],
                    [{ M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }]
                ]
            },
            "yad": {
                stem: "yad", example: "who/which", gender: "三性", base: "y",
                note: "那個。关系代词。变格同 tad，将 t 替换为 y 即可。",
                rows: [
                    [{ M: { t: "yas", userMarked: true }, N: { t: "yad", userMarked: true }, F: { t: "yā", userMarked: true } }, { M: "yau", N: "ye", F: "ye" }, { M: "ye", N: "yāni", F: "yās" }],
                    [{ M: "yam", N: { t: "yad", userMarked: true }, F: "yām" }, { M: "yau", N: "ye", F: "ye" }, { M: "yān", N: "yāni", F: "yās" }],
                    [{ M: "yena", N: "yena", F: "yayā" }, { M: "yābhyām", N: "yābhyām", F: "yābhyām" }, { M: "yais", N: "yais", F: "yābhis" }],
                    [{ M: "yasmai", N: "yasmai", F: "yasyai" }, { M: "yābhyām", N: "yābhyām", F: "yābhyām" }, { M: "yebhyas", N: "yebhyas", F: "yābhyas" }],
                    [{ M: "yasmāt", N: "yasmāt", F: "yasyās" }, { M: "yābhyām", N: "yābhyām", F: "yābhyām" }, { M: "yebhyas", N: "yebhyas", F: "yābhyas" }],
                    [{ M: "yasya", N: "yasya", F: "yasyās" }, { M: "yayos", N: "yayos", F: "yayos" }, { M: "yeṣām", N: "yeṣām", F: "yāsām" }],
                    [{ M: "yasmin", N: "yasmin", F: "yasyām" }, { M: "yayos", N: "yayos", F: "yayos" }, { M: "yeṣu", N: "yeṣu", F: "yāsu" }],
                    [{ M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }]
                ]
            },
            "sarva": {
                stem: "sarva", example: "all", gender: "三性", base: "sarv",
                note: "所有，全部。中单一、二用 -am 代替 -ad，其余与 tad 相同。viśva 变格同此。",
                rows: [
                    [{ M: "sarvas", N: { t: "sarvam", d: true, userMarked: true }, F: "sarvā" }, { M: "sarvau", N: "sarve", F: "sarve" }, { M: "sarve", N: "sarvāṇi", F: "sarvās" }],
                    [{ M: { t: "sarvam", userMarked: true }, N: { t: "sarvam", d: true, userMarked: true }, F: "sarvām" }, { M: "sarvau", N: "sarve", F: "sarve" }, { M: "sarvān", N: "sarvāṇi", F: "sarvās" }],
                    [{ M: "sarveṇa", N: "sarveṇa", F: "sarvayā" }, { M: "sarvābhyām", N: "sarvābhyām", F: "sarvābhyām" }, { M: "sarvais", N: "sarvais", F: "sarvābhis" }],
                    [{ M: "sarvasmai", N: "sarvasmai", F: "sarvasyai" }, { M: "sarvābhyām", N: "sarvābhyām", F: "sarvābhyām" }, { M: "sarvebhyas", N: "sarvebhyas", F: "sarvābhyas" }],
                    [{ M: "sarvasmāt", N: "sarvasmāt", F: "sarvasyās" }, { M: "sarvābhyām", N: "sarvābhyām", F: "sarvābhyām" }, { M: "sarvebhyas", N: "sarvebhyas", F: "sarvābhyas" }],
                    [{ M: "sarvasya", N: "sarvasya", F: "sarvasyās" }, { M: "sarvayos", N: "sarvayos", F: "sarvayos" }, { M: "sarveṣām", N: "sarveṣām", F: "sarvāsām" }],
                    [{ M: "sarvasmin", N: "sarvasmin", F: "sarvasyām" }, { M: "sarvayos", N: "sarvayos", F: "sarvayos" }, { M: "sarveṣu", N: "sarveṣu", F: "sarvāsu" }],
                    [{ M: "sarva", N: "sarve", F: "sarve" }, { M: "sarvau", N: "sarve", F: "sarve" }, { M: "sarve", N: "sarvāṇi", F: "sarvās" }]
                ]
            },
            "purva": {
                stem: "pūrva", example: "eastern/prior", gender: "三性", base: "pūrv",
                excludeFromAnalysis: true,
                note: "pūrva, para, avara, dakṣiṇa, uttara, apara, adhara 这七个词，在表达方位以及时间的概念，并且不是专有名词时，按代词 sarva 变格。其他情况下，则按 以 a 收尾的名词和形容词变格。例如:dakṣiṇa 当“右，南方”讲时按代词变，当“灵活， 熟练”讲时按形容词变。uttara 表示“北方”时通常按代词变，但与 kuru 连用构成专有名 词 uttarāḥ kuravaḥ 北俱卢洲时，则按名词变。上述九词按代词变时，阳/中单五、七也可以按名词变。",
                rows: [
                    [{ M: "pūrvas", N: { t: "pūrvam", d: true, userMarked: true }, F: "pūrvā" }, { M: "pūrvau", N: "pūrve", F: "pūrve" }, { M: "pūrve", N: "pūrvāṇi", F: "pūrvās" }],
                    [{ M: { t: "pūrvam", userMarked: true }, N: { t: "pūrvam", d: true, userMarked: true }, F: "pūrvām" }, { M: "pūrvau", N: "pūrve", F: "pūrve" }, { M: "pūrvān", N: "pūrvāṇi", F: "pūrvās" }],
                    [{ M: "pūrveṇa", N: "pūrveṇa", F: "pūrvayā" }, { M: "pūrvābhyām", N: "pūrvābhyām", F: "pūrvābhyām" }, { M: "pūrvais", N: "pūrvais", F: "pūrvābhis" }],
                    [{ M: "pūrvasmai", N: "pūrvasmai", F: "pūrvasyai" }, { M: "pūrvābhyām", N: "pūrvābhyām", F: "pūrvābhyām" }, { M: "pūrvebhyas", N: "pūrvebhyas", F: "pūrvābhyas" }],
                    [{ M: { t: "pūrvasmāt / pūrvāt", userMarked: true }, N: { t: "pūrvasmāt / pūrvāt", userMarked: true }, F: "pūrvasyās" }, { M: "pūrvābhyām", N: "pūrvābhyām", F: "pūrvābhyām" }, { M: "pūrvebhyas", N: "pūrvebhyas", F: "pūrvābhyas" }],
                    [{ M: "pūrvasya", N: "pūrvasya", F: "pūrvasyās" }, { M: "pūrvayos", N: "pūrvayos", F: "pūrvayos" }, { M: "pūrveṣām", N: "pūrveṣām", F: "pūrvāsām" }],
                    [{ M: { t: "pūrvasmin / pūrve", userMarked: true }, N: { t: "pūrvasmin / pūrve", userMarked: true }, F: "pūrvasyām" }, { M: "pūrvayos", N: "pūrvayos", F: "pūrvayos" }, { M: "pūrveṣu", N: "pūrveṣu", F: "pūrvāsu" }],
                    [{ M: "pūrva", N: "pūrve", F: "pūrve" }, { M: "pūrvau", N: "pūrve", F: "pūrve" }, { M: "pūrve", N: "pūrvāṇi", F: "pūrvās" }]
                ]
            },
            "sva": {
                stem: "sva", example: "own/self", gender: "三性", base: "sv",
                excludeFromAnalysis: true,
                note: "sva 一词有四个意思: (1)【阳】自我(ātman) (2)【形】属于自己的(ātmīya) (3) 【阳】亲属(jñāti) (4)【阳、中】财富(dhana)。表达前两个意义时，按形容词性代词 sarva 变格;阳复一可以有两种变化:sve 或 svās。表达后两个意义时，按名词变格。上述九词按代词变时，阳/中单五、七也可以按名词变。",
                rows: [
                    [{ M: { t: "sve / svās", userMarked: true }, N: { t: "svam", d: true, userMarked: true }, F: "svā" }, { M: "svau", N: "sve", F: "sve" }, { M: "sve", N: "svāṇi", F: "svās" }],
                    [{ M: { t: "svam", userMarked: true }, N: { t: "svam", d: true, userMarked: true }, F: "svām" }, { M: "svau", N: "sve", F: "sve" }, { M: "svān", N: "svāṇi", F: "svās" }],
                    [{ M: "sveṇa", N: "sveṇa", F: "svayā" }, { M: "svābhyām", N: "svābhyām", F: "svābhyām" }, { M: "svais", N: "svais", F: "svābhis" }],
                    [{ M: "svasmai", N: "svasmai", F: "svasyai" }, { M: "svābhyām", N: "svābhyām", F: "svābhyām" }, { M: "svebhyas", N: "svebhyas", F: "svābhyas" }],
                    [{ M: { t: "svasmāt / svāt", userMarked: true }, N: { t: "svasmāt / svāt", userMarked: true }, F: "svasyās" }, { M: "svābhyām", N: "svābhyām", F: "svābhyām" }, { M: "svebhyas", N: "svebhyas", F: "svābhyas" }],
                    [{ M: "svasya", N: "svasya", F: "svasyās" }, { M: "svayos", N: "svayos", F: "svayos" }, { M: "sveṣām", N: "sveṣām", F: "svāsām" }],
                    [{ M: { t: "svasmin / sve", userMarked: true }, N: { t: "svasmin / sve", userMarked: true }, F: "svasyām" }, { M: "svayos", N: "svayos", F: "svayos" }, { M: "sveṣu", N: "sveṣu", F: "svāsu" }],
                    [{ M: "sva", N: "sve", F: "sve" }, { M: "svau", N: "sve", F: "sve" }, { M: "sve", N: "svāṇi", F: "svās" }]
                ]
            },
            "antara": {
                stem: "antara", example: "outer/inner", gender: "三性", base: "antar",
                excludeFromAnalysis: true,
                note: "antara 一词有三种意义: (1)外部 (2)内(衣) (3)中间。用前两个意义时，需按 形容词性代词 sarva 变格;阳复一可以有两种变化:antare 或 antarās，前者是按代词变的， 后者是按名词变的。上述九词按代词变时，阳/中单五、七也可以按名词变。",
                rows: [
                    [{ M: { t: "antare / antarās", userMarked: true }, N: { t: "antaram", d: true, userMarked: true }, F: "antarā" }, { M: "antarau", N: "antare", F: "antare" }, { M: "antare", N: "antarāṇi", F: "antarās" }],
                    [{ M: { t: "antaram", userMarked: true }, N: { t: "antaram", d: true, userMarked: true }, F: "antarām" }, { M: "antarau", N: "antare", F: "antare" }, { M: "antarān", N: "antarāṇi", F: "antarās" }],
                    [{ M: "antareṇa", N: "antareṇa", F: "antarayā" }, { M: "antarābhyām", N: "antarābhyām", F: "antarābhyām" }, { M: "antarais", N: "antarais", F: "antarābhis" }],
                    [{ M: "antarasmai", N: "antarasmai", F: "antarasyai" }, { M: "antarābhyām", N: "antarābhyām", F: "antarābhyām" }, { M: "antarebhyas", N: "antarebhyas", F: "antarābhyas" }],
                    [{ M: { t: "antarasmāt / antarāt", userMarked: true }, N: { t: "antarasmāt / antarāt", userMarked: true }, F: "antarasyās" }, { M: "antarābhyām", N: "antarābhyām", F: "antarābhyām" }, { M: "antarebhyas", N: "antarebhyas", F: "antarābhyas" }],
                    [{ M: "antarasya", N: "antarasya", F: "antarasyās" }, { M: "antarayos", N: "antarayos", F: "antarayos" }, { M: "antareṣām", N: "antareṣām", F: "antarāsām" }],
                    [{ M: { t: "antarasmin / antare", userMarked: true }, N: { t: "antarasmin / antare", userMarked: true }, F: "antarasyām" }, { M: "antarayos", N: "antarayos", F: "antarayos" }, { M: "antareṣu", N: "antareṣu", F: "antarāsu" }],
                    [{ M: "antara", N: "antare", F: "antare" }, { M: "antarau", N: "antare", F: "antare" }, { M: "antare", N: "antarāṇi", F: "antarās" }]
                ]
            },
            "prathama": {
                stem: "prathama", example: "first", gender: "三性", base: "pratham",
                excludeFromAnalysis: true,
                note: "prathama【形】第一、carama【形】最末的、以 taya 为后缀的词、alpa【形】少许、 ardha【形、阳、中】一半、katipaya【形】一些，这六个词，复一可按代词 sarva 变。例如 prathama 的阳复一为 prathame 或 prathamās。",
                rows: [
                    [{ M: "prathamas", N: { t: "prathamam", d: true, userMarked: true }, F: "prathamā" }, { M: "prathamau", N: "prathame", F: "prathame" }, { M: { t: "prathame / prathamās", userMarked: true }, N: "prathamāni", F: "prathamās" }],
                    [{ M: { t: "prathamam", userMarked: true }, N: { t: "prathamam", d: true, userMarked: true }, F: "prathamām" }, { M: "prathamau", N: "prathame", F: "prathame" }, { M: "prathamān", N: "prathamāni", F: "prathamās" }],
                    [{ M: "prathamena", N: "prathamena", F: "prathamayā" }, { M: "prathamābhyām", N: "prathamābhyām", F: "prathamābhyām" }, { M: "prathamais", N: "prathamais", F: "prathamābhis" }],
                    [{ M: "prathamāya", N: "prathamāya", F: "prathamāyai" }, { M: "prathamābhyām", N: "prathamābhyām", F: "prathamābhyām" }, { M: "prathamebhyas", N: "prathamebhyas", F: "prathamābhyas" }],
                    [{ M: "prathamāt", N: "prathamāt", F: "prathamāyās" }, { M: "prathamābhyām", N: "prathamābhyām", F: "prathamābhyām" }, { M: "prathamebhyas", N: "prathamebhyas", F: "prathamābhyas" }],
                    [{ M: "prathamasya", N: "prathamasya", F: "prathamāyās" }, { M: "prathamayos", N: "prathamayos", F: "prathamayos" }, { M: "prathamānām", N: "prathamānām", F: "prathamānām" }],
                    [{ M: "prathame", N: "prathame", F: "prathamāyām" }, { M: "prathamayos", N: "prathamayos", F: "prathamayos" }, { M: "prathameṣu", N: "prathameṣu", F: "prathamāsu" }],
                    [{ M: "prathama", N: "prathame", F: "prathame" }, { M: "prathamau", N: "prathame", F: "prathame" }, { M: "prathamās", N: "prathamāni", F: "prathamās" }]
                ]
            },
            "nema": {
                stem: "nema", example: "several", gender: "三性", base: "nem",
                excludeFromAnalysis: true,
                note: "nema【形】几个，复数第一格两可 neme 或 nemās，其余按代词 sarva 变。",
                rows: [
                    [{ M: "nemas", N: { t: "nemam", d: true, userMarked: true }, F: "nemā" }, { M: "nemau", N: "neme", F: "neme" }, { M: { t: "neme / nemās", userMarked: true }, N: "nemāni", F: "nemās" }],
                    [{ M: { t: "nemam", userMarked: true }, N: { t: "nemam", d: true, userMarked: true }, F: "nemām" }, { M: "nemau", N: "neme", F: "neme" }, { M: "nemān", N: "nemāni", F: "nemās" }],
                    [{ M: "nemeṇa", N: "nemeṇa", F: "nemayā" }, { M: "nemābhyām", N: "nemābhyām", F: "nemābhyām" }, { M: "nemais", N: "nemais", F: "nemābhis" }],
                    [{ M: "nemasmai", N: "nemasmai", F: "nemasyai" }, { M: "nemābhyām", N: "nemābhyām", F: "nemābhyām" }, { M: "nemebhyas", N: "nemebhyas", F: "nemābhyas" }],
                    [{ M: "nemasmāt", N: "nemasmāt", F: "nemasyās" }, { M: "nemābhyām", N: "nemābhyām", F: "nemābhyām" }, { M: "nemebhyas", N: "nemebhyas", F: "nemābhyas" }],
                    [{ M: "nemasya", N: "nemasya", F: "nemasyās" }, { M: "nemayos", N: "nemayos", F: "nemayos" }, { M: "nemeṣām", N: "nemeṣām", F: "nemāsām" }],
                    [{ M: "nemasmin", N: "nemasmin", F: "nemasyām" }, { M: "nemayos", N: "nemayos", F: "nemayos" }, { M: "nemeṣu", N: "nemeṣu", F: "nemāsu" }],
                    [{ M: "nema", N: "neme", F: "neme" }, { M: "nemau", N: "neme", F: "neme" }, { M: "neme", N: "nemāni", F: "nemās" }]
                ]
            },
            "kim": {
                stem: "kim", example: "what/who", gender: "三性", base: "k",
                note: "什麼。疑问代词。阳 kas，阴 kā，中 kim。中单一、二为 kim，其余同 tad。",
                rows: [
                    [{ M: { t: "kas", userMarked: true }, N: { t: "kim", userMarked: true }, F: { t: "kā", userMarked: true } }, { M: "kau", N: "ke", F: "ke" }, { M: "ke", N: "kāni", F: "kās" }],
                    [{ M: "kam", N: { t: "kim", userMarked: true }, F: "kām" }, { M: "kau", N: "ke", F: "ke" }, { M: "kān", N: "kāni", F: "kās" }],
                    [{ M: "kena", N: "kena", F: "kayā" }, { M: "kābhyām", N: "kābhyām", F: "kābhyām" }, { M: "kais", N: "kais", F: "kābhis" }],
                    [{ M: "kasmai", N: "kasmai", F: "kasyai" }, { M: "kābhyām", N: "kābhyām", F: "kābhyām" }, { M: "kebhyas", N: "kebhyas", F: "kābhyas" }],
                    [{ M: "kasmāt", N: "kasmāt", F: "kasyās" }, { M: "kābhyām", N: "kābhyām", F: "kābhyām" }, { M: "kebhyas", N: "kebhyas", F: "kābhyas" }],
                    [{ M: "kasya", N: "kasya", F: "kasyās" }, { M: "kayos", N: "kayos", F: "kayos" }, { M: "keṣām", N: "keṣām", F: "kāsām" }],
                    [{ M: "kasmin", N: "kasmin", F: "kasyām" }, { M: "kayos", N: "kayos", F: "kayos" }, { M: "keṣu", N: "keṣu", F: "kāsu" }],
                    [{ M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }, { M: "-", N: "-", F: "-" }]
                ]
            },
            "eka": {
                stem: "eka", example: "one", gender: "三性", base: "ek",
                note: "复数表示“一些”。变格规则同 sarva。",
                rows: [
                    [{ M: "ekas", N: cell("ekam", null, true), F: "ekā" }, { M: "ekau", N: "eke", F: "eke" }, { M: "eke", N: "ekāni", F: "ekās" }],
                    [{ M: "ekam", N: cell("ekam", null, true), F: "ekām" }, { M: "ekau", N: "eke", F: "eke" }, { M: "ekān", N: "ekāni", F: "ekās" }],
                    [{ M: "ekena", N: "ekena", F: "ekayā" }, { M: "ekābhyām", N: "ekābhyām", F: "ekābhyām" }, { M: "ekais", N: "ekais", F: "ekābhis" }],
                    [{ M: "ekasmai", N: "ekasmai", F: "ekasyai" }, { M: "ekābhyām", N: "ekābhyām", F: "ekābhyām" }, { M: "ekebhyas", N: "ekebhyas", F: "ekābhyas" }],
                    [{ M: "ekasmāt", N: "ekasmāt", F: "ekasyās" }, { M: "ekābhyām", N: "ekābhyām", F: "ekābhyām" }, { M: "ekebhyas", N: "ekebhyas", F: "ekābhyas" }],
                    [{ M: "ekasya", N: "ekasya", F: "ekasyās" }, { M: "ekayos", N: "ekayos", F: "ekayos" }, { M: "ekeṣām", N: "ekeṣām", F: "ekāsām" }],
                    [{ M: "ekasmin", N: "ekasmin", F: "ekasyām" }, { M: "ekayos", N: "ekayos", F: "ekayos" }, { M: "ekeṣu", N: "ekeṣu", F: "ekāsu" }],
                    [{ M: "eka", N: "eke", F: "eke" }, { M: "ekau", N: "eke", F: "eke" }, { M: "eke", N: "ekāni", F: "ekās" }]
                ]
            }
        }
    },
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
