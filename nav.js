document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }


    // Determine which page the visitor is currently viewing
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    // Create the primary navigation
    navigation.innerHTML = `

        <nav class="primary-nav">

            <ul class="nav-list">

                <li>
                    <a
                        href="index.html"
                        class="${currentPage === "index.html" ? "active" : ""}">
                        Home
                    </a>
                </li>


                <li>
                    <a
                        href="about.html"
                        class="${currentPage === "about.html" ? "active" : ""}">
                        About
                    </a>
                </li>


                <li>
                    <a
                        href="portfolio.html"
                        class="${currentPage === "portfolio.html" ? "active" : ""}">
                        Portfolio
                    </a>
                </li>


                <li>
                    <a
                        href="contact.html"
                        class="${currentPage === "contact.html" ? "active" : ""}">
                        Contact
                    </a>
                </li>

            </ul>

        </nav>

    `;

});
