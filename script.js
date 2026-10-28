const projects = {
    frsh: {
        title: "F.R.S.H.",
        startDate: "2025-11",
        description: "Solo-developed an FPS with Source-inspired movement \
            and combat built around chaining a boomerang cleaver and shotgun. \
            Features a test arena and one level including a tutorial.",
        logo: {
            static: "images/frsh.png",
            animated: "images/frsh.gif"
        },
        featuredDescription: "Solo-developed fast-paced boomer shooter focused on responsive movement, impactful combat, and satisfying game feel.",
        contentFile: "project-content/frsh.html",
        link: "https://fikou.itch.io/frsh",
        groupSize: 1,
        engine: "Unity",
        timeframe: "Nov-Dec 2025",
        school: "Futuregames Warsaw",
        role: "Solo Developer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Combat Design", class: "tag-combat" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    ss13: {
        title: "TGStation 13",
        startDate: "2019-01",
        description: "An open-source, round-based multiplayer roleplaying game set aboard a space station. \
            Contributing since 2019 and maintaining the project since 2022, reviewing pull requests, \
            shaping design direction, and helping onboard new contributors.",
        metric: "One of the largest open-source game projects, running for over 15 years with 60k pull requests.",
        logo: {
            static: "images/ss13.png",
            animated: "images/ss13.gif"
        },
        link: "https://tgstation13.org/",
        groupSize: "30~",
        engine: "BYOND",
        timeframe: "2019-2026",
        role: "OSS Contributor, Codebase Maintainer",
        tags: [
            { label: "Project Maintainer", class: "tag-maint" },
            { label: "System Design", class: "tag-systems" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    countdashula: {
        title: "Count Dashula",
        startDate: "2024-05",
        description: "First solo project, featuring a platformer character controller with mouse-based dashing, \
            as well as three unique levels. Developed over two weeks while learning the engine.",
        logo: {
            static: "images/cnt.png",
            animated: "images/cnt.gif"
        },
        link: "https://fikou.itch.io/count-dashula",
        groupSize: 1,
        engine: "Godot",
        timeframe: "May 2024",
        role: "Solo Developer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    voita: {
        title: "Voita",
        startDate: "2026-01",
        description: "Led a team of 5 designers in a student project, a mobile reverse-horror game \
            about an evolving monster. Wrote down the GDD, designed core systems and cooperated with programmers on implementing them.",
        logo: {
            static: "images/voita.png",
            animated: "images/voita.gif"
        },
        link: "https://futuregames.itch.io/voita",
        groupSize: 13,
        engine: "Unity",
        timeframe: "Jan-Feb 2026",
        school: "Futuregames Warsaw",
        role: "Lead/Systems Designer",
        tags: [
            { label: "System Design", class: "tag-systems" },
        ]
    },
    wastemancer: {
        title: "Wastemancer",
        startDate: "2025-10",
        description: "Worked in a team of 5 designers on a student project, an arcade game where a \
            magical raccoon cleans the world of trash. Designed the spellcasting system and created half of the game's sounds.",
        logo: {
            static: "images/wst.png",
            animated: "images/wst.gif"
        },
        link: "https://futuregames.itch.io/wastemancer",
        groupSize: 12,
        engine: "Unity",
        timeframe: "Oct-Nov 2025",
        school: "Futuregames Warsaw",
        role: "Systems/Sound Designer",
        tags: [
            { label: "System Design", class: "tag-systems" },
        ]
    },
    parasozhyt: {
        title: "Parasozhyt",
        startDate: "2025-10",
        description: "Worked in a team of designers on a game jam, implementing the character controller and weapons \
            in a corridor shooter where a dying parasite has to constantly swap between hosts.",
        metric: "1st place at Futuregames Jam 2025.",
        logo: {
            static: "images/prsz.png",
            animated: "images/prsz.gif"
        },
        link: "https://gamekernel.itch.io/parasozhyt",
        groupSize: 10,
        engine: "Unity",
        timeframe: "Oct 2025",
        school: "Futuregames Warsaw",
        role: "Systems/3Cs/Sound Designer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "System Design", class: "tag-systems" },
            { label: "Combat Design", class: "tag-combat" },
        ]
    },
    castlescapade: {
        title: "Castlescapade",
        startDate: "2025-04",
        description: "Solo-developed a platformer themed around greed, with a castle to rob while it falls apart, \
            changing itself, and a movement system based on sliding which gives speed while taking away control. \
            Implemented my first metrics gym.",
        logo: {
            static: "images/cstl.png",
            animated: "images/cstl.gif"
        },
        link: "https://fikou.itch.io/castlescapade",
        groupSize: 1,
        engine: "Unreal",
        timeframe: "Apr-Jul 2025",
        school: "Breda University of Applied Sciences",
        role: "Solo Developer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    lichstorment: {
        title: "Lich's Torment",
        startDate: "2025-05",
        description: "Worked in a team of 3 designers on a student project, an arena shooter \
            with a wizard trying to survive a lich's endless hordes. Designed 3Cs, wrote feature specs for programmers and artists, \
            implemented player attacks, VFX, and a system showing dangers behind you.",
        logo: {
            static: "images/lich.png",
            animated: "images/lich.gif"
        },
        link: "https://buas.itch.io/team-rapture",
        groupSize: 10,
        engine: "Unreal",
        timeframe: "May-Jul 2025",
        school: "Breda University of Applied Sciences",
        role: "3Cs Designer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Combat Design", class: "tag-combat" },
        ]
    },
    greg: {
        title: "Greg the Frog: Burning Escape",
        startDate: "2025-10",
        description: "Co-operated with the designers on reworking the movement for a \
            student project, a speedrunning game about a frog with a grappling hook tongue.",
        metric: "1st place at Futuregames Warsaw GP1 Jury Day.",
        logo: {
            static: "images/grg.png",
            animated: "images/grg.gif"
        },
        link: "https://futuregames.itch.io/greg-the-frog",
        groupSize: 14,
        engine: "Unity",
        timeframe: "Oct-Nov 2025",
        school: "Futuregames Warsaw",
        role: "3Cs Support",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
        ]
    },
    barreland: {
        title: "Barreland",
        startDate: "2025-09",
        description: "Solo-developed a project to learn Unity, an arcade game where the player has to \
            precisely throw exploding barrels at infinitely spawning enemy hordes.",
        logo: {
            static: "images/brl.png",
            animated: "images/brl.gif"
        },
        link: "https://fikou.itch.io/barreland",
        groupSize: 1,
        engine: "Unity",
        timeframe: "Sep 2025",
        school: "Futuregames Warsaw",
        role: "Solo Developer",
        tags: [
            { label: "System Design", class: "tag-systems" },
        ]
    },
    gyruss: {
        title: "Gyruss Remake",
        startDate: "2024-12",
        description: "Solo-developed a project to learn Unreal Engine, a remake of the 1983's Konami classic, \
            researched and analyzed parts of the game to the exact frame to recreate them accurately.",
        logo: {
            static: "images/grs.png",
            animated: "images/grs.gif"
        },
        link: "https://fikou.itch.io/gyruss",
        groupSize: "1",
        engine: "Unreal",
        timeframe: "Dec, Mar-Apr 2025",
        school: "Breda University of Applied Sciences",
        role: "Solo Developer",
        tags: [
            { label: "System Design", class: "tag-systems" },
        ]
    },
    diggy: {
        title: "Diggy and the Forgotten Caves",
        startDate: "2025-02",
        description: "Worked in a designer-only student team on a 2D platformer with a mole digging through dirt. \
            Contributed to the character controller, made a level one-pager, and made the projects's VFX.",
        logo: {
            static: "images/dgg.png",
            animated: "images/dgg.gif"
        },
        link: "https://buas-blockc2025-team5.itch.io/diggy-and-the-forgotten-caves",
        groupSize: "4",
        engine: "Unreal",
        timeframe: "Feb-Apr 2025",
        school: "Breda University of Applied Sciences",
        role: "3Cs Support",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
        ]
    },
    balkanica: {
        title: "Balkanica",
        startDate: "2025-03",
        description: "Worked with another designer on an EU4 mod for the official Modathon. \
            Learned scripting in Clausewitz, researched early-modern Balkan history and designed over 30 unique quests.",
        featuredDescription: "EU4 mod that adds regional flavor to nations in the Balkans.",
        metric: "Runner up in regional flavor category during the official Modathon, over 1500 unique subscribers.",
        logo: {
            static: "images/blk.png",
            animated: "images/blk.gif"
        },
        link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3452982255",
        groupSize: "4",
        engine: "Clausewitz",
        timeframe: "Mar 2025",
        role: "Lead/Systems/Content Designer",
        tags: [
            { label: "System Design", class: "tag-systems" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    frosthaul: {
        title: "Frost Haul",
        startDate: "2026-04",
        description: "Led a team of 4 designers in a student project, a co-op simulation game about delivering cargo \
            on a falling-apart train in a frozen wasteland. Decided the core pillars, wrote down the GDD, \
            designed and implemented the character controller and game feel.",
        featuredDescription: "Co-op simulation game about moving cargo through a frozen wasteland.",
        logo: {
            static: "images/fhl.png",
            animated: "images/fhl.gif"
        },
        link: "https://futuregames.itch.io/frosthaul",
        groupSize: 11,
        engine: "Unreal",
        timeframe: "Apr-Jun 2026",
        school: "Futuregames Warsaw",
        role: "Lead/Systems/3Cs Designer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "System Design", class: "tag-systems" },
        ]
    },
    jupiter: {
        title: "Jupiter Shines On You",
        startDate: "2026-08",
        description: "Worked in a designer-only student team on an on-rails shooter combined with a bullet hell. \
            Designed and implemented the character controller, parrying, two firing modes, the level auto-scroll, \
            and the system of grazing against bullets used to fly and cast powerful spells.",
        logo: {
            static: "images/jsoy.png",
            animated: "images/jsoy.gif"
        },
        link: "https://fikou.itch.io/jupiter-shines-on-you",
        groupSize: 3,
        engine: "Unreal",
        timeframe: "Aug 2026",
        school: "Futuregames Warsaw",
        role: "3Cs/Combat Designer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Combat Design", class: "tag-combat" },
        ]
    },
    dontmindme: {
        title: "Don't Mind Me",
        startDate: "2026-09",
        description: "Worked in a team of 5 designers on a student project, a stealth-action game about a mimic defending \
            its hoard from an adventuring party. Designed and implemented the character controller, featuring an extendable tongue used for \
            combat, interaction, and traversal.",
        metric: "Winner at Futuregames Warsaw GP4 Jury Day. Character was highlighted by the jury as a standout part of the game.",
        logo: {
            static: "images/dmm.png",
            animated: "images/dmm.gif"
        },
        link: "https://futuregames.itch.io/dontmindme",
        groupSize: 8,
        engine: "Unreal",
        timeframe: "Apr-Jun 2026",
        school: "Futuregames Warsaw",
        role: "3Cs/Combat Designer",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Combat Design", class: "tag-combat" },
        ]
    },
};

/* ========================================
   ALL PROJECTS GRID
======================================== */

function renderProjects(containerId, projectKeys) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = projectKeys.map(key => {
        const proj = projects[key];

        return `
            <article class="project-card">
                <img
                    src="${proj.logo.static}"
                    data-static="${proj.logo.static}"
                    data-animated="${proj.logo.animated}"
                    class="project-image"
                    alt="${proj.title}"
                >

                <div class="project-info">
                    <h3>
                        <span class="project-meta">${proj.title}</span>
                    </h3>

                    <h3>
                        <span class="project-meta">
                            ${proj.groupSize == 1
                                ? "Solo"
                                : "Team of " + proj.groupSize}
                        </span>
                    </h3>

                    <h3>
                        <span class="project-meta">
                            ${proj.engine} ${engineSVG(proj.engine)}
                        </span>
                    </h3>

                    ${proj.timeframe
                        ? `<h3>
                            <span class="project-meta">${proj.timeframe}</span>
                        </h3>`
                        : ""}

                    <div class="tags">
                        ${proj.tags.map(tag =>
                            `<span class="${tag.class}">${tag.label}</span>`
                        ).join("")}
                    </div>
                </div>

                <p class="description">${proj.description}</p>

                ${proj.metric
                    ? `<p class="metric">${proj.metric}</p>`
                    : ""}

                ${proj.link || proj.contentFile
                    ? `<div class="project-card-actions">
                        ${proj.link
                            ? `<a
                                href="${proj.link}"
                                class="read-more"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Play ▶</a>`
                            : ""}
                        ${proj.contentFile
                            ? `<a
                                href="project.html?id=${encodeURIComponent(key)}"
                                class="read-more"
                            >Read More ▶</a>`
                            : ""}
                    </div>`
                    : ""}
            </article>
        `;
    }).join("");
}

// Project ordering controls.
const sortButtons = document.querySelectorAll(".sort-button");
const sortState = { by: "date", ascending: false };

function sortedProjectKeys() {
    const keys = Object.keys(projects);

    if (!sortState.by) return keys;

    const direction = sortState.ascending ? 1 : -1;

    return keys.sort((a, b) => {
        const first = projects[a];
        const second = projects[b];
        let result;

        if (sortState.by === "date") {
            result = first.startDate.localeCompare(second.startDate);
        } else if (sortState.by === "size") {
            // Sizes like "30~" or "1-4" sort by their leading number.
            result = parseInt(first.groupSize, 10) -
                parseInt(second.groupSize, 10);
        } else {
            result = first.title.localeCompare(second.title, undefined, {
                sensitivity: "base"
            });
        }

        return (result || first.title.localeCompare(second.title)) * direction;
    });
}

renderProjects("all-projects", sortedProjectKeys());

sortButtons.forEach(button => {
    button.addEventListener("click", () => {
        const by = button.dataset.sort;

        if (sortState.by === by) {
            sortState.ascending = !sortState.ascending;
        } else {
            sortState.by = by;
            sortState.ascending = true;
        }

        renderProjects("all-projects", sortedProjectKeys());
        setupMobileGifs();

        sortButtons.forEach(other => {
            const active = other === button;
            const arrow = other.querySelector(".sort-arrow");

            other.classList.toggle("is-active", active);
            other.setAttribute("aria-pressed", String(active));
            arrow.textContent = active
                ? (sortState.ascending ? "▲" : "▼")
                : "=";
        });
    });
});


/* ========================================
   FEATURED PROJECTS CAROUSEL
======================================== */

function initFeaturedProjectsCarousel() {
    const carousel = document.getElementById("featured-project-carousel");
    const stage = document.getElementById("featured-carousel-stage");
    const dotsContainer = document.getElementById("featured-carousel-dots");

    if (!carousel || !stage || !dotsContainer) return;

    // Only projects with a non-empty featuredDescription are featured.
    const featuredProjects = Object.entries(projects)
        .filter(([key, project]) =>
            typeof project.featuredDescription === "string" &&
            project.featuredDescription.trim().length > 0
        )
        .map(([key, project]) => ({
            key,
            ...project
        }));

    // Hide the entire section when no projects are featured.
    if (featuredProjects.length === 0) {
        carousel.closest(".featured-projects-section")?.setAttribute(
            "hidden",
            ""
        );
        return;
    }

    let activeIndex = 0;
    let autoplayTimeout = null;
    const cards = [];
    const dots = [];
    const autoplayDelay = 3500;

    function createCard(project) {
        const card = document.createElement("article");
        card.className = "carousel-card";

        const visual = document.createElement("div");
        visual.className = "carousel-visual";

        const image = document.createElement("img");
        image.src = project.logo.static;
        image.dataset.static = project.logo.static;
        image.dataset.animated = project.logo.animated;
        image.alt = `${project.title} gameplay`;
        image.loading = "eager";
        image.decoding = "async";

        visual.appendChild(image);

        const info = document.createElement("div");
        info.className = "carousel-info";

        const title = document.createElement("h3");
        title.className = "carousel-title";
        title.textContent = project.title;

        const meta = document.createElement("div");
        meta.className = "carousel-meta";
        meta.innerHTML = [
            project.groupSize == 1 ? "Solo" : "Team of " + project.groupSize,
            `${project.engine} ${engineSVG(project.engine)}`,
            project.timeframe
        ].filter(Boolean)
            .map(text => `<span class="carousel-meta-item">${text}</span>`)
            .join("");

        // Use the dedicated featured description, not the grid description.
        const description = document.createElement("p");
        description.className = "carousel-description";
        description.textContent = project.featuredDescription.trim();


        const details = document.createElement("div");
        details.className = "carousel-details tags";

        (project.tags || []).forEach(tag => {
            const tagEl = document.createElement("span");
            tagEl.className = tag.class;
            tagEl.textContent = tag.label;
            details.appendChild(tagEl);
        });

        const actions = document.createElement("div");
        actions.className = "carousel-card-actions";

        if (project.contentFile) {
            const readMore = document.createElement("a");
            readMore.className = "read-more";
            readMore.href =
                `project.html?id=${encodeURIComponent(project.key)}`;
            readMore.textContent = "Read More ▶";

            actions.appendChild(readMore);
        }

        actions.appendChild(details);

        const heading = document.createElement("div");
        heading.className = "carousel-heading";
        heading.append(title, meta);

        info.append(heading, description, actions);
        card.append(visual, info);


        return card;
    }

    // Build cards once.
    stage.replaceChildren();

    featuredProjects.forEach(project => {
        const card = createCard(project);
        stage.appendChild(card);
        cards.push(card);
    });

    // Build navigation dots.
    dotsContainer.replaceChildren();

    featuredProjects.forEach((project, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Show ${project.title}`);
        dot.addEventListener("click", () =>
            goTo(index, index > activeIndex ? 1 : -1)
        );

        dotsContainer.appendChild(dot);
        dots.push(dot);
    });

    function render(direction = 0) {
        const total = cards.length;
        const previousIndex = (activeIndex - 1 + total) % total;
        const nextIndex = (activeIndex + 1) % total;
        const isMobile = window.matchMedia("(max-width: 700px)").matches;
        const oldActive = cards.findIndex(card =>
            card.classList.contains("is-active")
        );
        const slides = isMobile && direction !== 0 &&
            oldActive !== -1 && oldActive !== activeIndex;

        const targets = [];

        cards.forEach((card, index) => {
            const image = card.querySelector(".carousel-visual img");
            let target;

            if (index === activeIndex) {
                if (
                    image.getAttribute("src") !== image.dataset.animated
                ) {
                    image.src = image.dataset.animated;
                }

                target = "is-active";
                card.setAttribute("aria-hidden", "false");
            } else {
                if (
                    image.getAttribute("src") !== image.dataset.static
                ) {
                    image.src = image.dataset.static;
                }

                card.setAttribute("aria-hidden", "true");

                if (slides && index === oldActive) {
                    // The outgoing card exits opposite to the click direction.
                    target = direction > 0 ? "is-prev" : "is-next";
                } else if (index === previousIndex) {
                    target = "is-prev";
                } else if (index === nextIndex) {
                    target = "is-next";
                } else {
                    target = "is-hidden";
                }
            }

            targets.push(target);
        });

        // On mobile only the incoming and outgoing cards animate; all others
        // are repositioned instantly so they never sweep across the screen.
        const states = ["is-active", "is-prev", "is-next", "is-hidden"];

        cards.forEach((card, index) => {
            const animated = slides &&
                (index === activeIndex || index === oldActive);

            if (isMobile && !animated) {
                card.classList.add("no-transition");
            }

            if (slides && index === activeIndex) {
                // Only jump the incoming card to its entry side when it isn't
                // already there, so a card mid-slide keeps moving smoothly.
                const entry = direction > 0 ? "is-next" : "is-prev";

                if (!card.classList.contains(entry)) {
                    card.classList.add("no-transition");
                    card.classList.remove(...states);
                    card.classList.add(entry);
                }
            } else if (!slides || !animated) {
                card.classList.remove(...states);
                card.classList.add(targets[index]);
            }
        });

        void stage.offsetWidth;

        cards.forEach((card, index) => {
            const animated = slides &&
                (index === activeIndex || index === oldActive);

            if (animated) {
                card.classList.remove("no-transition");
            }
        });

        void stage.offsetWidth;

        cards.forEach((card, index) => {
            if (slides && (index === activeIndex || index === oldActive)) {
                card.classList.remove(...states);
                card.classList.add(targets[index]);
            }
        });

        void stage.offsetWidth;

        cards.forEach(card => card.classList.remove("no-transition"));

        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;

            dot.classList.toggle("is-active", isActive);

            if (isActive) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });
    }

    function scheduleAutoplay() {
        window.clearTimeout(autoplayTimeout);
        autoplayTimeout = null;

        if (
            cards.length < 2 ||
            document.hidden ||
            carousel.matches(":focus-within")
        ) {
            return;
        }

        autoplayTimeout = window.setTimeout(next, autoplayDelay);
    }

    let lastGoTo = 0;

    function goTo(index, direction = 0) {
        // Ignore duplicate events fired by a single tap.
        const now = performance.now();
        if (now - lastGoTo < 120) return;
        lastGoTo = now;

        activeIndex = (index + cards.length) % cards.length;
        render(direction);
        scheduleAutoplay();
    }

    function previous() {
        goTo(activeIndex - 1, -1);
    }

    function next() {
        goTo(activeIndex + 1, 1);
    }

    const previousButton = carousel.querySelector(".carousel-prev");
    const nextButton = carousel.querySelector(".carousel-next");

    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);

    carousel.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
        }
    });

    carousel.addEventListener("mouseenter", scheduleAutoplay);
    carousel.addEventListener("mouseleave", scheduleAutoplay);
    carousel.addEventListener("focusin", scheduleAutoplay);
    carousel.addEventListener("focusout", scheduleAutoplay);
    document.addEventListener("visibilitychange", scheduleAutoplay);

    // Touch swipe navigation.
    let touchStartX = null;
    let touchStartY = null;

    stage.addEventListener("touchstart", event => {
        const touch = event.changedTouches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    }, { passive: true });

    stage.addEventListener("touchend", event => {
        if (touchStartX === null || touchStartY === null) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        if (
            Math.abs(deltaX) > 45 &&
            Math.abs(deltaX) > Math.abs(deltaY)
        ) {
            if (deltaX > 0) {
                previous();
            } else {
                next();
            }
        }

        touchStartX = null;
        touchStartY = null;
    }, { passive: true });

    // A single featured project still works without navigation.
    if (cards.length === 1) {
        previousButton.hidden = true;
        nextButton.hidden = true;
        dotsContainer.hidden = true;
    }

    render();
    scheduleAutoplay();
}

initFeaturedProjectsCarousel();


const mobileQuery = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
);

let gifObserver = null;

function setImageToStatic(img) {
    if (img && img.src !== new URL(img.dataset.static, document.baseURI).href) {
        img.src = img.dataset.static;
    }
}

function setImageToAnimated(img) {
    if (img && img.src !== new URL(img.dataset.animated, document.baseURI).href) {
        img.src = img.dataset.animated;
    }
}

function setupMobileGifs() {
    if (gifObserver) {
        gifObserver.disconnect();
        gifObserver = null;
    }

    if (mobileQuery.matches) {
        gifObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const img = entry.target;

                if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                    setImageToAnimated(img);
                } else {
                    setImageToStatic(img);
                }
            });
        }, {
            threshold: 1
        });

        document.querySelectorAll(".project-image").forEach((img) => {
            setImageToStatic(img);
            gifObserver.observe(img);
        });
    } else {
        document.querySelectorAll(".project-image").forEach(setImageToStatic);
    }
}

document.addEventListener("mouseover", (e) => {
    if (mobileQuery.matches) return;

    const card = e.target.closest(".project-card");
    if (!card || card.contains(e.relatedTarget)) return;

    setImageToAnimated(card.querySelector(".project-image"));
});

document.addEventListener("mouseout", (e) => {
    if (mobileQuery.matches) return;

    const card = e.target.closest(".project-card");
    if (!card || card.contains(e.relatedTarget)) return;

    setImageToStatic(card.querySelector(".project-image"));
});

setupMobileGifs();
mobileQuery.addEventListener("change", setupMobileGifs);

// The window load event waits for every static image, so the GIFs only
// start downloading once all of those have finished.
const preloadedGifs = [];

window.addEventListener("load", () => {
    if (!document.getElementById("all-projects")) return;
    const urls = new Set(
        Object.values(projects).map(project => project.logo.animated)
    );

    urls.forEach(url => {
        const image = new Image();
        image.src = url;
        preloadedGifs.push(image);
    });
});
const nameSpans = document.querySelectorAll("#name-header span[data-sound]");
const mobileInput = window.matchMedia("(hover: none) and (pointer: coarse)");

nameSpans.forEach(span => {
    span.addEventListener("click", () => {
        if (document.body.dataset.home) {
            window.location.href = document.body.dataset.home;
            return;
        }

        if (window.location.pathname.endsWith("/project.html")) {
                window.location.href = "./";
                return;
            }
        if (mobileInput.matches) return;

        const audio = new Audio(`sounds/${span.dataset.sound}.ogg`);
        audio.volume = 0.25;
        audio.play();
    });

    span.style.cursor = mobileInput.matches ? "default" : "pointer";

    span.addEventListener("mouseenter", () => {
        if (mobileInput.matches) return;

        span.style.color = "var(--accent)";
        span.style.transform = "scale(1.1)";
    });

    span.addEventListener("mouseleave", () => {
        span.style.color = "";
        span.style.transform = "";
    });
});

function updateNameInteraction() {
    nameSpans.forEach(span => {
        span.style.cursor = mobileInput.matches ? "default" : "pointer";
    });
}

mobileInput.addEventListener("change", updateNameInteraction);

// Hide the sticky header while scrolling down.
let lastScrollY = window.scrollY;
let navScrolling = false;
let navScrollTimer = null;

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const currentY = Math.max(window.scrollY, 0);

    if (navScrolling) {
        // Keep the header visible until the button-triggered scroll settles.
        window.clearTimeout(navScrollTimer);
        navScrollTimer = window.setTimeout(() => {
            navScrolling = false;
            lastScrollY = Math.max(window.scrollY, 0);
        }, 150);
        hero.classList.remove("is-hidden");
    } else if (currentY < hero.offsetHeight) {
        hero.classList.remove("is-hidden");
    } else if (currentY > lastScrollY + 4) {
        hero.classList.add("is-hidden");
    } else if (currentY < lastScrollY - 4) {
        hero.classList.remove("is-hidden");
    }

    lastScrollY = currentY;
}, { passive: true });

function scrollToSection(id) {
    const section = document.getElementById(id);
    const hero = document.querySelector(".hero");

    if (!section || !hero) return;

    // Get the height of the sticky header dynamically
    const heroHeight = hero.getBoundingClientRect().height;

    // Get the section's distance from the top of the document
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

    // Scroll so the section sits just below the sticky header
    const offset = heroHeight;
    navScrolling = true;
    hero.classList.remove("is-hidden");
    window.clearTimeout(navScrollTimer);
    navScrollTimer = window.setTimeout(() => {
        navScrolling = false;
    }, 150);

    window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth'
    });
}

function engineSVG(engine) {
    if (engine.toLowerCase() === "unity") {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unity" viewBox="0 0 16 16">
        <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/>
      </svg>`;
    } else if (engine.toLowerCase() === "godot") {
        return `<svg fill="#000000" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.745 0.917c-1.458 0.328-2.906 0.781-4.266 1.464 0.031 1.198 0.109 2.344 0.266 3.505-0.526 0.339-1.078 0.63-1.568 1.026-0.5 0.38-1.010 0.75-1.464 1.198-0.906-0.594-1.859-1.156-2.849-1.651-1.063 1.141-2.052 2.375-2.865 3.755 0.609 0.99 1.25 1.911 1.938 2.792h0.016v8.474c0.016 0 0.031 0 0.047 0.005l5.198 0.5c0.271 0.026 0.484 0.245 0.5 0.521l0.161 2.292 4.531 0.323 0.313-2.115c0.042-0.276 0.276-0.479 0.552-0.479h5.484c0.276 0 0.51 0.203 0.552 0.479l0.313 2.115 4.531-0.323 0.161-2.292c0.016-0.276 0.229-0.495 0.505-0.521l5.193-0.5c0.016 0 0.031-0.005 0.047-0.005v-8.474h0.021c0.688-0.875 1.323-1.802 1.932-2.792-0.807-1.38-1.802-2.615-2.865-3.755-0.984 0.495-1.943 1.057-2.849 1.651-0.453-0.448-0.958-0.818-1.458-1.198-0.495-0.396-1.047-0.688-1.573-1.026 0.156-1.161 0.234-2.307 0.266-3.505-1.354-0.682-2.802-1.135-4.266-1.464-0.583 0.984-1.115 2.047-1.578 3.083-0.552-0.089-1.109-0.125-1.661-0.13h-0.026c-0.552 0.005-1.109 0.042-1.661 0.13-0.464-1.036-0.995-2.099-1.583-3.083zM8.635 13.323c1.729 0 3.13 1.406 3.13 3.135s-1.401 3.13-3.13 3.13c-1.729 0-3.13-1.401-3.13-3.13s1.401-3.135 3.13-3.135zM23.365 13.323c1.729 0 3.13 1.406 3.13 3.135s-1.401 3.13-3.13 3.13c-1.729 0-3.13-1.401-3.13-3.13s1.401-3.135 3.13-3.135zM8.932 14.568c-1.146 0-2.078 0.927-2.078 2.078 0 1.146 0.932 2.073 2.078 2.073 1.151 0 2.083-0.927 2.083-2.073 0-1.151-0.932-2.078-2.083-2.078zM23.063 14.568c-1.146 0-2.078 0.927-2.078 2.078 0 1.146 0.932 2.073 2.078 2.073 1.151 0 2.078-0.927 2.078-2.073 0-1.151-0.927-2.078-2.078-2.078zM16 15.172c0.557 0 1.010 0.406 1.010 0.911v2.885c0 0.505-0.453 0.917-1.010 0.917s-1.010-0.411-1.010-0.917v-2.885c0-0.505 0.453-0.911 1.010-0.911zM1.948 22.599c0 0.505 0.005 1.052 0.005 1.161 0 4.938 6.26 7.307 14.036 7.333h0.021c7.776-0.026 14.031-2.396 14.031-7.333 0-0.109 0.005-0.656 0.010-1.161l-4.672 0.453-0.161 2.307c-0.021 0.276-0.24 0.5-0.516 0.516l-5.578 0.396c-0.271 0-0.51-0.198-0.552-0.474l-0.318-2.156h-4.516l-0.318 2.156c-0.042 0.286-0.297 0.495-0.594 0.474l-5.531-0.396c-0.276-0.021-0.5-0.24-0.521-0.516l-0.156-2.307-4.672-0.448z"/>
      </svg>`;
    } else if (engine.toLowerCase() == "unreal") {
        return `<svg fill="#000000" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0c-8.766 0-15.865 7.161-15.865 16s7.099 16 15.865 16c8.76 0 15.865-7.161 15.865-16s-7.104-16-15.87-16zM16 0.703c4.047 0 7.859 1.594 10.724 4.479 2.859 2.875 4.453 6.766 4.443 10.818 0 4.083-1.578 7.927-4.443 10.818-2.828 2.87-6.693 4.484-10.724 4.479-4.031 0.005-7.896-1.609-10.724-4.479-2.859-2.875-4.458-6.766-4.448-10.818 0-4.083 1.583-7.927 4.443-10.818 2.828-2.875 6.698-4.49 10.729-4.479zM15.203 6.333c-2.583 0.693-4.974 2.021-8.161 5.677s-2.583 6.677-2.583 6.677c0 0 0.88-2.078 2.995-4.266 1.005-1.036 1.75-1.385 2.266-1.385 0.458-0.026 0.844 0.344 0.844 0.802v7.422c0 0.734-0.474 0.896-0.911 0.885-0.37-0.005-0.714-0.135-0.714-0.135 2.172 3.156 7.37 3.599 7.37 3.599l2.281-2.438 0.052 0.047 2.089 1.781c3.823-2.271 5.667-6.479 5.667-6.479-1.708 1.802-2.792 2.224-3.438 2.224-0.573-0.005-0.797-0.339-0.797-0.339-0.031-0.156-0.083-2.417-0.104-4.677-0.021-2.339 0-4.682 0.115-4.688 0.661-1.24 2.766-3.74 2.766-3.74-3.932 0.776-6.073 3.354-6.073 3.354-0.635-0.5-1.927-0.417-1.927-0.417 0.604 0.333 1.208 1.302 1.208 2.104v7.896c0 0-1.318 1.161-2.333 1.161-0.604 0-0.974-0.328-1.177-0.599-0.078-0.104-0.146-0.219-0.198-0.344v-9.75c-0.141 0.104-0.313 0.161-0.484 0.167-0.219 0-0.443-0.109-0.594-0.427-0.115-0.24-0.188-0.599-0.188-1.125 0-1.797 2.031-2.99 2.031-2.99z"/>
      </svg>`
    } else if (engine.toLowerCase() == "byond") {
        return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="79.66238810499166 43.79999999999997 598.8376118950083 660.9109931050759">
            <path class="s0" d="m513.3 356.5c90.9-62.2 127.7-101.9 139.6-126.9 6.2-13.1 5.3-22.2 2.6-28.3-2.5-5.6-6.5-8.5-7.7-9.3-15.4-10.2-61.7-21.1-192.7 40.4-7.5-92.5-25.8-182.6-70.8-188.4-0.7-0.1-1.3-0.1-2-0.2-39-1.3-56 107.7-63.3 200.9-91.1-45.8-194.5-85.8-224.9-46-0.4 0.5-0.8 1.1-1.1 1.7-20.8 33.3 66 103 143.3 156.2-85.8 56.2-173.4 126.4-153.9 173q0.45 0.9 0.9 1.8c20.4 38.4 145.7-15.3 233.6-59.1 7.6 131.6 25.1 191 42.3 215.9 8.2 11.9 16.6 15.7 23.2 16.4 6.1 0.6 10.7-1.4 11.9-2 17.6-8.8 53.5-47.7 63.5-217.7 100.3 48.3 153.6 60.5 181.4 58.3 14.4-1.1 21.9-6.5 25.8-11.9 3.6-5 4.1-9.9 4.2-11.3 1.1-19.8-14.5-70.1-155.9-163.5zm48.1-125.4c0 0 34.5-13 64.3-14.4 0 0-0.6 1-1.7 2.8-4.6 7.3-18.6 28.3-41.2 49.5-11.9 10.2-43.5 37.3-93.8 71.8-9.3-5.9-19.1-11.9-29.4-18.1-0.4-15.5-0.9-31.7-1.8-48.4 32.8-15.3 67.5-30 103.6-43.2zm-140 69.2c-1-0.6-2-1.1-3-1.7-1.5-0.9-3.1-1.8-4.7-2.7 2.4-1.2 4.8-2.5 7.3-3.7 0.1 2.7 0.3 5.4 0.4 8.1zm-72.8-72c3-28.9 7.8-63.3 14.8-93.9 0 0 5.2-28.6 18.9-55.7 0.3-0.6 0.6-1.1 0.9-1.7 0 0 14.1 29.5 20.3 59.9 2.8 12.5 9.9 53.7 14.7 113.6-13.8 7.1-28.5 14.8-43.9 23.4-9.2-5-18.7-10.2-28.5-15.3 0.8-10 1.7-20.1 2.8-30.3zm-112.9 93.7c-23.5-17-50.9-38.4-73.9-59.8 0 0-22.1-18.8-38.7-44.3-0.3-0.5-0.7-1.1-1-1.6 0 0 32.6 2.5 62 12.4 14.1 4.4 64.4 23.2 132.1 57q0 0.3 0 0.6c0.2-0.1 0.3-0.2 0.5-0.3 6.2 3.1 12.6 6.4 19.1 9.7-1.6 1-3.3 1.9-5 2.9-20 11.7-44 26-69.2 41.8-8.5-6-17.2-12.1-25.9-18.4zm167.8 286.1c0 0-6 36.3-19.6 62.9 0 0-0.6-1-1.6-2.8-4.1-7.6-15.2-30.2-22.3-60.4-3.2-16.9-12.1-64.3-16.7-135.1-5-1.8-9.9-3.9-14.5-6.4-9.1-4.9-17.5-11.1-24.8-18.3-14.2 6.9-29 13.8-44.3 20.6-26.5 11.8-58.7 24.9-88.7 34.1 0 0-27.4 9.8-57.7 11.4-0.6 0-1.3 0.1-1.9 0.1 0 0 18.5-27 41.7-47.5 11-10.1 53-44.8 117.1-87.1 0.9 0.6 1.7 1.1 2.6 1.7-0.1-1.1-0.1-2.1-0.2-3.2 29.7-19.5 63.9-40.5 102-61.4 15.6 8.6 31.7 17.9 48.1 27.9 1.6 76.8-2.5 168.4-19.2 263.5zm166.4-106.1c-15-5.2-54.8-19.3-110.8-46.2 0.9-24.6 1.4-51.5 1.2-81.2q0-3.3 0-6.9c43.2 27.9 88 60.1 131.7 96.7 0 0 28.5 23.4 44.7 48.5 0 0-1.1 0-3.2-0.1-8.7-0.1-33.9-1.8-63.6-10.8z"/>
            <path class="s0" d="m639.7 259.2c-21.46 0-38.8-17.34-38.8-38.8 0-21.46 17.34-38.8 38.8-38.8 21.46 0 38.8 17.34 38.8 38.8 0 21.46-17.34 38.8-38.8 38.8z"/>
            <path class="s0" d="m436.4 549.5c-25.66 0-46.4-20.74-46.4-46.4 0-25.66 20.74-46.4 46.4-46.4 25.66 0 46.4 20.74 46.4 46.4 0 25.66-20.74 46.4-46.4 46.4z"/>
            <path class="s0" d="m159.8 248.2c-24.39 0-44.1-19.71-44.1-44.1 0-24.39 19.71-44.1 44.1-44.1 24.39 0 44.1 19.71 44.1 44.1 0 24.39-19.71 44.1-44.1 44.1z"/>
            <path class="s0" d="m485.5 375.1c0-0.9 0-1.9 0-2.9 0-9.2-1.2-18.2-3.4-26.8-11.9-45.9-53.5-79.7-103.1-79.7-12 0-23.6 2-34.3 5.7-10.3 3.5-19.9 8.6-28.5 14.9-20.6 15.1-35.6 37.4-41.2 63.3-1.6 7.3-2.4 14.9-2.4 22.7 0 3 0.1 6 0.4 8.9 2.2 26 13.7 49.4 31.1 66.7 7.3 7.2 15.7 13.4 24.8 18.3 4.6 2.5 9.5 4.6 14.5 6.4 11.2 4 23.2 6.1 35.7 6.1 16.4 0 31.9-3.7 45.7-10.3 9.3-4.4 17.8-10.1 25.4-16.9 21.1-18.9 34.5-46.1 35.3-76.4z"/>
        </svg>`
    } else {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
      </svg>`;
    }
}
