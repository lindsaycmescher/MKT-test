/* =========================================
   REUSABLE SITE NAVIGATION
   ========================================= */

const navigation = [
    {
        name: "Home",
        url: "index.html"
    },
    {
        name: "About",
        url: "about.html"
    },
    {
        name: "Projects",
        url: "projects.html"
    },
    {
        name: "Contact",
        url: "contact.html"
    }
];


/* -----------------------------------------
   CREATE NAVIGATION
   ----------------------------------------- */

function createNavigation() {

    const navContainer = document.getElementById("site-nav");

    if (!navContainer) return;

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const nav = document.createElement("nav");

    nav.className = "primary-nav";
    nav.setAttribute("aria-label", "Primary navigation");

    const list = document.createElement("ul");

    list.className = "nav-list";

    navigation.forEach(item => {

        const listItem = document.createElement("li");

        const link = document.createElement("a");

        link.href = item.url;
        link.textContent = item.name;

        /* Automatically highlight current page */

        if (currentPage === item.url) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    nav.appendChild(list);

    navContainer.appendChild(nav);
}


/* -----------------------------------------
   INITIALIZE
   ----------------------------------------- */

document.addEventListener("DOMContentLoaded", createNavigation);
/* =========================================
   GLITTER CURSOR EFFECT ✨
   ========================================= */

const glitterSymbols = ["✦", "✧", "⋆", "✶", "✷", "❋"];

let lastGlitter = 0;

document.addEventListener("mousemove", function(event) {

    const now = Date.now();

    // Controls how often glitter appears
    if (now - lastGlitter < 50) {
        return;
    }

    lastGlitter = now;

    createGlitter(
        event.clientX,
        event.clientY
    );

});


function createGlitter(x, y) {

    const glitter =
        document.createElement("span");

    glitter.className = "cursor-glitter";

    // Pick a random sparkle
    glitter.textContent =
        glitterSymbols[
            Math.floor(
                Math.random() *
                glitterSymbols.length
            )
        ];


    // Put glitter where the cursor is
    glitter.style.left = `${x}px`;
    glitter.style.top = `${y}px`;


    // Random movement after appearing
    const moveX =
        Math.random() * 60 - 30;

    const moveY =
        Math.random() * 60 - 30;


    glitter.style.setProperty(
        "--move-x",
        `${moveX}px`
    );

    glitter.style.setProperty(
        "--move-y",
        `${moveY}px`
    );


    // Random size
    const size =
        Math.random() * 12 + 8;

    glitter.style.fontSize =
        `${size}px`;


    document.body.appendChild(glitter);


    // Remove glitter after animation
    setTimeout(function() {

        glitter.remove();

    }, 900);

}
