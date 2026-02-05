//TODO: use a JSON
const portfolioData = {
    name: "Leandro Dornela",
    title: "Game Developer",
    email: "leandro.dornela.dev@gmail.com",
    phone: "+55 (32) 9 9943-2992",
    links: {
        resume: "Assets/resume_leandro_dornela_game_dev.pdf",
        github: "https://github.com/LeandroDornela",
        linkedin: "https://www.linkedin.com/in/leandrodornela",
        artstation: "https://www.artstation.com/leandrodornela"
    },
    projects: [
        {
            year: 2026,
            title: "GGJ26 - Magi Trium",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "Slash through corrupted creatures inspired in the Brazilian 'Folia de Reis' with a touch of dark fantasy. Change between the 3 Magi masks and use the different powers and play styles to destroy as much as you can from the corrupted hordes.",
            link: "https://globalgamejam.org/games/2026/magi-trium-4",
            media: [
                { type: "image", src: "Assets/magi_0.png" }
            ]
        },
        {
            year: 2025,
            title: "Procedural Floor Plan Generation Tool",
            tags: ["Unity", "Tool", "Procedural Generation"],
            projectCategory: "academic",
            company: "",
            description: "A Unity tool for generating architectural floor plans and buildings using procedural algorithms, zoning subdivision, connectivity rules, and quality evaluation.",
            link: "https://github.com/LeandroDornela/floor-plan-generator",
            media: [
                { type: "image", src: "Assets/floor_0.gif" },
                { type: "image", src: "Assets/floor_1.png" },
                { type: "image", src: "Assets/floor_2.png" }
            ]
        },
        {
            year: 2025,
            title: "Steering Behaviors for Autonomous Characters",
            tags: ["Unity"],
            projectCategory: "academic",
            company: "",
            description: "Unity project implementing classic Steering Behaviors for autonomous characters, originally proposed by Craig W. Reynolds.",
            link: "https://github.com/LeandroDornela/steering-behaviors",
            media: [
                { type: "image", src: "Assets/steering.gif" }
            ]
        },
        {
            year: 2024,
            title: "Friends Connection Status UI (MVVM)",
            tags: ["Unreal", "UI", "UMG"],
            projectCategory: "academic",
            company: "",
            description: "UI exercise focused on architecture rather than visuals, implementing a friends connection status screen using the MVVM pattern. Features two lists for connected and disconnected friends, tooltips with detailed player information on hover, and toaster notifications when a friend connects. Includes a testing Game Mode to simulate connections, disconnections, and initial friend status data.",
            link: "https://github.com/LeandroDornela/Unreal-UMG-exercise-friendsStatus",
            media: [
                { type: "image", src: "Assets/friendStatus_0.png" },
                { type: "image", src: "Assets/friendStatus_1.jpg" }
            ]
        },
        {
            year: 2024,
            title: "GGJ24 - Mortal Kombard",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "For the longest time, the King has not been able to laugh or even smile, so he created the Mortal Kombard tournament, to find the funniest subject in the whole kingdom. In the tournament , the subjects try to make each other and the king laugh, or be thrown in the pits below. Using a webcam, play the game with a friend, taking turns trying to make each other laugh. Using a face recognition software, the game can tell if the player is laughing or not. Whoever laughs is thrown in the pits and the other wins!",
            link: "https://globalgamejam.org/games/2024/mortal-kombard-4",
            media: [
                { type: "image", src: "Assets/bard_0.png" }
            ]
        },
        {
            year: 2023,
            title: "Reign of Titans",
            tags: ["Unity"],
            projectCategory: "professional",
            company: "Globant",
            description: "Card-based multiplayer battle game with unique NFT characters. Worked as a programmer implementing core gameplay mechanics, UI systems, basic AI, and internal tools. Collaborated in a remote, multicultural team. Built UI testing tools, a character inspection tool for generated 3D assets, and a simple AI bot for autonomous gameplay testing.",
            link: "https://reignoftitans.gg/",
            media: [
                { type: "image", src: "Assets/titans_0.png" },
                { type: "image", src: "Assets/titans_1.png" },
                { type: "image", src: "Assets/titans_2.png" },
            ]
        },
        {
            year: 2023,
            title: "GGJ23 - Bloody Roots",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "After the humans destroyed the environment, to protect itself, the vegetation needed to improve its destructive power. In this turn based strategy game you will help one of the agents of mother nature to claim back the earth after the humans destroyed it, and the only way to do so is by tainting your roots with blood.",
            link: "https://v3.globalgamejam.org/2023/games/bloody-roots-3-0",
            media: [
                { type: "image", src: "Assets/roots_0.png" },
                { type: "image", src: "Assets/roots_1.png" }
            ]
        },
        {
            year: 2022,
            title: "GGJ22 - See no light",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "Find your way through the dark and use the light to guide your way.",
            link: "https://v3.globalgamejam.org/2022/games/see-no-light-7",
            media: [
                { type: "image", src: "Assets/see_0.jpg" }
            ]
        },
        {
            year: 2021,
            title: "Sofiya",
            tags: ["Unity"],
            projectCategory: "professional",
            company: "Male Doll",
            description: "Platformer game featuring character projectiles, enemy interaction, and unlockable content galleries. Responsible for the full project architecture, feature implementation, VFX, asset integration, and contributions to level design and UI. Integrated Unity level-building tools to accelerate environment creation and delivered visual polishing.",
            link: "",
            media: [
                { type: "image", src: "Assets/sofiya_0.jpg" },
                { type: "image", src: "Assets/sofiya_1.jpg" },
                { type: "image", src: "Assets/sofiya_2.jpg" }
            ]
        },
        {
            year: 2021,
            title: "GGJ21 - ILF: Intergalactic Lost and Found",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "Global Game Jam project about helping characters recover lost items despite language barriers. Implemented gameplay systems and delivered a complete playable prototype during the jam.",
            link: "https://play.unity.com/en/games/4f403e83-01b4-4c63-871b-9ea79e46a1a0/intergalactic-lost-found",
            media: [
                { type: "image", src: "Assets/ilf_0.png" },
                { type: "image", src: "Assets/ilf_1.png" }
            ]
        },
        {
            year: 2020,
            title: "Puzzle Games Collection",
            tags: ["Unity"],
            projectCategory: "professional",
            company: "Male Doll",
            description: "Multiple puzzle games including Furry Heroes, Magical Girl, DominaTrix, Summer Flowers, and Villain Project. Implemented all gameplay features, mini-games, dialogues, galleries, and graphics polishing. Created a reusable project template that enabled designers to rapidly build new games.",
            link: "",
            media: [
                { type: "image", src: "Assets/puzzle_0.png" },
                { type: "image", src: "Assets/puzzle_1.png" },
                { type: "image", src: "Assets/puzzle_2.png" },
                { type: "image", src: "Assets/puzzle_3.jpg" }
            ]
        },
        {
            year: 2020,
            title: "Boyfriend's Rescue",
            tags: ["Unity"],
            projectCategory: "professional",
            company: "Male Doll",
            description: "Platformer where character skins grant unique abilities such as projectiles, shields, double jump, and grab & swing mechanics. Responsible for full architecture, implementation, and deployment. Solved complex tentacle animation using physics and math, and implemented an asset reuse strategy for richer environments.",
            link: "https://store.steampowered.com/app/1280640/Boyfriends_Rescue___Gay_Platform_Game/",
            media: [
                { type: "image", src: "Assets/boy_0.png" },
                { type: "image", src: "Assets/boy_1.jpg" },
                { type: "image", src: "Assets/boy_2.jpg" },
                { type: "image", src: "Assets/boy_3.jpg" },
                { type: "image", src: "Assets/boy_4.jpg" }
            ]
        },
        {
            year: 2019,
            title: "Neon Slash",
            tags: ["Unity", "Mobile"],
            projectCategory: "professional",
            company: "Guará Games",
            description: "Mobile casual game developed in Unity as part of an interdisciplinary team.",
            link: "",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/HNIH5le_C3k?si=3Ce4zjmhvNwr1CCV" }
            ]
        },
        {
            year: 2019,
            title: "Space Gens",
            tags: ["Unity"],
            projectCategory: "academic",
            description: "University project developed as a playful interface for audio recording to support children's literacy. Presented at the Brazilian Symposium on Games (SBGames). Implemented audio capture and spectrum visualization.",
            link: "",
            media: [
                { type: "image", src: "Assets/space_0.png" }
            ]
        },
        {
            year: 2019,
            title: "GGJ19 - Where Do I Belong",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            description: "Global Game Jam project developed entirely from scratch. Implemented custom platforming mechanics and a dynamic lobby that changes based on player choices.",
            link: "https://v3.globalgamejam.org/2019/games/where-do-i-belong",
            media: [
                { type: "image", src: "Assets/belong_0.jpg" },
                { type: "image", src: "Assets/belong_1.png" }
            ]
        },
        {
            year: 2018,
            title: "Inferno de Tande",
            tags: ["Unity", "Mobile"],
            projectCategory: "professional",
            company: "Guará Games",
            description: "Casual side-scroller game with 9 levels and stylized art. Implemented gameplay systems, level selector, performance optimizations, and particle effects.",
            link: "",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/6QXL92rhyB4" }
            ]
        },
        {
            year: 2018,
            title: "Cellular Organelles Quiz",
            tags: ["Unity"],
            projectCategory: "professional",
            company: "Guará Games",
            description: "Quiz game prototype about cellular organelles designed for children. Implemented gameplay systems including scoreboard and video integration.",
            link: "",
            media: [
                { type: "image", src: "Assets/cells_0.jpg" }
            ]
        },
        {
            year: 2018,
            title: "Combat Mechanics Prototype",
            tags: ["Unity"],
            projectCategory: "academic",
            company: "",
            description: "Prototype combat system featuring movement, melee combat, special abilities, experience system, checkpoints, object interaction, and basic AI.",
            link: "https://github.com/LeandroDornela/CombatMechanicsPrototype",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/XE3fpRp-kpI" }
            ]
        },
        {
            year: 2018,
            title: "2.5D Platform Prototype",
            tags: ["Unity"],
            projectCategory: "academic",
            company: "",
            description: "2.5D platform movement prototype created to explore perspective-based gameplay. Implemented mechanics that allow smooth depth transitions and traversal of loops while maintaining readable player control.",
            link: "",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/RvPmCpm1mi0" }
            ]
        },
        {
            year: 2018,
            title: "GGJ18 - Alex Vortex vs Depression",
            tags: ["Unity", "Game Jam"],
            projectCategory: "jams",
            company: "",
            description: "Global Game Jam project. Implemented core gameplay mechanics, modeled the main character weapon, and created a fake wireframe-inspired visual style. The player automatically shoots following the rhythm of the music.",
            link: "https://v3.globalgamejam.org/2018/games/alex-vortex-vs-depression",
            media: [
                { type: "image", src: "Assets/alex_0.jpg" },
                { type: "image", src: "Assets/alex_1.png" }
            ]
        },
        {
            year: 2017,
            title: "GLSL Sphere Path Tracer",
            tags: ["Computer Graphics", "GLSL"],
            projectCategory: "academic",
            company: "",
            description: "GLSL path tracer adapted from a basic ray tracing implementation over a single weekend. Features sphere-based geometry, ray–sphere intersections, reflections, and progressive image accumulation. Focused on rapidly extending a ray tracer into a physically based rendering approach while deepening understanding of light transport and GPU parallelism.",
            link: "https://github.com/LeandroDornela/GLSLPathTracer",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/pXNWrYPMNBI" }
            ]
        },
        {
            year: 2016,
            title: "Crash Ball",
            tags: ["Computer Graphics", "OpenGL"],
            projectCategory: "academic",
            company: "",
            description: "Mini-game developed using OpenGL immediate mode. Responsible for all graphics implementation, 3D models, and UI elements. Served as an introduction to OpenGL and collision detection concepts.",
            link: "https://github.com/LeandroDornela/CrashBall",
            media: [
                { type: "video", src: "https://www.youtube.com/embed/p-y4G1g7aUE" }
            ]
        }
    ]
};