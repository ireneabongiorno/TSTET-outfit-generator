// Copyright: https://andrybong.me

/***** VARIABLES GENERALES *****/
document.addEventListener('contextmenu', event => event.preventDefault()); // Right click disabled

/***** BOX INTRO *****/

/*** INTRO BUTTONS ***/
function introButton() {
    document.querySelector(".introTabContent").classList.add("d-none"); // Hide the intro
    document.querySelector(".tabMenuContent").classList.replace("d-none", "show"); // Show the content
}
["firstLegOrder", "lastLegOrder"].forEach(erasLegButton => {
    document.getElementById(erasLegButton).addEventListener("click", () => {
        generateHTML(erasLegButton === "firstLegOrder" ? "firstLegID" : "lastLegID");
        introButton();
    });
});


/***** OUTFIT SELECTOR *****/

/*** CONTENT ERAS ***/

/* CARDS */
function generateHTML(erasLeg) {
    // FILTER AND SORT DEPENDING ON THE LEG
    let sortedEras = eras;
    if (erasLeg === "firstLegID") {
        let filteredEras = eras.filter(era => era.firstLegID !== undefined);
        sortedEras = filteredEras.sort((a, b) => Number(a.firstLegID) - Number(b.firstLegID));
    } else {
        sortedEras = eras.sort((a, b) => Number(a.lastLegID) - Number(b.lastLegID));
    }

    /* HTML CONTENT */
    sortedEras.forEach((era, i) => {
        createEraHTML(era, erasLeg);

        // ACTIVE JUST THE FIRST ONE
        if (era.firstLegID === 1 || era.lastLegID === 1) {
            // MENU ERAS
            const tabMenuUlLiButton = document.querySelector(".tabMenu .nav .nav-link");
            tabMenuUlLiButton.classList.add("active");
            tabMenuUlLiButton.classList.remove("d-none");
            tabMenuUlLiButton.setAttribute("aria-selected", "true");

            // CONTENT ERAS
            const erasTabs = document.querySelector(".outfitsTabContent .tab-pane");
            erasTabs.classList.add("active", "show");
            erasTabs.setAttribute("aria-selected", "true");
        }
    });

    /* PROGRESS BAR */
    sortedEras.forEach(era => {
        createProgressBar(era);

        // ACTIVE JUST THE FIRST ONE
        if (era.firstLegID === 1 || era.lastLegID === 1) {
            const progressBar = document.querySelector(".progress-bar");
            progressBar.classList.add("show", "progress-bar-striped", "progress-bar-animated");
        }
    });

    // CARDS SELECTION
    const erasTabs = document.querySelectorAll(".outfitsTabContent .tab-pane"); // Outfits Cards
    const erasCardsImg = {};

    erasTabs.forEach((erasTab, i) => {
        erasTab.querySelectorAll(".col").forEach(erasCard => {
            erasCard.addEventListener("click", () => {
                let erasCardSelected = erasTab.querySelector(".selected");
                if (erasCardSelected) {
                    erasCardSelected.classList.remove("selected");
                }

                erasCard.classList.add("selected");
                erasCardsImg[i] = erasCard.querySelector(".card-img-body").style.backgroundImage.slice(5, -2); // Select only the SRC of the image

                finalImage(erasCardsImg, erasLeg); // Update the canvas
                nextEra(); // Select the next era

                // IF ALL CARDS ARE SELECTED
                if (Object.keys(erasCardsImg).length === erasTabs.length) {
                    document.querySelector(".generateButton").removeAttribute("disabled");
                    document.querySelector(".generateButton").classList.add("generateButtonActive");
                }
            });
        });
    });
}

/* PROGRESS BAR */
function createProgressBar(era) {
    if (era.name !== "Midnights2") {
        const progressBarWidth = 100 / (document.querySelectorAll(".outfitsTabContent .tab-pane").length - 1);

        // PROGRESS BAR
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar", "fade", `era-${era.name.replace(" ", "-").toLowerCase()}`, `bg-${era.name.replace(" ", "-").toLowerCase()}`);
        progressBar.setAttribute("role", "progressbar");
        progressBar.setAttribute("aria-valuenow", `${progressBarWidth}`);
        progressBar.setAttribute("aria-valuemin", 0);
        progressBar.setAttribute("aria-valuemax", `${progressBarWidth}`);
        progressBar.style.width = `${progressBarWidth}%`;
        document.querySelector(".progress").appendChild(progressBar);
    }
}

/* NEXT ERA */
function nextEra() {
    const activeNavLinks = document.querySelector(".tabMenu .nav-link.active"); // Menu
    const activeErasTabs = document.querySelector(".tab-pane.active"); // Cards
    const progressBar = document.querySelector(".progress-bar.progress-bar-striped"); // Progress Bar

    // BUTTON MENU ERAS
    if (activeNavLinks.nextElementSibling) {
        // BUTTON MENU ERAS
        activeNavLinks.nextElementSibling.classList.add("active");
        activeNavLinks.classList.remove("active");
        activeNavLinks.nextElementSibling.setAttribute("aria-selected", "true");
        activeNavLinks.setAttribute("aria-selected", "false");
        activeNavLinks.nextElementSibling.classList.remove("d-none");
        activeNavLinks.classList.remove("pe-none");
        activeNavLinks.querySelector("img").style.filter = "grayscale(0)";
    }

    if (activeErasTabs.nextElementSibling) {
        // DIV CONTENT ERAS
        activeErasTabs.classList.remove("active", "show");
        activeErasTabs.setAttribute("aria-selected", "false");
        activeErasTabs.nextElementSibling.setAttribute("aria-selected", "true");
        activeErasTabs.nextElementSibling.classList.add("active");
        setTimeout(() => activeErasTabs.nextElementSibling.classList.add("show"), 400);
    }

    if (progressBar.nextElementSibling) {
        // PROGRESS BAR
        progressBar.nextElementSibling.classList.add("show", "progress-bar-striped", "progress-bar-animated");
        progressBar.classList.remove("progress-bar-striped", "progress-bar-animated");
    }
}

/*** GENERATE BUTTON ***/
document.querySelector(".generateButton").addEventListener("click", () => {
    document.querySelector("header h1").classList.replace("text-white", "text-black");
    document.querySelector(".logo-white").classList.add("d-none");
    document.querySelector("header .logo-black").classList.replace("d-none", "d-inline");
    document.querySelector(".footer").classList.replace("text-white", "text-black")
    document.querySelector(".tabCanvas").classList.replace("d-none", "show"); // Show the canvas
    document.querySelector(".tabMenuContent").classList.add("d-none"); // Hide the content
});


/***** CANVAS GENERATOR *****/

/*** FINAL IMAGE ***/
function finalImage(erasCardsImg, erasLeg) {
    const myCanvas = document.getElementById("imgCanvas");
    const myCanvasCtx = myCanvas.getContext("2d");
    myCanvas.width = 850;
    myCanvas.height = 450;
    myCanvasCtx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    // BG
    myCanvasCtx.fillStyle = "#ffffff";
    myCanvasCtx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    let x = 0; // Initialize x before using it
    Object.values(erasCardsImg).forEach(src => {
        const myCanvas = new Image();
        myCanvas.src = src;

        myCanvas.onload = () => {
            if (src.includes("acoustic")) {
                if (erasLeg === "firstLegID") {
                    x += 45;
                } else {
                    x += 90;
                }
            } else if (src.includes("fearless")) {
                if (erasLeg === "firstLegID") {
                    x = 75;
                } else {
                    x += 65;
                }
            } else if (src.includes("speak_now")) {
                if (erasLeg === "firstLegID") {
                    x += 65;
                } else {
                    x += 95;
                }
            } else if (src.includes("1989")) {
                if (erasLeg === "firstLegID") {
                    x += 55;
                } else {
                    x += 48;
                }
            } else if (src.includes("reputation")) {
                if (erasLeg === "firstLegID") {
                    x += 70;
                } else {
                    x += 60;
                }
            } else if (src.includes("red")) {
                if (erasLeg === "firstLegID") {
                    x += 93;
                } else {
                    x += 83;
                }
            } else if (src.includes("lover")) {
                if (erasLeg === "firstLegID") {
                    x = 0;
                } else {
                    x = -20;
                }
            } else if (src.includes("folklore")) {
                if (erasLeg === "firstLegID") {
                    x += 90;
                } else {
                    x += 55;
                }
            } else if (src.includes("evermore")) {
                if (erasLeg === "firstLegID") {
                    x += 65;
                } else {
                    x += 48;
                }
            } else if (src.includes("midnights")) {
                if (erasLeg === "firstLegID") {
                    x += 55;
                } else {
                    x += 45;
                }
            } else if (src.includes("ttpd")) {
                if (erasLeg === "firstLegID") {
                    x = 0;
                } else {
                    x += 80;
                }
            }

            myCanvasCtx.drawImage(myCanvas, x, 164, 200, 200);
        }
    });

    drawLogos(myCanvasCtx); // Logos
    drawErasColors(myCanvasCtx); // Colors
}

/* TOP AND BOTTOM LOGOS */
function drawLogos(myCanvasCtx) {
    const myCanvasImgLogoTS = new Image();
    myCanvasImgLogoTS.onload = () => {
        myCanvasCtx.drawImage(myCanvasImgLogoTS, 20, 4, 800, 182);
    }
    myCanvasImgLogoTS.src = "img/logo-TS-black.png";

    const myCanvasImgLogoTET = new Image();
    myCanvasImgLogoTET.onload = () => {
        myCanvasCtx.drawImage(myCanvasImgLogoTET, 20, 360, 800, 85);
    }
    myCanvasImgLogoTET.src = "img/logo-TET-black.png";
}

function drawErasColors(myCanvasCtx) {
    const erasColors = ['--ts-debut', '--ts-fearless', '--ts-speak-now', '--ts-red', '--ts-1989-2', '--ts-reputation', '--ts-lover', '--ts-folklore', '--ts-evermore', '--ts-midnights-2', '--ts-ttpd'];
    let width = 73;
    let x = 20;

    // TOP AND BOTTOM LINES
    erasColors.forEach(eraColor => {
        myCanvasCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue(eraColor).trim();
        myCanvasCtx.fillRect(x, 0, width, 7);
        myCanvasCtx.fillRect(x, 443, width, 7);
        x += width;
    });
}


/*** DOWNLOAD BUTTON ***/
document.querySelector(".downloadButton").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "TSTheErasTour_AllOutfits.png";
    link.href = imgCanvas.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});