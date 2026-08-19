// Copyright: https://andrybong.me

/***** HTML *****/

/*** MENU UL ***/
const tabMenuUl = document.createElement("nav");
tabMenuUl.classList.add("nav", "nav-pills", "flex-column", "align-items-center", "gap-3");
//tabMenuUl.setAttribute("role", "tablist");
document.querySelector(".tabMenu").appendChild(tabMenuUl);

/*** HTML CONTENT ***/
eras.forEach(era => {
    /** HTML MENU **/

    // BUTTON
    const tabMenuUlLiButton = document.createElement("button");
    tabMenuUlLiButton.classList.add("nav-link", "p-0");
    tabMenuUlLiButton.id = "era-" + `${era.name.replace(" ", "-").toLowerCase()}` + "-button";
    tabMenuUlLiButton.setAttribute("data-bs-toggle", "pill");
    tabMenuUlLiButton.setAttribute("data-bs-target", "#era-" + `${era.name.replace(" ", "-").toLowerCase()}` + "-tab");
    tabMenuUlLiButton.setAttribute("type", "button");
    tabMenuUlLiButton.setAttribute("role", "tab");
    tabMenuUlLiButton.setAttribute("aria-controls", "era-" + `${era.name.replace(" ", "-").toLowerCase()}`);
    tabMenuUlLiButton.setAttribute("aria-selected", "false");
    tabMenuUlLiButton.style.pointerEvents = "none";
    tabMenuUlLiButton.style.display = "none";
    tabMenuUl.appendChild(tabMenuUlLiButton);

    // IMG
    const tabMenuUlLiButtonImg = document.createElement("img");
    tabMenuUlLiButtonImg.classList.add("d-block", "w-100");
    tabMenuUlLiButtonImg.src = `${outfitsSRC}` + `${era.name.replace(" ", "_").toLowerCase()}` + "/" + "title.png";
    tabMenuUlLiButtonImg.alt = `${era.name}`;
    tabMenuUlLiButtonImg.style.filter = "grayscale(1)";
    tabMenuUlLiButton.appendChild(tabMenuUlLiButtonImg);

    /** HTML CARDS **/

    // DIV
    const tabPane = document.createElement("div");
    tabPane.classList.add("tab-pane", "fade", "era-" + `${era.name.replace(" ", "-").toLowerCase()}`);
    tabPane.id = "era-" + `${era.name.replace(/\s+/g, "-").toLowerCase()}` + "-tab";
    tabPane.setAttribute("role", "tabpanel");
    tabPane.setAttribute("aria-labelledby", "era-" + `${era.name.replace(/\s+/g, "-").toLowerCase()}` + "-tab");
    document.querySelector(".outfitsTabContent").appendChild(tabPane);

    // ROW
    const tpRow = document.createElement("div");
    tpRow.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
    tabPane.appendChild(tpRow);

    // ERA CARDS
    for (var j = 0; j < era.outfits.length; j++) {
        // COL
        const tprCol = document.createElement("div");
        tprCol.classList.add("col");
        tpRow.appendChild(tprCol);

        // CARD
        const tprcCard = document.createElement("div");
        tprcCard.classList.add("card");
        tprCol.appendChild(tprcCard);

        //  TITULOS
        const tprccCardHeader = document.createElement("div");
        tprccCardHeader.classList.add("card-header");
        tprccCardHeader.innerText = `${era.outfits[j]}`;
        tprcCard.appendChild(tprccCardHeader);

        // OUTFIT
        const tprccCardHeaderImg = document.createElement("div");
        tprccCardHeaderImg.classList.add("card-img-body");
        if (`{era.name.contains("midnights2")}`) {
            tprccCardHeaderImg.style.backgroundImage = `url(${outfitsSRC}${era.name.replace("2", "").replace(" ", "_").toLowerCase()}` + "/" + `${era.outfits[j].replaceAll(" & ", " ").replace(" + ", " ").replaceAll(" ", "_").toLowerCase() + ".png"}`;
        } else {
            tprccCardHeaderImg.style.backgroundImage = `url(${outfitsSRC}${era.name.replace(" ", "_").toLowerCase()}` + "/" + `${era.outfits[j].replaceAll(" & ", " ").replace(" + ", " ").replaceAll(" ", "_").toLowerCase() + ".png"}`;
        }
        tprcCard.appendChild(tprccCardHeaderImg);

        //const tprccCardHeaderImg = document.createElement("img");
        //tprccCardHeaderImg.classList.add("card-img-body");
        //tprccCardHeaderImg.setAttribute("src", `${outfitsSRC}${era.name..replace(" ", "_").toLowerCase()}` + "/" + `${era.outfits[j].replaceAll(" & ", " ").replace(" + ", " ").replaceAll(" ", "_").toLowerCase() + ".png"}`);
        //tprccCardHeaderImg.onerror = function () {
        //tprccCardHeaderImg.setAttribute("src", `${outfitsSRC}unavailable-image.jpg`);
        //console.error("Image not found, using alternate image");
        //}
        //tprccCardHeaderImg.alt = `${era.name}`;
        //tprcCard.appendChild(tprccCardHeaderImg);
    }
});