export const PERSON_NAMES = ["1st", "2nd", "3rd"];

export const VERB_DATA = {
    "lat_p": {
        "id": "lat_p",
        "name": "陳主",
        "voice": "active",
        "tense": "lat",
        "description": "標準現在式",
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "mi",
                        "rule": "long_a_before_v_or_m"
                    },
                    {
                        "text": "vas",
                        "rule": "long_a_before_v_or_m"
                    },
                    {
                        "text": "mas",
                        "rule": "long_a_before_v_or_m"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "si"
                    },
                    {
                        "text": "thas"
                    },
                    {
                        "text": "tha"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "ti"
                    },
                    {
                        "text": "tas"
                    },
                    {
                        "text": "anti",
                        "rule": "del_previous_a"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "mi",
                    "rule": "long_a_before_v_or_m",
                    "t": "mi"
                },
                {
                    "text": "vas",
                    "rule": "long_a_before_v_or_m",
                    "t": "vas"
                },
                {
                    "text": "mas",
                    "rule": "long_a_before_v_or_m",
                    "t": "mas"
                }
            ],
            [
                {
                    "text": "si",
                    "t": "si"
                },
                {
                    "text": "thas",
                    "t": "thas"
                },
                {
                    "text": "tha",
                    "t": "tha"
                }
            ],
            [
                {
                    "text": "ti",
                    "t": "ti"
                },
                {
                    "text": "tas",
                    "t": "tas"
                },
                {
                    "text": "anti",
                    "rule": "del_previous_a",
                    "t": "anti"
                }
            ]
        ]
    },
    "impv_p": {
        "id": "impv_p",
        "name": "命主",
        "voice": "active",
        "tense": "impv",
        "description": "命令、請求",
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "āni"
                    },
                    {
                        "text": "āva"
                    },
                    {
                        "text": "āma"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "Ø"
                    },
                    {
                        "text": "tam"
                    },
                    {
                        "text": "ta"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "tu"
                    },
                    {
                        "text": "tām"
                    },
                    {
                        "text": "ntu"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "āni",
                    "t": "āni"
                },
                {
                    "text": "āva",
                    "t": "āva"
                },
                {
                    "text": "āma",
                    "t": "āma"
                }
            ],
            [
                {
                    "text": "Ø",
                    "t": "Ø"
                },
                {
                    "text": "tam",
                    "t": "tam"
                },
                {
                    "text": "ta",
                    "t": "ta"
                }
            ],
            [
                {
                    "text": "tu",
                    "t": "tu"
                },
                {
                    "text": "tām",
                    "t": "tām"
                },
                {
                    "text": "ntu",
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
        "note": "由未主變來。先變 *am*、s、t、va、tam、tām、ma、ta、*ur*。之後 1.在现在时语干上加 ī。2.加变化过的派生语尾， 以元音起始的语尾前再插入 y。",
        "description": "義務，願，可能，表當然會發生，假設",
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "īyam"
                    },
                    {
                        "text": "īva"
                    },
                    {
                        "text": "īma"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "īs"
                    },
                    {
                        "text": "ītam"
                    },
                    {
                        "text": "īta"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "īt"
                    },
                    {
                        "text": "ītām"
                    },
                    {
                        "text": "īyus"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "īyam",
                    "t": "īyam"
                },
                {
                    "text": "īva",
                    "t": "īva"
                },
                {
                    "text": "īma",
                    "t": "īma"
                }
            ],
            [
                {
                    "text": "īs",
                    "t": "īs"
                },
                {
                    "text": "ītam",
                    "t": "ītam"
                },
                {
                    "text": "īta",
                    "t": "īta"
                }
            ],
            [
                {
                    "text": "īt",
                    "t": "īt"
                },
                {
                    "text": "ītām",
                    "t": "ītām"
                },
                {
                    "text": "īyus",
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
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "m"
                    },
                    {
                        "text": "va",
                        "rule": "long_a_before_v_or_m"
                    },
                    {
                        "text": "ma",
                        "rule": "long_a_before_v_or_m"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "s"
                    },
                    {
                        "text": "tam"
                    },
                    {
                        "text": "ta"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "t"
                    },
                    {
                        "text": "tām"
                    },
                    {
                        "text": "n"
                    }
                ]
            },
        ],
        "data": [
            [
                {
                    "text": "m",
                    "t": "m"
                },
                {
                    "text": "va",
                    "rule": "long_a_before_v_or_m",
                    "t": "va"
                },
                {
                    "text": "ma",
                    "rule": "long_a_before_v_or_m",
                    "t": "ma"
                }
            ],
            [
                {
                    "text": "s",
                    "t": "s"
                },
                {
                    "text": "tam",
                    "t": "tam"
                },
                {
                    "text": "ta",
                    "t": "ta"
                }
            ],
            [
                {
                    "text": "t",
                    "t": "t"
                },
                {
                    "text": "tām",
                    "t": "tām"
                },
                {
                    "text": "n",
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
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "e",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "vahe",
                        "rule": "long_a_before_v_or_m"
                    },
                    {
                        "text": "mahe",
                        "rule": "long_a_before_v_or_m"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "se"
                    },
                    {
                        "text": "ethe",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "dhve"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "te"
                    },
                    {
                        "text": "ete",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "nte"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "e",
                    "rule": "del_previous_a",
                    "t": "e"
                },
                {
                    "text": "vahe",
                    "rule": "long_a_before_v_or_m",
                    "t": "vahe"
                },
                {
                    "text": "mahe",
                    "rule": "long_a_before_v_or_m",
                    "t": "mahe"
                }
            ],
            [
                {
                    "text": "se",
                    "t": "se"
                },
                {
                    "text": "ethe",
                    "rule": "del_previous_a",
                    "t": "ethe"
                },
                {
                    "text": "dhve",
                    "t": "dhve"
                }
            ],
            [
                {
                    "text": "te",
                    "t": "te"
                },
                {
                    "text": "ete",
                    "rule": "del_previous_a",
                    "t": "ete"
                },
                {
                    "text": "nte",
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
        "description": "命令、請求",
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "ai"
                    },
                    {
                        "text": "āvahai"
                    },
                    {
                        "text": "āmahai"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "sva"
                    },
                    {
                        "text": "ethām",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "dhvam"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "tām"
                    },
                    {
                        "text": "etām",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "ntām"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "ai",
                    "t": "ai"
                },
                {
                    "text": "āvahai",
                    "t": "āvahai"
                },
                {
                    "text": "āmahai",
                    "t": "āmahai"
                }
            ],
            [
                {
                    "text": "sva",
                    "t": "sva"
                },
                {
                    "text": "ethām",
                    "rule": "del_previous_a",
                    "t": "ethām"
                },
                {
                    "text": "dhvam",
                    "t": "dhvam"
                }
            ],
            [
                {
                    "text": "tām",
                    "t": "tām"
                },
                {
                    "text": "etām",
                    "rule": "del_previous_a",
                    "t": "etām"
                },
                {
                    "text": "ntām",
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
        "note": "由未中變來。先變為 *a*、thās、ta、vahi、*āthām*、*ātām*、 mahi、dhvam、*ran*。之後 1.在现在时语干上加 ī。2.加变化过的派生语尾， 以元音起始的语尾前再插入 y。",
        "tense": "opt",
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "īya"
                    },
                    {
                        "text": "īvahi"
                    },
                    {
                        "text": "īmahi"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "īthās"
                    },
                    {
                        "text": "īyāthām"
                    },
                    {
                        "text": "īdhvam"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "īta"
                    },
                    {
                        "text": "īyātām"
                    },
                    {
                        "text": "īran"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "īya",
                    "t": "īya"
                },
                {
                    "text": "īvahi",
                    "t": "īvahi"
                },
                {
                    "text": "īmahi",
                    "t": "īmahi"
                }
            ],
            [
                {
                    "text": "īthās",
                    "t": "īthās"
                },
                {
                    "text": "īyāthām",
                    "t": "īyāthām"
                },
                {
                    "text": "īdhvam",
                    "t": "īdhvam"
                }
            ],
            [
                {
                    "text": "īta",
                    "t": "īta"
                },
                {
                    "text": "īyātām",
                    "t": "īyātām"
                },
                {
                    "text": "īran",
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
        "rows": [
            {
                "person": "1st",
                "cells": [
                    {
                        "text": "i",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "vahi",
                        "rule": "long_a_before_v_or_m"
                    },
                    {
                        "text": "mahi",
                        "rule": "long_a_before_v_or_m"
                    }
                ]
            },
            {
                "person": "2nd",
                "cells": [
                    {
                        "text": "thās"
                    },
                    {
                        "text": "ethām",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "dhvam"
                    }
                ]
            },
            {
                "person": "3rd",
                "cells": [
                    {
                        "text": "ta"
                    },
                    {
                        "text": "etām",
                        "rule": "del_previous_a"
                    },
                    {
                        "text": "nta"
                    }
                ]
            }
        ],
        "data": [
            [
                {
                    "text": "i",
                    "rule": "del_previous_a",
                    "t": "i"
                },
                {
                    "text": "vahi",
                    "rule": "long_a_before_v_or_m",
                    "t": "vahi"
                },
                {
                    "text": "mahi",
                    "rule": "long_a_before_v_or_m",
                    "t": "mahi"
                }
            ],
            [
                {
                    "text": "thās",
                    "t": "thās"
                },
                {
                    "text": "ethām",
                    "rule": "del_previous_a",
                    "t": "ethām"
                },
                {
                    "text": "dhvam",
                    "t": "dhvam"
                }
            ],
            [
                {
                    "text": "ta",
                    "t": "ta"
                },
                {
                    "text": "etām",
                    "rule": "del_previous_a",
                    "t": "etām"
                },
                {
                    "text": "nta",
                    "t": "nta"
                }
            ]
        ]
    }
};
