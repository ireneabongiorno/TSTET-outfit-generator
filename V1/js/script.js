// Copyright: https://andrybong.me

/***** VARIABLES GENERALES *****/
document.addEventListener('contextmenu', event => event.preventDefault()); // Right click disabled

/***** BOX INTRO *****/

/*** INTRO BUTTON ***/
document.querySelector(".introButton").addEventListener("click", () => {
    document.querySelector(".introTabContent").classList.add("d-none"); // Hide the intro
    document.querySelector(".tabMenuContent").classList.remove("d-none"); // Show the content

    const loverNavLink = document.getElementById("era-lover-button");
    loverNavLink.classList.add("active"); // Menu
    loverNavLink.setAttribute("aria-selected", "true"); // Menu
    loverNavLink.style.display = "block"; // Menu
    document.getElementById("era-lover-tab").classList.add("active", "show"); // Cards
});


/*** CONTENT ERAS ***/

/* CARDS */
const erasTabs = document.querySelectorAll(".outfitsTabContent .tab-pane"); // Outfits Cards
const erasCardsImg = {};

erasTabs.forEach((erasTab, i) => {
    erasTab.querySelectorAll(".col").forEach((erasCard, j) => {
        erasCard.addEventListener("click", () => {
            const selected = erasTab.getElementsByClassName("selected"); 12

            if (selected.length > 0) {
                selected[0].classList.remove("selected");
            }

            erasCard.classList.add("selected");
            //erasCard.style.pointerEvents = "none";
            erasCardsImg[i] = erasCard.querySelector(".card-img-body").style.backgroundImage.slice(5, -2); // Select only the SRC of the image
            finalImage(); // Update canvas

            nextEra(); // Select the next era

            // Enable the Generate Button when all the images are selected
            if (Object.keys(erasCardsImg).length === erasTabs.length) {
                document.querySelector(".generateButton").removeAttribute("disabled");
                document.querySelector(".generateButton").classList.add("generateButtonActive");
            }
        });
    });
});

/*** NEXT ERA ***/
function nextEra() {
    const activeNavLinks = document.querySelector(".tabMenu .nav-link.active"); // Menu
    const nextNavLinks = activeNavLinks.nextElementSibling; // Menu
    const activeErasTabs = document.querySelector(".tab-pane.active"); // Cards
    const nextErasTabs = activeErasTabs.nextElementSibling; // Cards

    if (nextNavLinks) {
        activeNavLinks.querySelector("img").style.filter = "grayscale(0)";
        activeNavLinks.style.pointerEvents = "all";
        nextNavLinks.style.display = "block";
        activeNavLinks.classList.remove("active");
        nextNavLinks.classList.add("active");
    }

    if (nextErasTabs) {
        activeErasTabs.classList.remove("active", "show");
        nextErasTabs.classList.add("active");
        setTimeout(() => nextErasTabs.classList.add("show"), 400);
    }
}

/*** GENERATE BUTTON ***/
document.querySelector(".generateButton").addEventListener("click", () => {
    //finalImage(); // Update canvas
    document.querySelector("header h1").classList.replace("text-white", "text-black");
    document.querySelector(".logo-white").style.display = "none";
    document.querySelector("header .logo-black").style.display = "inline";
    document.querySelector(".tabCanvas").classList.remove("d-none"); // Show the canvas
    document.querySelector(".tabMenuContent").classList.add("d-none"); // Hide the content
});


/***** CANVAS GENERATOR *****/

/*** FINAL IMAGE ***/
const imgCanvas = document.getElementById("imgCanvas");
const imgCanvasCtx = imgCanvas.getContext("2d");
imgCanvas.width = 850;
imgCanvas.height = 250;

function finalImage() {
    imgCanvasCtx.clearRect(0, 0, imgCanvas.width, imgCanvas.height); // Clear canvas before redrawing
    let x = 0; // X position for drawing

    Object.values(erasCardsImg).forEach(src => {
        const imgCanvas = new Image();
        //newImg.crossOrigin = "anonymous";
        imgCanvas.src = src;

        imgCanvas.onload = () => {
            switch (true) {
                case src.includes("lover"):
                    x = -20;
                    break;
                case src.includes("fearless"):
                    x += 68;
                    break;
                case src.includes("red"):
                    x += 73;
                    break;
                case src.includes("speak_now"):
                    x += 83;
                    break;
                case src.includes("reputation"):
                    x += 40;
                    break;
                case src.includes("folklore"):
                    x += 40;
                    break;
                case src.includes("evermore"):
                    x += 60;
                    break;
                case src.includes("1989"):
                    x += 57;
                    break;
                case src.includes("acoustic"):
                    x += 93;
                    break;
                case src.includes("midnights"):
                    x += 48;
                    break;
                case src.includes("midnights2"):
                    x += 46;
                    break;
                default:
                    x += 75;
                    break;
            }

            imgCanvasCtx.drawImage(imgCanvas, x, 20, 200, 200);
        };
    });
}

/*** DOWNLOAD BUTTON ***/
document.getElementById("downloadFinalImage").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "TSTheErasTour_AllOutfits.png";
    link.href = imgCanvas.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});