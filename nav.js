document.addEventListener("DOMContentLoaded", function () {

    // Find the navigation buttons that already exist on the page
    const navLinks = document.querySelectorAll(".nav-list a");

    // Find the current page
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    // Check each navigation button
    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        // Highlight the button for the page we are currently on
        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

});
