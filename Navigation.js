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



/* =========================================
   PINK SPARKLE CURSOR
   ========================================= */

const sparkleSymbols = [
    "✦",
    "✧",
    "⋆",
    "✶",
    "✷",
    "♡"
];

let lastSparkleTime = 0;


document.addEventListener("mousemove", function(event) {

    const now = Date.now();

    if (now - lastSparkleTime < 45) {
        return;
    }

    lastSparkleTime = now;

    createSparkle(event.clientX, event.clientY);
});


function createSparkle(x, y) {

    const sparkle = document.createElement("span");

    sparkle.className = "cursor-sparkle";

    sparkle.textContent =
        sparkleSymbols[
            Math.floor(Math.random() * sparkleSymbols.length)
        ];

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const randomX =
        Math.floor(Math.random() * 80) - 40;

    const randomY =
        Math.floor(Math.random() * 80) - 40;

    sparkle.style.setProperty(
        "--sparkle-x",
        `${randomX}px`
    );

    sparkle.style.setProperty(
        "--sparkle-y",
        `${randomY}px`
    );

    sparkle.style.fontSize =
        `${Math.random() * 10 + 8}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}



/* =========================================
   START WEBSITE
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {

    createNavigation();

});
