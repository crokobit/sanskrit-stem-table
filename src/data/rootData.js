export const ROOT_DATA = {
    1: {
        id: 'root_1',
        label: 'Class 1',
        description: '第一類動詞特例 陳主',
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
    2: { id: 'root_2', label: 'Class 2', description: 'Class 2 Verbs', items: [] },
    3: { id: 'root_3', label: 'Class 3', description: 'Class 3 Verbs', items: [] },
    4: { id: 'root_4', label: 'Class 4', description: 'Class 4 Verbs', items: [] },
    5: { id: 'root_5', label: 'Class 5', description: 'Class 5 Verbs', items: [] },
    6: {
        id: 'root_6',
        label: 'Class 6',
        description: '第六類動詞特例 陳主',
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
            }
        ]
    },
    7: { id: 'root_7', label: 'Class 7', description: 'Class 7 Verbs', items: [] },
    8: { id: 'root_8', label: 'Class 8', description: 'Class 8 Verbs', items: [] },
    9: { id: 'root_9', label: 'Class 9', description: 'Class 9 Verbs', items: [] },
    10: { id: 'root_10', label: 'Class 10', description: 'Class 10 Verbs', items: [] },
};
