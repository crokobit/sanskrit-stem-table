export const ROOT_DATA = {
    1: {
        id: 'root_1',
        label: '1',
        description: '二合+a',
        items: [
            {
                description: '不規則動詞',
                exceptions: [
                    { root: { value: '√ṛ', type: '1P', def: '去，走' }, form: 'ṛcchati' },
                    { root: { value: '√yam', type: '1P', def: '控制' }, form: 'yacchati' },
                    { root: { value: '√guh', type: '1U', def: '掩' }, form: 'gūhati' },
                    { root: { value: '√ghrā', type: '1P', def: '嗅' }, form: 'jighrati' },
                    { root: { value: '√pā', type: '1P', def: '飲' }, form: 'pibati' },
                    { root: { value: '√sad', type: '1P', def: '坐' }, form: 'sīdati' },
                    { root: { value: '√sthā', type: '1P', def: '住' }, form: 'tiṣṭhati' }
                ]
            },
            {
                description: '有些不規則的第 1 類動詞，在變位時與第 4 類動詞相似。例如:',
                exceptions: [
                    { root: { value: '√dhe', type: '1P', def: '啜飲' }, form: 'dhayati' },
                    { root: { value: '√hve', type: '1U', def: '呼喊' }, form: 'hvayati' },
                    { root: { value: '√gai', type: '1P', def: '唱歌' }, form: 'gāyati' }
                ]
            },
            {
                description: '詞根√dṛś【1P】看，見，現在時語幹為 paśya，√dṛś【1P】無現在時主動語態，現在主動被√paś【4U】看，見(僅現在時語幹)替換再加 ya，陳主單三為 paśyati。但陳被單三為 dṛśyate，√paś 的被動被√dṛś 代替。致使•陳主單三又為 darśayati。',
                exceptions: []
            }
        ]
    },
    2: { id: 'root_2', label: '2', description: 'Class 2 Verbs', items: [] },
    3: { id: 'root_3', label: '3', description: 'Class 3 Verbs', items: [] },
    4: {
        id: 'root_4',
        label: '4',
        description: '+ya',
        items: [
            {
                description: '+ya 但以 am 收尾的詞根在形成現在時語幹時，am 拉長為 ām。',
                exceptions: [
                    { root: { value: '√tam', type: '4P', def: '傷心' }, form: 'tāmyati' },
                    { root: { value: '√bhram', type: '1, 4P', def: '閒逛' }, form: 'bhrāmyati' },
                    { root: { value: '√mad', type: '4P', def: '醉' }, form: 'mādyati' }
                ]
            },
            {
                description: '一些以 o 收尾的第 4 類動詞在形成現在時語幹時，o 變為 ya。常見的有兩個:',
                exceptions: [
                    { root: { value: '√do', type: '4P', def: '切' }, form: 'dyati' },
                    { root: { value: 'ava-√so', type: '4P', def: '終結，決定' }, form: 'avasyati' }
                ]
            },
            {
                description: '特殊的:',
                exceptions: [
                    { root: { value: '√vyadh', type: '4P', def: '刺' }, form: 'vidhyati' },
                    { root: { value: '√kram', type: '1U, 4P', def: '越過' }, form: 'kramyati' },
                    { root: { value: 'ā-√cam', type: '1P', def: '啜飲' }, form: 'ācāmati' },
                    { root: { value: '√cam', type: '1P', def: '啜飲' }, form: 'camati' }
                ]
            }
        ]
    },
    5: { id: 'root_5', label: '5', description: 'Class 5 Verbs', items: [] },
    6: {
        id: 'root_6',
        label: '6',
        description: '+a',
        items: [
            {
                description: '不規則動詞',
                exceptions: [
                    { root: { value: '√iṣ', type: '6P', def: '希求，許' }, form: 'icchati' },
                    { root: { value: '√prach', type: '6P', def: '問' }, form: 'pṛcchati' }
                ]
            },
            {
                description: '有些第 6 類動詞變位時，在詞根尾音前插入同類的鼻音。例如，尾音是腭音(c、ch、j、jh)，則插入ñ;尾音是齒音(t、th、d、dh)，則插入n ;尾音是唇音(p、ph、b、bh)， 則插入 m。尾音是噝音(ś、ṣ、s)或 h，則插入 ṃ(在寫本中，ṃ 和鼻音字母常替換使用。 亦即所有輔音字母前要加鼻音時，都可能寫成 ṃ)。常見的有以下幾個:',
                exceptions: [
                    { root: { value: '√sic', type: '6U', def: '滴，使...變濕' }, form: 'siñcati' },
                    { root: { value: '√muc', type: '6U', def: '釋放，解脫' }, form: 'muñcati' },
                    { root: { value: '√lup', type: '6U', def: '毀壞' }, form: 'lumpati' },
                    { root: { value: '√kṛt', type: '6P', def: '割，砍' }, form: 'kṛntati' },
                    { root: { value: '√vid', type: '6U', def: '發現，找到' }, form: 'vindati' },
                    { root: { value: '√lip', type: '6U', def: '塗' }, form: 'limpati' }
                ]
            },
            {
                description: 'ṛ 的特殊內連聲: ṛ 作第 6 類動詞詞根尾音，後加 a 形成語幹時，ṛ 要變為 riy。即:√-ṛ + a = √-riy + a→√-riya',
                exceptions: [
                    { root: { value: '√mṛ', type: '6Ā', def: '死亡' }, form: 'mriyate [中間語態單數第三人稱]' }
                ]
            }
        ]
    },
    7: { id: 'root_7', label: '7', description: 'Class 7 Verbs', items: [] },
    8: { id: 'root_8', label: '8', description: 'Class 8 Verbs', items: [] },
    9: { id: 'root_9', label: '9', description: 'Class 9 Verbs', items: [] },
    10: {
        id: 'root_10',
        label: '10',
        description: '加強 + aya',
        items: [
            {
                description: '1. 詞根若以母音 i、u、ṛ 開頭，或者 i、u、ṛ 在中間，則二合。',
                exceptions: [
                    { root: { value: '√cur', type: '10P', def: '偷' }, form: 'corayati' },
                    { root: { value: '√vid', type: '2P', def: '知' }, form: 'vedayati [致使]使知' }
                ]
            },
            {
                description: '2. 如果詞根母音是長音或複合母音，或者詞根母音是短音，但它後面有兩個輔音，則不用二合。',
                exceptions: [
                    { root: { value: '√pīḍ', type: '10U', def: '折磨' }, form: 'pīḍayati' },
                    { root: { value: '√cint', type: '10U', def: '思考' }, form: 'cintayati' }
                ]
            },
            {
                description: '3. 詞根若以母音 a 開頭，或者 a 在中間，有時三合，有時不變。',
                exceptions: [
                    { root: { value: '√kṣal', type: '10U', def: '洗' }, form: 'kṣālayati' },
                    { root: { value: '√jan', type: '1P, 4Ā', def: '生' }, form: 'janayati 生，[致使]使出生' }
                ]
            },
            {
                description: '4. 詞根若以母音收尾，則該母音三合。(*根據詞內連聲規則，ai 和 au 在遇到母音時分別變為 āy 和 āv。)',
                exceptions: [
                    { root: { value: '√dhṛ', type: '1U', def: '持' }, form: 'dhārayati 持，承擔，支撐' },
                    { root: { value: '√bhī', type: '3P', def: '恐懼' }, form: 'bhāyayati 使恐懼，使害怕' },
                    { root: { value: '√bhū', type: '1P, Ā', def: '有，存在' }, form: 'bhāvayati 使有，使存在' }
                ]
            }
        ]
    },
    causative: {
        id: 'root_causative',
        label: '致使式',
        description: '+aya, 且非第十類',
        items: []
    },
    denominative: {
        id: 'root_denominative',
        label: '名動詞',
        description: '名詞語幹後加 ya，少數加 sya',
        items: [
            {
                description: '很多以 aya 結尾的名動詞也可以直接視為第 10 類動詞，比如 gaṇayati 他計數，可以認為原形是名動詞√gaṇay【a 名動】計數,直接加語尾變來的，也可以視為第10類動詞√gaṇ【10U】 加 aya 再加語尾變來的。再比如 daṇḍayati 他打，其動詞原形可以視為√daṇḍ【10U】或√daṇḍaya 【名動】。kathayati 他講，其動詞原形可以視為√kath【10U】或√kathaya【名動】。',
                exceptions: [
                    { root: { value: 'gaṇa', type: '陽', def: '數，類' }, form: '√gaṇaya 【名動】 計數' },
                    { root: { value: '√gaṇ', type: '10U', def: '計算' }, form: '+aya -> √gaṇaya 計數' },
                    { root: { value: 'daṇḍa', type: '陽', def: '棍棒，懲罰' }, form: '√daṇḍaya 【名動】' },
                    { root: { value: '√daṇḍ', type: '10U', def: '懲罰' }, form: '+aya -> √daṇḍaya 打' },
                    { root: { value: 'katha', type: '陽', def: '言詞，故事' }, form: '√kathaya 【名動】' },
                    { root: { value: '√kath', type: '10U', def: '敘述' }, form: '+aya -> √kathaya 講' }
                ]
            }
        ]
    },
    passive: {
        id: 'root_passive',
        label: '被動',
        description: '+ya',
        items: [
            {
                description: '1 詞根以 ā 收尾，直接加 ya 形成語幹。',
                exceptions: [
                    { root: { value: '√pā', type: '2P', def: '保護' }, form: 'pāyate' },
                    { root: { value: '√jñā', type: '9P', def: '知' }, form: 'jñāyate' }
                ]
            },
            {
                description: '2 部分以 ā 或複合母音收尾的詞根替換為 ī。',
                exceptions: [
                    { root: { value: '√dā', type: '3U', def: '給' }, form: 'dīyate' },
                    { root: { value: '√do', type: '4P', def: '切' }, form: 'dīyate' },
                    { root: { value: '√dhā', type: '3U', def: '置' }, form: 'dhīyate' },
                    { root: { value: '√mā', type: '4Ā', def: '量' }, form: 'mīyate' },
                    { root: { value: '√sthā', type: '1U', def: '站立' }, form: 'sthīyate' },
                    { root: { value: '√pā', type: '1P', def: '飲' }, form: 'pīyate' },
                    { root: { value: '√hā', type: '3P', def: '捨棄' }, form: 'hīyate' },
                    { root: { value: '√so', type: '4P', def: '終結' }, form: 'sīyate' },
                    { root: { value: '√gai', type: '1P', def: '唱' }, form: 'gīyate' },
                    { root: { value: '√de', type: '1Ā', def: '保護' }, form: 'dīyate' },
                    { root: { value: '√dhe', type: '1P', def: '吸吮' }, form: 'dhīyate' }
                ]
            },
            {
                description: '3 詞根尾音 e、ai、o 替換為 ā 再執行 1。',
                exceptions: [
                    { root: { value: '√mlai', type: '1P', def: '凋謝' }, form: 'mlāyate' },
                    { root: { value: '√cho', type: '4P', def: '切斷' }, form: 'chāyate' },
                    { root: { value: '√dhyai', type: '1P', def: '想' }, form: 'dhyāyate' }
                ]
            },
            {
                description: '4 詞根尾音 i、u 通常拉長。',
                exceptions: [
                    { root: { value: '√ji', type: '1P', def: '勝' }, form: 'jīyate' },
                    { root: { value: '√stu', type: '2U', def: '讚頌' }, form: 'stūyate' },
                    { root: { value: '√śru', type: '5P', def: '聽' }, form: 'śrūyate' }
                ]
            },
            {
                description: '5 詞根以 ṛ 收尾，其前為單輔音時變為 ri；若 ṛ 前面有兩個輔音，則 ṛ 二合為 ar。',
                exceptions: [
                    { root: { value: '√kṛ', type: '8U', def: '做' }, form: 'kriyate' },
                    { root: { value: '√smṛ', type: '1P', def: '憶' }, form: 'smaryate' }
                ]
            },
            {
                description: '6 詞根尾音 ṝ 變為 īr；但若 ṝ 前是唇音，則 ṝ 變為 ūr。',
                exceptions: [
                    { root: { value: '√tṝ', type: '1P', def: '渡' }, form: 'tīryate' },
                    { root: { value: '√kṝ', type: '6P', def: '散' }, form: 'kīryate' },
                    { root: { value: '√pṝ', type: '3, 9P', def: '充滿' }, form: 'pūryate' }
                ]
            },
            {
                description: '8 詞根弱化類：部分詞根開頭或居中的 ya、va、ra 變為 i、u、ṛ。',
                exceptions: [
                    { root: { value: '√vac', type: '2P', def: '說' }, form: 'ucyate' },
                    { root: { value: '√vap', type: '1U', def: '播種' }, form: 'upyate' },
                    { root: { value: '√vas', type: '1P', def: '居住' }, form: 'uṣyate' },
                    { root: { value: '√vah', type: '1U', def: '運載' }, form: 'uhyate' },
                    { root: { value: '√svap', type: '2P', def: '睡' }, form: 'supyate' },
                    { root: { value: '√yaj', type: '1U', def: '祭祀' }, form: 'ijyate' },
                    { root: { value: '√grah', type: '9U', def: '抓住' }, form: 'gṛhyate' },
                    { root: { value: '√pracch', type: '6P', def: '問' }, form: 'pṛcchyate' },
                    { root: { value: '√hve', type: '1U', def: '呼喚' }, form: 'hūyate' }
                ]
            },
            {
                description: '9 詞根弱化類：倒數第二位的鼻音脫落。',
                exceptions: [
                    { root: { value: '√añj', type: '7P', def: '塗' }, form: 'ajyate' },
                    { root: { value: '√bandh', type: '9P', def: '縛' }, form: 'badhyate' },
                    { root: { value: '√bhañj', type: '7P', def: '折斷' }, form: 'bhajyate' },
                    { root: { value: '√daṃś', type: '1P', def: '咬' }, form: 'daśyate' },
                    { root: { value: '√granth', type: '1, 9P, 10U, 1Ā', def: '結' }, form: 'grathyate' },
                    { root: { value: '√rañj', type: '1, 4U', def: '染' }, form: 'rajyate' },
                    { root: { value: '√svañj', type: '1Ā', def: '擁抱' }, form: 'svajyate' },
                    { root: { value: '√indh', type: '7Ā', def: '點燃' }, form: 'idhyate' },
                    { root: { value: '√skand', type: '1P', def: '跳' }, form: 'skadyate' },
                    { root: { value: '√manth', type: '1, 9P', def: '攪' }, form: 'mathyate' },
                    { root: { value: '√stambh', type: '1Ā, 5, 9P', def: '支撐' }, form: 'stabhyate' },
                    { root: { value: '√syand', type: '1Ā', def: '流' }, form: 'syadyate' },
                    { root: { value: '√dhvaṃs', type: '1Ā', def: '毀滅' }, form: 'dhvasyate' },
                    { root: { value: '√bhraṃś', type: '1, 4Ā', def: '墮落' }, form: 'bhraśyate' },
                    { root: { value: '√śaṃs', type: '1P', def: '讚頌' }, form: 'śasyate' },
                    { root: { value: '√sraṃs', type: '1Ā', def: '掉落' }, form: 'srasyate' }
                ]
            },
            {
                description: '現在時體系(sārvadhātuka)之外的被動語態。\n1 現在時體系之外的一般時態(ārdhadhātuka)中，被動語態通常由中間語態兼任，有時甚至現在時體系中，中間語態的形式也可以表示被動的意義，在閱讀中需靠語境判斷。',
                exceptions: []
            },
            {
                description: '一般時態的不定過去時被動第三人稱單數是例外，用 i 結尾的形態。詞根末尾的母音三合，中間的 i、u、ṛ 二合。',
                exceptions: [
                    { root: { value: '√kṛ', type: '8U', def: '做' }, form: 'akāri [不定過去被動單三]' }
                ]
            },
            {
                description: '4. 形成被動語態時的不規則動詞。\n1 部分動詞具有完全不規則的被動語態變化，又或有兩種形式。',
                exceptions: [
                    { root: { value: '√ṛ', type: '1P', def: '去' }, form: 'aryate' },
                    { root: { value: '√śās', type: '2P', def: '教導' }, form: 'śiṣyate' },
                    { root: { value: '√śās', type: '2Ā', def: '希望' }, form: 'śāsyate' },
                    { root: { value: '√śī', type: '2Ā', def: '臥' }, form: 'śayyate' },
                    { root: { value: '√khan', type: '1U', def: '挖' }, form: 'khanyate / khāyate' },
                    { root: { value: '√tan', type: '8U', def: '伸展' }, form: 'tanyate / tāyate' },
                    { root: { value: '√jan', type: '4Ā', def: '生' }, form: 'janyate / jāyate' }
                ]
            },
            {
                description: '2 部分無被動形式的動詞，用其他動詞的語幹替代。',
                exceptions: [
                    { root: { value: '√as', type: '2P', def: '是' }, form: '⇒ √bhū【1P】→ bhūyate' },
                    { root: { value: '√ghas', type: '1, 2P', def: '吃' }, form: '⇒ √ad【2P】→ adyate' },
                    { root: { value: '√cakṣ', type: '2Ā', def: '看' }, form: '⇒ √khyā【2P】→ khyāyate' },
                    { root: { value: '√brū', type: '2U', def: '說' }, form: '⇒ √vac【2P】→ ucyate' }
                ]
            },
            {
                description: '3 同一詞根，主動語態(parasmaipada)和中間語態(ātmanepada)形成的被動形式不同。',
                exceptions: [
                    { root: { value: '√śās', type: '2Ā', def: '希望' }, form: 'śāsyate' },
                    { root: { value: '√śās', type: '2P', def: '教導' }, form: 'śiṣyate' },
                    { root: { value: '√vas', type: '2Ā', def: '穿' }, form: 'vasyate' },
                    { root: { value: '√vas', type: '1P', def: '居住' }, form: 'uṣyate' }
                ]
            }
        ]
    }
};
