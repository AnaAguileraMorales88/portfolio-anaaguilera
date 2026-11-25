const laQuintaPataTags = ['React 19', 'Java 21', 'Spring Data JPA + Hibernate', 'Vite 7', 'Spring Boot 3.x', 'PostgreSQL', 'JWT', 'Tailwind CSS v4', 'React Router DOM v7', 'Axios', 'React Hot Toast', 'Vitest'];
const clubNostalgiaTags = ['React 19', 'React Router 7', 'Java 21', 'Spring Boot 3.5.7', 'Tailwind CSS 4', 'Spring Security', 'Spring Data JPA', 'Base de datos H2', 'JWT (java-jwt)', 'SendGrid', 'Axios'];
// GitHub de Primer Commit: añade aquí la dirección del repositorio cuando la tengas
const PRIMER_COMMIT_GITHUB = null;
// Las 4 primeras se ven en la tarjeta; el resto aparece en el "+N"
const primerCommitTags = [
    'Java 21',
    'Spring Boot 3.5',
    'React 19',
    'PostgreSQL',
    'Spring Security',
    'JWT',
    'OAuth 2.0 (Google)',
    'Flyway',
    'H2',
    'React Router 7',
    'Tailwind CSS 3',
    'Axios',
    'Vite 7',
    'JUnit 5',
    'MockMvc',
    'Vitest',
    'Testing Library',
    'Playwright',
    'axe-core',
    'Docker Compose',
    'Caddy (HTTPS)',
];

const nonaTags = ['JavaScript ES6', 'React 18', 'React Router DOM', 'Tailwind CSS v4', 'Vite', 'Responsive Design'];

export const projectsData = {
    es: [
        {
            title: 'Primer Commit',
            description: 'Comunidad tech para quienes empiezan: noticias, empleo junior, foro y testimonios. Importa noticias por RSS y ofertas de APIs públicas de empleo, con inicio de sesión con Google. En tres idiomas y con tema claro/oscuro.',
            tags: primerCommitTags,
            githubLink: PRIMER_COMMIT_GITHUB,
            liveLink: 'https://primercommit.es/',
        },
        {
            title: 'La Quinta Pata',
            description: 'Plataforma web para preservar y compartir las memorias de personas migrantes. Sistema completo con autenticación, gestión de contenido multimedia y base de datos.',
            tags: laQuintaPataTags,
            githubLink: 'https://github.com/La-Quinta-Pata',
            liveLink: null,
        },
        {
            title: 'Club Nostalgia',
            description: 'Sitio web para productora audiovisual con gestión de proyectos, formulario de contacto y sistema de autenticación. Diseño responsive y accesible.',
            tags: clubNostalgiaTags,
            githubLink: 'https://github.com/ClubNostalgia',
            liveLink: null,
        },
        {
            title: 'NONA',
            description: 'Sitio web promocional para cortometraje. Diseño cinematográfico con énfasis en la experiencia visual y navegación intuitiva.',
            tags: [...nonaTags, '100% Accesible'],
            githubLink: 'https://github.com/AnaAguileraMorales88/Nona',
            liveLink: null,
        },
    ],
    en: [
        {
            title: 'Primer Commit',
            description: 'Tech community for people starting out: news, junior jobs, a forum and real stories. It imports news via RSS and job offers from public APIs, with Google sign-in. Available in three languages with light/dark theme.',
            tags: primerCommitTags,
            githubLink: PRIMER_COMMIT_GITHUB,
            liveLink: 'https://primercommit.es/',
        },
        {
            title: 'La Quinta Pata',
            description: 'Web platform to preserve and share the memories of migrants. A complete system with authentication, multimedia content management and a database.',
            tags: laQuintaPataTags,
            githubLink: 'https://github.com/La-Quinta-Pata',
            liveLink: null,
        },
        {
            title: 'Club Nostalgia',
            description: 'Website for an audiovisual production company with project management, a contact form and authentication. Responsive and accessible design.',
            tags: clubNostalgiaTags.map((tag) => (tag === 'Base de datos H2' ? 'H2 Database' : tag)),
            githubLink: 'https://github.com/ClubNostalgia',
            liveLink: null,
        },
        {
            title: 'NONA',
            description: 'Promotional website for a short film. Cinematic design focused on the visual experience and intuitive navigation.',
            tags: [...nonaTags, '100% Accessible'],
            githubLink: 'https://github.com/AnaAguileraMorales88/Nona',
            liveLink: null,
        },
    ],
};
