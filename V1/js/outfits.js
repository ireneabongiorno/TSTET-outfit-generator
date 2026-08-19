// Copyright: https://andrybong.me

const outfitsSRC = "img/ts_tet_outfits/";

const eras = [
    {
        name: "Lover",
        discID: 7,
        outfits: ["Pink + Pink Jacket", "Pink & Blue + Silver Jacket", "Purple + Purple Jacket", "Gold & Blue + Black Jacket", "Tangerine + Tangerine Jacket"],

        dresses: {
            dress: ["Pink", "Pink & Blue", "Purple", "Gold & Blue", "Tangerine"],
            jacket: ["Pink", "Silver", "Purple", "Black", "Tangerine"],
            guitar: ["Pink", "Blue", "Purple"]
        }
    },
    {
        name: "Fearless",
        discID: 2,
        outfits: ["Long Gold", "Gold Fringe", "Long Silver", "Black & Gold", "Tiger Stripes", "Blue & Silver"],

        dresses: {
            dress: ["Long Gold", "Short Fringe", "Long Silver", "Black & Silver", "Tiger Stripes", "Blue & Silver"],
            guitar: ["Koi Fish", "None"]
        }
    },
    {
        name: "Red",
        discID: 4,
        outfits: ["A Lot", "Is Not", "Ew", "Trouble", "Me", "Never Ever"],

        dresses: {
            tshirt: ["A Lot", "Is Not TV", "Ew", "Trouble", "Me", "Never Ever"],
            dress: ["Red Romper", "Red Romper 2.0", "ATW Robe",],
            guitar: ["Black", "Brown"]
        }
    },
    {
        name: "Speak Now",
        discID: 3,
        outfits: ["Swirls", "Champagne", "Pink", "Cupcake", "White & Silver", "Blue", "Tissue Flower", "Wonderstruck", "Elsa"]
    },
    {
        name: "Reputation",
        discID: 6,
        outfits: ["Red & Black", "Gold & Black"]
    },
    {
        name: "Folklore",
        discID: 8,
        outfits: ["Yellow", "Berry", "Light Pink", "Blue", "Green", "Cream", "Purple"]
    },
    {
        name: "Evermore",
        discID: 9,
        outfits: ["Yellow + Green Cape", "Bronze + Green Cape", "Brown Cape"]
    },
    {
        name: "1989",
        discID: 5,
        outfits: ["Original Pink", "Original Green", "Original Orange", "Original Blue", "Yellow & Yellow", "Yellow & Pink", "Yellow & Orange", "Yellow & Green", "Yellow & Blue", "Yellow & Purple", "Pink & Pink", "Pink & Yellow", "Pink & Orange", "Pink & Green", "Pink & Blue", "Pink & Purple", "Orange & Orange", "Orange & Yellow", "Orange & Pink", "Orange & Green", "Orange & Blue", "Orange & Purple", "Green & Pink", "Green & Orange", "Green & Blue", "Green & Purple", "Blue & Blue", "Blue & Yellow", "Blue & Pink", "Blue & Orange", "Blue & Green", "Blue & Purple", "Purple & Purple", "Purple & Yellow", "Purple & Pink", "Purple & Orange", "Purple & Green", "Purple & Blue"],

        dresses: {
            top: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"],
            bottom: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"],
            leftShoe: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"],
            rightShoe: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"]
        }
    },
    {
        name: "TTPD",
        discID: 11,
        outfits: ["White + White & Silver Jacket", "White & Silver + White & Silver Jacket", "Black + Silver & Black Jacket", "Black + Gold & Black Jacket", "Black + Metallic Jacket", "Gold & Black + Gold & Black Jacket", "Graphite + Metallic Jacket"],

        dresses: {
            dress: ["Ruining My Life", "Who's Afraid"],
            body: ["White", "White & Silver", "Black", "Graphite", "Gold & Black", "Gold"],
            jacket: ["White & Silver", "Gold & Black", "Silver & Black", "Metallic"],
            gloves: ["Black", "Sparkly Black", "White", "Sparkly White", "No Gloves"]
        }
    },
    {
        name: "Acoustic",
        discID: 1,
        outfits: ["Original Blue", "Original Red", "Original Yellow", "Original Green", "Bright Pink", "Orange", "Ocean Blue", "Supernova", "Sunrise Boulevard", "Betta Fish", "Koi Fish"]
    },
    {
        name: "Midnights",
        discID: 10,
        outfits: ["Pink", "Light Purple", "Silver", "Iridescent", "Dark Purple", "Bright Blue", "Blue & Silver"],

        dresses: {
            dress: ["Pink", "Light Purple", "Silver", "Iridescent", "Dark Purple", "Bright Blue", "Blue & Silver"],
            body: ["Lines", "Scallops", "Cutouts", "Chevron", "Moonstone"],
            jacket: ["Multicolor", "Magenta", "Pink", "Blue", "No jacket"]
        }
    }, {
        name: "Midnights2",
        discID: 10,
        outfits: ["Lines + No Jacket", "Lines + Multicolor Jacket", "Lines + Blue Jacket", "Lines + Magenta Jacket", "Lines + Pink Jacket", "Scallops + Multicolor Jacket", "Scallops + Blue Jacket", "Scallops + Magenta Jacket", "Scallops + Pink Jacket", "Cutouts + Multicolor Jacket", "Cutouts + Blue Jacket", "Cutouts + Magenta Jacket", "Cutouts + Pink Jacket", "Chevron + Multicolor Jacket", "Chevron + Blue Jacket", "Chevron + Magenta Jacket", "Chevron + Pink Jacket", "Moonstone + Multicolor Jacket", "Moonstone + Blue Jacket", "Moonstone + Magenta Jacket", "Moonstone + Pink Jacket"],
    }
]