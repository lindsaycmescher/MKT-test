````javascript
// Create the navigation bar
const navigation = document.createElement("nav");

navigation.innerHTML = `
    <div class="nav-container">

        <a href="index.html" class="nav-logo">
            LINDSAY.
        </a>

        <div class="nav-links">
            <a href="about.html">About Me</a>
            <a href="work.html">Work</a>
            <a href="skills.html">Skills</a>
            <a href="contact.html">Contact</a>
        </div>

    </div>
`;

// Add the navigation to the top of the page
document.body.prepend(navigation);


// Navigation styling
const style = document.createElement("style");

style.innerHTML = `
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(250, 249, 247, 0.97);
        border-bottom: 1px solid #e5e2de;
        z-index: 1000;
    }

    .nav-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo {
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #242424;
        text-decoration: none;
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .nav-links a {
        color: #242424;
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #8b6f5a;
    }

    /* Mobile navigation */
    @media (max-width: 700px) {

        .nav-container {
            padding: 15px 5%;
            flex-direction: column;
            gap: 12px;
        }

        .nav-logo {
            font-size: 20px;
        }

        .nav-links {
            gap: 15px;
        }

        .nav-links a {
            font-size: 11px;
        }
    }
`;

document.head.appendChild(style);

---

# 2. Updated `index.html`

I've removed the navigation CSS and HTML from the previous version because **`navigation.js` now handles it**.

The important part is at the bottom:

```html
<script src="navigation.js"></script>
````

Here's the updated homepage:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Lindsay | Marketing Portfolio</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #faf9f7;
            color: #242424;
            line-height: 1.6;

            /* Space for fixed navigation */
            padding-top: 75px;
        }


        /* =========================
           HERO
        ========================= */

        .hero {
            min-height: calc(100vh - 75px);
            padding: 80px 8%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 60px;
        }

        .hero-text {
            max-width: 650px;
        }

        .hero-text > p:first-child {
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 13px;
            margin-bottom: 20px;
            color: #8b6f5a;
        }

        .hero h1 {
            font-size: clamp(50px, 7vw, 90px);
            line-height: 1;
            margin-bottom: 25px;
        }

        .hero h1 span {
            color: #8b6f5a;
        }

        .hero-description {
            font-size: 18px;
            max-width: 550px;
            color: #666;
            margin-bottom: 35px;
        }


        /* =========================
           BUTTONS
        ========================= */

        .button {
            display: inline-block;
            padding: 14px 25px;
            background-color: #242424;
            color: white;
            text-decoration: none;
            margin-right: 10px;
            transition: 0.3s;
        }

        .button:hover {
            background-color: #8b6f5a;
        }

        .button-outline {
            background-color: transparent;
            color: #242424;
            border: 1px solid #242424;
        }

        .button-outline:hover {
            background-color: #242424;
            color: white;
        }


        /* =========================
           HERO IMAGE
        ========================= */

        .hero-image {
            width: 350px;
            height: 450px;
            background-color: #e8e1da;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #777;
            text-align: center;
        }


        /* =========================
           SECTIONS
        ========================= */

        section {
            padding: 100px 8%;
        }

        .section-title {
            font-size: 42px;
            margin-bottom: 20px;
        }

        .section-intro {
            max-width: 650px;
            color: #666;
            margin-bottom: 50px;
        }


        /* =========================
           ABOUT
        ========================= */

        .about {
            background-color: #eee9e3;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 70px;
        }

        .about-content p {
            color: #555;
            margin-bottom: 20px;
        }


        /* =========================
           PROJECTS
        ========================= */

        .projects {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .project {
            border: 1px solid #ddd;
            background-color: white;
            padding: 35px;
            transition: 0.3s;
        }

        .project:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .project-number {
            font-size: 13px;
            color: #8b6f5a;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }

        .project h3 {
            font-size: 25px;
            margin-bottom: 15px;
        }

        .project p {
            color: #666;
            margin-bottom: 20px;
        }

        .project a {
            color: #242424;
            font-weight: bold;
            text-decoration: none;
        }


        /* =========================
           SKILLS
        ========================= */

        .skills {
            background-color: #242424;
            color: white;
        }

        .skills .section-intro {
            color: #bbb;
        }

        .skill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }

        .skill {
            border: 1px solid #777;
            padding: 12px 20px;
            font-size: 14px;
        }


        /* =========================
           CONTACT
        ========================= */

        .contact {
            text-align: center;
        }

        .contact p {
            max-width: 550px;
            margin: 0 auto 30px;
            color: #666;
        }

        .contact-links {
            display: flex;
            justify-content: center;
            gap: 25px;
            flex-wrap: wrap;
        }

        .contact-links a {
            color: #242424;
            text-decoration: none;
            border-bottom: 1px solid #242424;
        }


        /* =========================
           FOOTER
        ========================= */

        footer {
            text-align: center;
            padding: 30px;
            background-color: #eee9e3;
            color: #777;
            font-size: 13px;
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {

            .hero {
                flex-direction: column;
                align-items: flex-start;
                padding-top: 60px;
            }

            .hero-image {
                width: 100%;
                height: 350px;
            }

            .about-content,
            .projects {
                grid-template-columns: 1fr;
            }

            section {
                padding: 70px 6%;
            }

            .section-title {
                font-size: 34px;
            }

        }

    </style>

</head>


<body>


    <!-- =========================
         HERO
    ========================= -->

    <header class="hero">

        <div class="hero-text">

            <p>Marketing • Creativity • Strategy</p>

            <h1>
                Hi, I'm <span>Lindsay.</span>
            </h1>

            <p class="hero-description">
                I'm a marketing student at Iowa State University who enjoys
                turning ideas into creative content, meaningful brand
                experiences, and strategic marketing solutions.
            </p>

            <a href="work.html" class="button">
                View My Work
            </a>

            <a href="contact.html" class="button button-outline">
                Let's Connect
            </a>

        </div>


        <div class="hero-image">
            <p>Your Photo Here</p>
        </div>

    </header>


    <!-- =========================
         FOOTER
    ========================= -->

    <footer>

        © 2026 Lindsay. All rights reserved.

    </footer>


    <!-- =========================
         NAVIGATION JAVASCRIPT
    ========================= -->

    <script src="navigation.js"></script>

</body>

</html>
```

### 📁 Your GitHub folder should look like this

```text
your-portfolio/
│
├── index.html
├── navigation.js
│
├── about.html
├── work.html
├── skills.html
├── contact.html
│
└── images/
    └── lindsay.jpg
```

The important thing is that **every page gets the same JavaScript file**:

```html
<script src="navigation.js"></script>
```

So your `about.html`, `work.html`, `skills.html`, and `contact.html` can all use the exact same navigation without you having to copy/paste the navigation code into every page.

One other nice feature here: if you later decide you want to change the navigation's font, spacing, logo, colors, or add a dropdown, **you only change `navigation.js` once**, and the change appears across your entire website.
