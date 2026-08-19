// Copyright: https://ireneabongiorno.com

const outfitsSRC = "img/ts_tet_outfits/";

const eras = [
    {
        discID: 1,
        name: "Acoustic", // DEBUT
        firstLegID: 9,
        lastLegID: 10,
        firstLegOutfits: ["Original Blue", "Original Red", "Original Yellow", "Original Green"],
        lastLegOutfits: ["Bright Pink", "Orange", "Ocean Blue", "Supernova", "Sunrise Boulevard", "Betta Fish", "Koi Fish"]
    },
    {
        discID: 2,
        name: "Fearless",
        firstLegID: 2,
        firstLegOutfits: ["Short Fringe", "Long Gold", "Long Silver"],
        lastLegID: 2,
        lastLegOutfits: ["Short Fringe", "Long Gold", "Long Silver", "Black & Gold", "Tiger Stripes", "Blue & Silver"],
        outfits: {
            dress: ["Short Fringe", "Long Gold", "Long Silver", "Black & Gold", "Tiger Stripes", "Blue & Silver"],
            guitar: ["Koi Fish", "None"]
        }
    },
    {
        discID: 3,
        name: "Speak Now",
        firstLegID: 5,
        firstLegOutfits: ["Champagne", "Pink", "Tissue Flower", "White & Silver", "Cupcake", "Blue"],
        lastLegID: 4,
        lastLegOutfits: ["Champagne", "Pink", "Cupcake", "Blue", "Swirls", "Wonderstruck", "Elsa"],
    },
    {
        discID: 4,
        name: "Red",
        firstLegID: 6,
        firstLegOutfits: ["Ew", "A Lot", "Never Ever"],
        lastLegID: 3,
        lastLegOutfits: ["Ew", "A Lot", "Never Ever", "Is Not", "Me", "Trouble"],
        outfits: {
            tshirt: ["A Lot", "Is Not", "Ew", "Trouble", "Me", "Never Ever"],
            dress: ["Red Romper", "Red Romper 2.0", "ATW Robe"],
            guitar: ["Black", "Brown"]
        }
    },
    {
        discID: 5,
        name: "1989",
        firstLegID: 8,
        firstLegOutfits: ["Original Pink", "Original Green", "Original Orange", "Original Blue"],
        lastLegID: 8,
        lastLegOutfits: ["Yellow & Yellow", "Yellow & Pink", "Yellow & Orange", "Yellow & Green", "Yellow & Blue", "Yellow & Purple", "Pink & Pink", "Pink & Yellow", "Pink & Orange", "Pink & Green", "Pink & Blue", "Pink & Purple", "Orange & Orange", "Orange & Yellow", "Orange & Pink", "Orange & Green", "Orange & Blue", "Orange & Purple", "Green & Pink", "Green & Orange", "Green & Blue", "Green & Purple", "Blue & Blue", "Blue & Yellow", "Blue & Pink", "Blue & Orange", "Blue & Green", "Blue & Purple", "Purple & Purple", "Purple & Yellow", "Purple & Pink", "Purple & Orange", "Purple & Green", "Purple & Blue"],
        outfits: {
            top: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"],
            bottom: ["Yellow", "Pink", "Orange", "Green", "Blue", "Purple"]
        }
    },
    {
        discID: 6,
        name: "Reputation",
        firstLegID: 4,
        firstLegOutfits: ["Red & Black"],
        lastLegID: 5,
        lastLegOutfits: ["Red & Black", "Gold & Black"]
    },
    {
        discID: 7,
        name: "Lover",
        firstLegID: 1,
        firstLegOutfits: ["Pink + Pink Jacket", "Pink & Blue + Silver Jacket", "Purple + Purple Jacket", "Gold & Blue + Black Jacket"],
        lastLegID: 1,
        lastLegOutfits: ["Pink + Pink Jacket", "Pink & Blue + Silver Jacket", "Purple + Purple Jacket", "Gold & Blue + Black Jacket", "Tangerine + Tangerine Jacket"],
        outfits: {
            dress: ["Pink", "Pink & Blue", "Purple", "Gold & Blue", "Tangerine"],
            jacket: ["Pink", "Silver", "Purple", "Black", "Tangerine"],
            guitar: ["Pink", "Blue", "Purple"]
        }
    },
    {
        discID: 8,
        name: "Folklore",
        firstLegID: 7,
        firstLegOutfits: ["Purple", "Cream", "Light Pink", "Blue", "Green"],
        lastLegID: 6,
        lastLegOutfits: ["Cream", "Light Pink", "Blue", "Green", "Yellow", "Berry"],
    },
    {
        discID: 9,
        name: "Evermore",
        firstLegID: 3,
        firstLegOutfits: ["Yellow + Green Cape", "Bronze + Green Cape"],
        lastLegID: 7,
        lastLegOutfits: ["Brown Cape"],
    },
    {
        discID: 10,
        name: "Midnights",
        firstLegID: 10,
        firstLegOutfits: ["Blue & Silver", "Bright Blue", "Pink", "Light Purple", "Silver", "Iridescent", "Dark Purple"],
        lastLegID: 11,
        lastLegOutfits: ["Blue & Silver", "Bright Blue", "Pink", "Light Purple", "Silver", "Iridescent", "Dark Purple"],
        outfits: {
            dress: ["Blue & Silver", "Bright Blue", "Pink", "Light Purple", "Silver", "Iridescent", "Dark Purple"],
            body: ["Lines", "Scallops", "Cutouts", "Chevron", "Moonstone"],
            jacket: ["Multicolor", "Magenta", "Pink", "Blue", "No jacket"]
        }
    },
    {
        discID: 11,
        name: "Midnights2",
        firstLegID: 11,
        firstLegOutfits: ["Lines + No Jacket", "Lines + Multicolor Jacket", "Lines + Blue Jacket", "Lines + Magenta Jacket", "Lines + Pink Jacket", "Scallops + Multicolor Jacket", "Scallops + Blue Jacket", "Scallops + Magenta Jacket", "Scallops + Pink Jacket", "Cutouts + Multicolor Jacket", "Cutouts + Blue Jacket", "Cutouts + Magenta Jacket", "Cutouts + Pink Jacket"],
        lastLegID: 12,
        lastLegOutfits: ["Scallops + Multicolor Jacket", "Scallops + Blue Jacket", "Scallops + Magenta Jacket", "Cutouts + Multicolor Jacket", "Cutouts + Blue Jacket", "Cutouts + Magenta Jacket", "Chevron + Multicolor Jacket", "Chevron + Blue Jacket", "Chevron + Magenta Jacket", "Moonstone + Multicolor Jacket", "Moonstone + Blue Jacket", "Moonstone + Magenta Jacket"]
    },
    {
        discID: 12,
        name: "TTPD",
        firstLegID: undefined,
        firstLegOutfits: undefined,
        lastLegID: 9,
        lastLegOutfits: ["White + White & Silver Jacket", "White & Silver + White & Silver Jacket", "Black + Silver & Black Jacket", "Black + Gold & Black Jacket", "Black + Metallic Jacket", "Gold & Black + Gold & Black Jacket", "Graphite + Metallic Jacket"],
        outfits: {
            dress: ["Ruining My Life", "Who's Afraid"],
            body: ["White", "White & Silver", "Black", "Graphite", "Gold & Black", "Gold"],
            jacket: ["White & Silver", "Gold & Black", "Silver & Black", "Metallic"],
            gloves: ["Black", "Sparkly Black", "White", "Sparkly White", "No Gloves"]
        }
    }
]