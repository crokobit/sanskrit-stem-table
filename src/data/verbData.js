export const PERSON_NAMES = ["1st", "2nd", "3rd"];

export const VERB_DATA = {
    "lat_p": {
        "id": "lat_p",
        "name": "陳主",
        "voice": "active",
        "tense": "lat",
        "description": "標準現在式",
        "data": [
            [
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "mi"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "vas"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "mas"
                }
            ],
            [
                {
                    "t": "si"
                },
                {
                    "t": "thas"
                },
                {
                    "t": "tha"
                }
            ],
            [
                {
                    "t": "ti"
                },
                {
                    "t": "tas"
                },
                {
                    "rule": "del_previous_a",
                    "t": "nti"
                }
            ]
        ]
    },
    "impv_p": {
        "id": "impv_p",
        "name": "命主",
        "voice": "active",
        "tense": "impv",
        "description": "假設、希望、未來行為、命令、勸告、祈願、請求",
        "data": [
            [
                {
                    "t": "āni"
                },
                {
                    "t": "āva"
                },
                {
                    "t": "āma"
                }
            ],
            [
                {
                    "t": "Ø"
                },
                {
                    "t": "tam"
                },
                {
                    "t": "ta"
                }
            ],
            [
                {
                    "t": "tu"
                },
                {
                    "t": "tām"
                },
                {
                    "t": "ntu"
                }
            ]
        ]
    },
    "opt_p": {
        "id": "opt_p",
        "name": "祈主",
        "voice": "active",
        "tense": "opt",
        "note": "由未主變來。先變 *am*、s、t、va、tam、tām、ma、ta、*ur*。之後 1.在現在時語幹上加 ī。2.加變化過的派生語尾， 以元音起始的語尾前再插入 y。",
        "description": "義務，願，可能，表當然會發生，假設",
        "data": [
            [
                {
                    "t": "īyam"
                },
                {
                    "t": "īva"
                },
                {
                    "t": "īma"
                }
            ],
            [
                {
                    "t": "īs"
                },
                {
                    "t": "ītam"
                },
                {
                    "t": "īta"
                }
            ],
            [
                {
                    "t": "īt"
                },
                {
                    "t": "ītām"
                },
                {
                    "t": "īyus"
                }
            ]
        ]
    },
    "impf_p": {
        "id": "impf_p",
        "name": "未主",
        "voice": "active",
        "tense": "impf",
        "description": "過去時",
        "note": "以輔音開頭的語幹，前面加上 a；以元音開頭的語幹，把開頭的元音三合。詞根有前綴，則前加的 a 位於前綴和語幹之間。",
        "data": [
            [
                {
                    "t": "m"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "va"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "ma"
                }
            ],
            [
                {
                    "t": "s"
                },
                {
                    "t": "tam"
                },
                {
                    "t": "ta"
                }
            ],
            [
                {
                    "t": "t"
                },
                {
                    "t": "tām"
                },
                {
                    "t": "n"
                }
            ]
        ]
    },
    "lat_a": {
        "id": "lat_a",
        "name": "陳中",
        "voice": "middle",
        "tense": "lat",
        "description": "標準現在式",
        "data": [
            [
                {
                    "rule": "del_previous_a",
                    "t": "e"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "vahe"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "mahe"
                }
            ],
            [
                {
                    "t": "se"
                },
                {
                    "rule": "del_previous_a",
                    "t": "ethe"
                },
                {
                    "t": "dhve"
                }
            ],
            [
                {
                    "t": "te"
                },
                {
                    "rule": "del_previous_a",
                    "t": "ete"
                },
                {
                    "t": "nte"
                }
            ]
        ]
    },
    "impv_a": {
        "id": "impv_a",
        "name": "命中",
        "voice": "middle",
        "tense": "impv",
        "description": "假設、希望、未來行為、命令、勸告、祈願、請求",

        "data": [
            [
                {
                    "t": "ai"
                },
                {
                    "t": "āvahai"
                },
                {
                    "t": "āmahai"
                }
            ],
            [
                {
                    "t": "sva"
                },
                {
                    "rule": "del_previous_a",
                    "t": "ethām"
                },
                {
                    "t": "dhvam"
                }
            ],
            [
                {
                    "t": "tām"
                },
                {
                    "rule": "del_previous_a",
                    "t": "etām"
                },
                {
                    "t": "ntām"
                }
            ]
        ]
    },
    "opt_a": {
        "id": "opt_a",
        "name": "祈中",
        "voice": "middle",
        "description": "義務，願，可能，表當然會發生，假設",
        "note": "由未中變來。先變為 *a*、thās、ta、vahi、*āthām*、*ātām*、 mahi、dhvam、*ran*。之後 1.在現在時語幹上加 ī。2.加變化過的派生語尾， 以元音起始的語尾前再插入 y。",
        "tense": "opt",
        "data": [
            [
                {
                    "t": "īya"
                },
                {
                    "t": "īvahi"
                },
                {
                    "t": "īmahi"
                }
            ],
            [
                {
                    "t": "īthās"
                },
                {
                    "t": "īyāthām"
                },
                {
                    "t": "īdhvam"
                }
            ],
            [
                {
                    "t": "īta"
                },
                {
                    "t": "īyātām"
                },
                {
                    "t": "īran"
                }
            ]
        ]
    },
    "impf_a": {
        "id": "impf_a",
        "name": "未中",
        "voice": "middle",
        "tense": "impf",
        "description": "過去時",
        "note": "以輔音開頭的語幹，前面加上 a；以元音開頭的語幹，把開頭的元音三合。詞根有前綴，則前加的 a 位於前綴和語幹之間。",
        "data": [
            [
                {
                    "t": "i"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "vahi"
                },
                {
                    "rule": "long_a_before_v_or_m",
                    "t": "mahi"
                }
            ],
            [
                {
                    "t": "thās"
                },
                {
                    "rule": "del_previous_a",
                    "t": "ethām"
                },
                {
                    "t": "dhvam"
                }
            ],
            [
                {
                    "t": "ta"
                },
                {
                    "rule": "del_previous_a",
                    "t": "etām"
                },
                {
                    "t": "nta"
                }
            ]
        ]
    }
};
