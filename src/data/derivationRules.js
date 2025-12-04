export const DERIVATION_RULES = {
    opt_p: {
        sourceId: "impf_p",
        rows: [
            // 1st Person
            [
                // 1s: m -> am -> īyam
                {
                    intermediate: "am",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "y", type: "added" },
                        { text: "am", type: "modified", from: "m" }
                    ]
                },
                // 1d: va -> īva
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "va", type: "base" }
                    ]
                },
                // 1p: ma -> īma
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "ma", type: "base" }
                    ]
                }
            ],
            // 2nd Person
            [
                // 2s: s -> īs
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "s", type: "base" }
                    ]
                },
                // 2d: tam -> ītam
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "tam", type: "base" }
                    ]
                },
                // 2p: ta -> īta
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "ta", type: "base" }
                    ]
                }
            ],
            // 3rd Person
            [
                // 3s: t -> īt
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "t", type: "base" }
                    ]
                },
                // 3d: tām -> ītām
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "tām", type: "base" }
                    ]
                },
                // 3p: n -> ur -> īyus
                {
                    intermediate: "ur",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "y", type: "added" },
                        { text: "us", type: "modified", from: "n" }
                    ]
                }
            ]
        ]
    },
    opt_a: {
        sourceId: "impf_a",
        rows: [
            // 1st Person
            [
                // 1s: i -> a -> īya
                {
                    intermediate: "a",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "y", type: "added" },
                        { text: "a", type: "modified", from: "i" }
                    ]
                },
                // 1d: vahi -> īvahi
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "vahi", type: "base" }
                    ]
                },
                // 1p: mahi -> īmahi
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "mahi", type: "base" }
                    ]
                }
            ],
            // 2nd Person
            [
                // 2s: thās -> īthās
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "thās", type: "base" }
                    ]
                },
                // 2d: ethām -> āthām -> īyāthām
                {
                    intermediate: "āthām",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "y", type: "added" },
                        { text: "āthām", type: "modified", from: "ethām" }
                    ]
                },
                // 2p: dhvam -> īdhvam
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "dhvam", type: "base" }
                    ]
                }
            ],
            // 3rd Person
            [
                // 3s: ta -> īta
                {
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "ta", type: "base" }
                    ]
                },
                // 3d: etām -> ātām -> īyātām
                {
                    intermediate: "ātām",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "y", type: "added" },
                        { text: "ātām", type: "modified", from: "etām" }
                    ]
                },
                // 3p: nta -> ran -> īran
                {
                    intermediate: "ran",
                    segments: [
                        { text: "ī", type: "added" },
                        { text: "ran", type: "modified", from: "nta" }
                    ]
                }
            ]
        ]
    }
};
