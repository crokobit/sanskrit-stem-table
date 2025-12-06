import { cell } from '../utils/sanskritUtils';

export const tad_group = {
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
            note: "近指。同 tad，在 tad 變格前加前綴 e 即可。sas 和 eṣas 句內連聲時，遇 a 變 so' 和 eṣo'，遇其他元音和輔音丟失 s。",
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
            note: "那個。關係代詞。變格同 tad，將 t 替換為 y 即可。",
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
            note: "所有，全部。中單一、二用 -am 代替 -ad，其餘與 tad 相同。viśva 變格同此。",
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
            note: "pūrva, para, avara, dakṣiṇa, uttara, apara, adhara 這七個詞，在表達方位以及時間的概念，並且不是專有名詞時，按代詞 sarva 變格。其他情況下，則按 以 a 收尾的名詞和形容詞變格。例如:dakṣiṇa 當“右，南方”講時按代詞變，當“靈活， 熟練”講時按形容詞變。uttara 表示“北方”時通常按代詞變，但與 kuru 連用構成專有名 詞 uttarāḥ kuravaḥ 北俱盧洲時，則按名詞變。上述九詞按代詞變時，陽/中單五、七也可以按名詞變。",
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
            note: "sva 一詞有四個意思: (1)【陽】自我(ātman) (2)【形】屬於自己的(ātmīya) (3) 【陽】親屬(jñāti) (4)【陽、中】財富(dhana)。表達前兩個意義時，按形容詞性代詞 sarva 變格;陽複一可以有兩種變化:sve 或 svās。表達後兩個意義時，按名詞變格。上述九詞按代詞變時，陽/中單五、七也可以按名詞變。",
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
            note: "antara 一詞有三種意義: (1)外部 (2)內(衣) (3)中間。用前兩個意義時，需按 形容詞性代詞 sarva 變格;陽複一可以有兩種變化:antare 或 antarās，前者是按代詞變的， 後者是按名詞變的。上述九詞按代詞變時，陽/中單五、七也可以按名詞變。",
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
            note: "prathama【形】第一、carama【形】最末的、以 taya 為後綴的詞、alpa【形】少許、 ardha【形、陽、中】一半、katipaya【形】一些，這六個詞，複一可按代詞 sarva 變。例如 prathama 的陽複一為 prathame 或 prathamās。",
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
            note: "nema【形】幾個，複數第一格兩可 neme 或 nemās，其餘按代詞 sarva 變。",
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
            note: "什麼。疑問代詞。陽 kas，陰 kā，中 kim。中單一、二為 kim，其餘同 tad。",
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
            note: "複數表示“一些”。變格規則同 sarva。",
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
};
