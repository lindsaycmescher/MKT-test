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
