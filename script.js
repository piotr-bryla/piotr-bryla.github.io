const projects = {
    frsh: {
        title: "F.R.S.H.",
        description: "Boomer shooter about a butcher robot in a radioactive wasteland.",
        metric: "Over 150 downloads, 3 voluntary donations.",
        logo: "images/frsh.gif",
        images: ["images/frsh1.png", "images/frsh2.png"],
        link: "https://fikou.itch.io/frsh",
        groupSize: 1,
        engine: "Unity",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Combat Design", class: "tag-combat" },
            { label: "Systems", class: "tag-systems" },
            { label: "Level Design", class: "tag-level" },
            { label: "SFX", class: "tag-sound" },
        ]
    },
    ss13: {
        title: "TGStation 13",
        description: "Open-Source multiplayer RPG about a death-trap masquerading as a space station.",
        metric: "Codebase with over 1.5k unique contributors and 60k pull requests.",
        logo: "images/ss13.gif",
        images: ["images/project3.jpg"],
        link: "https://tgstation13.org/",
        groupSize: "30~",
        engine: "BYOND",
        tags: [
            { label: "Project Maintainer", class: "tag-maint" },
            { label: "Systems", class: "tag-systems" },
            { label: "Level Design", class: "tag-level" },
        ]
    },
    cnt: {
        title: "Count Dashula",
        description: "2D platformer about a vampire dashing away from the Sun.",
        metric: "Over 60 downloads.",
        logo: "images/cnt.gif",
        images: ["images/project2.jpg"],
        link: "https://fikou.itch.io/count-dashula",
        groupSize: 1,
        engine: "Godot",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Level Design", class: "tag-level" },
            { label: "SFX", class: "tag-sound"},
        ]
    },
    voita: {
        title: "Voita",
        description: "Mobile stealth reverse horror game about an alien ambushing the crew of a space station.",
        logo: "images/voita.gif",
        images: ["images/project2.jpg"],
        link: "",
        groupSize: 13,
        engine: "Unity",
        tags: [
            { label: "Systems", class: "tag-systems" },
        ]
    },
    wst: {
        title: "Wastemancer",
        description: "Arcade game about a magical raccoon spellcasting to rid the world of waste.",
        logo: "",
        images: ["images/project2.jpg"],
        link: "https://futuregames.itch.io/wastemancer",
        groupSize: 12,
        engine: "Unity",
        tags: [
            { label: "Prototype", class: "tag-prototype" },
            { label: "Systems", class: "tag-systems" },
            { label: "SFX", class: "tag-sound"},
        ]
    },
    prsz: {
        title: "Parasozhyt",
        description: "Timer-based corridor shooter about a dying parasite constantly swapping between hosts.",
        metric: "1st place at Futuregames Jam 2025.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://gamekernel.itch.io/parasozhyt",
        groupSize: 10,
        engine: "Unity",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Systems", class: "tag-systems" },
            { label: "VFX", class: "tag-vfx"},
        ]
    },
    cstl: {
        title: "Castlescapade",
        description: "2D platformer about a thief robbing a falling-apart castle and escaping with the loot.",
        metric: "Over 30 downloads.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://fikou.itch.io/castlescapade",
        groupSize: 1,
        engine: "Unreal",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "Level Design", class: "tag-level" },
            { label: "VFX", class: "tag-vfx"},
        ]
    },
    brd: {
        title: "Board Games",
        description: "Writings on various board game designs.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "",
        groupSize: "1-4",
        engine: "Real Life",
        tags: [
            { label: "Prototype", class: "tag-prototype" },
            { label: "Systems", class: "tag-systems" },
        ]
    },
    grg: {
        title: "Greg the Frog: Burning Escape",
        description: "3D platformer where I helped fine-tune the controls to feel good.",
        metric: "1st place at Futuregames Warsaw GP1 Jury Day.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://futuregames.itch.io/greg-the-frog",
        groupSize: 14,
        engine: "Unity",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
        ]
    },
    brl: {
        title: "Barreland",
        description: "Small arcade game made to learn Unity.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://fikou.itch.io/barreland",
        groupSize: 1,
        engine: "Unity",
        tags: [
            { label: "Prototype", class: "tag-prototype" },
            { label: "Systems", class: "tag-systems" },
        ]
    },
    grs: {
        title: "Gyruss Remake",
        description: "Remake of a 1983 arcade game to learn Unreal Engine.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://fikou.itch.io/gyruss",
        groupSize: "1",
        engine: "Unreal",
        tags: [
            { label: "Prototype", class: "tag-prototype" },
        ]
    },
    dgg: {
        title: "Diggy and the Forgotten Caves",
        description: "2D platformer where I did minor character controller contributions and VFX.",
        logo: "images/project3.jpg",
        images: ["images/project3.jpg"],
        link: "https://buas-blockc2025-team5.itch.io/diggy-and-the-forgotten-caves",
        groupSize: "4",
        engine: "Unreal",
        tags: [
            { label: "3Cs", class: "tag-3cs" },
            { label: "VFX", class: "tag-vfx" },
        ]
    }
};


function renderProjects(containerId, projectKeys) {
    const container = document.getElementById(containerId);
    container.innerHTML = projectKeys.map(key => {
        const proj = projects[key];
        return `
            <div class="project-card">
                <img src="${proj.logo}" alt="${proj.title} image">
                <div class="project-info">
                    <h3>
                    <span class="project-meta">
                        ${proj.title} 
                        </span>
                    </h3>
                    <h3>
                    <span class="project-meta">
                        ${proj.groupSize != 1 ? "Team of " + proj.groupSize : "Solo"} 
                        </span>
                    </h3>
                    <h3>
                    <span class="project-meta">
                        ${proj.engine}${engineSVG(proj.engine)}
                    </span>
                    </h3>
                    <div class="tags">
                        ${proj.tags.map(tag => `<span class="${tag.class}">${tag.label}</span>`).join("")}
                    </div>
                </div>
                <p class="description">
                ${proj.description}
                </p>
                ${proj.metric ? ("<p class='metric'>" + proj.metric + "</p>") : ""}
            </div>
        `;
    }).join("");
}

// Example: split featured vs other
renderProjects("featured-projects", ["frsh", "ss13", "cnt", "cstl", "prsz", "voita"]);
renderProjects("other-projects", ["wst", "brd", "grg", "brl", "grs", "dgg"]);

document.querySelectorAll("#name-header span[data-sound]").forEach(span => {
    span.addEventListener("click", () => {
        const soundFile = `sounds/${span.dataset.sound}.ogg`;
        const audio = new Audio(soundFile);
        audio.volume = 0.25;
        audio.play();
    });

    // Optional: add hover effect
    span.style.cursor = "pointer";
    span.addEventListener("mouseenter", () => {
        span.style.color = "var(--accent)";
        span.style.transform = "scale(1.1)"
    });
    span.addEventListener("mouseleave", () => {
        span.style.color = "";
        span.style.transform = "scale(1)"
    });
});

function scrollToSection(id) {
    const section = document.getElementById(id);
    const hero = document.querySelector(".hero");

    if (!section || !hero) return;

    // Get the height of the sticky header dynamically
    const heroHeight = hero.getBoundingClientRect().height;

    // Get the section's distance from the top of the document
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

    // Scroll so the section sits just below the sticky header
    window.scrollTo({
        top: sectionTop - heroHeight,
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
    } else {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
      </svg>`;
    }
}
