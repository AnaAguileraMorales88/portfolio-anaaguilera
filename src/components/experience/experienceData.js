/**
 * Experiencia en tres bloques: a destacar (tecnología), profesional y formación.
 * Para enlazar un repositorio en un punto, usa { text: '...', link: 'https://github.com/...' }.
 */

// Repositorios de los hackatones: añade aquí las direcciones cuando las tengas
const SANITAS_REPO = null;
const BARCELONA_ACTIVA_REPO = null;

export const experienceData = {
    es: {
        highlighted: [
            {
                role: 'Proyectos reales',
                company: 'Desarrollo Fullstack',
                period: '2024 - 2025',
                description: [
                    'Desarrollo integral de aplicaciones web Fullstack aplicando principios de arquitectura modular, componentización y patrones.',
                    'Backend con Java 21 y Spring Boot: desarrollo de APIs RESTful seguras con autenticación JWT y conexión a bases de datos SQL (PostgreSQL y MySQL).',
                    'Frontend con React y Angular: creación de componentes reutilizables, consumo de APIs y gestión de estado.',
                    'Uso de Git y buenas prácticas de desarrollo (GitFlow, testing y control de versiones).',
                    'Experiencia con DevOps y despliegue continuo (Docker, GitHub Actions). Desarrollo asistido por IA e integración de LLMs (OpenAI, Groq) y automatización de flujos con agentes inteligentes (n8n).',
                ],
            },
            {
                role: 'Hackatones',
                company: 'Retos tecnológicos',
                period: '2025',
                description: [
                    {
                        text: 'Reto de Sanitas (17–19 sep): desarrollo de una solución digital accesible para mejorar la atención sanitaria. Diseño de interfaz e implementación en React.',
                        link: SANITAS_REPO,
                    },
                    {
                        text: 'Barcelona Activa (15–16 oct): creación de una herramienta para visualizar el impacto del turismo mediante mapas y rankings. Desarrollo en React y trabajo en equipo.',
                        link: BARCELONA_ACTIVA_REPO,
                    },
                ],
            },
        ],
        work: [
            {
                role: 'Camarera encargada',
                company: 'Hotel Regina',
                period: '2023 - 2026',
                description: [
                    'Supervisión del servicio de sala en hotel de alto volumen.',
                    'Organización de turnos y apoyo en la gestión del equipo.',
                    'Atención al cliente nacional e internacional, garantizando una experiencia profesional.',
                    'Formación de nuevas incorporaciones y mantenimiento de estándares de calidad.',
                ],
            },
            {
                role: 'Acompañamiento y administrativa',
                company: 'Fundación Quiero Trabajo',
                period: '2022 - 2023',
                description: [
                    'Acompañamiento a mujeres en situación de vulnerabilidad en su inserción laboral.',
                    'Orientación en entrevistas, comunicación y mejora de CV.',
                    'Más del 60% accedió a empleo o formación tras el proceso.',
                ],
            },
            {
                role: 'Responsable de grupo y coordinadora de talleres',
                company: 'Acpacys',
                period: '2019 - 2022',
                description: [
                    'Diseño y coordinación de talleres inclusivos.',
                    'Dirección de talleres de informática y manualidades adaptadas.',
                    'Mejora de la participación activa y el desarrollo digital del grupo, aumentando la autonomía individual.',
                ],
            },
            {
                role: 'Monitora',
                company: 'Cáritas',
                period: '2016 - 2018',
                description: ['Conducción de actividades lúdicas y deportivas para jóvenes en riesgo de exclusión.'],
            },
        ],
        education: [
            {
                title: 'Certificado de Profesionalidad Nivel 3 en Seguridad Informática',
                details: 'En curso',
            },
            {
                title: 'Bootcamp intensivo de Fullstack Web Development',
                details: 'Factoría F5, Barcelona · Jun 2025 - Ene 2026 · 850 h',
                description:
                    'HTML, CSS, JavaScript, React, Java, Spring Boot y bases de datos, con módulo de IA aplicada al desarrollo: LLMs, agentes inteligentes y DevOps con Docker y GitHub Actions.',
            },
            { title: 'Grado Superior en Educación Infantil' },
            { title: 'Grado Medio en Conducción de Actividades Físico-Deportivas en el Medio Natural' },
        ],
    },
    en: {
        highlighted: [
            {
                role: 'Real-world projects',
                company: 'Fullstack Development',
                period: '2024 - 2025',
                description: [
                    'End-to-end development of Fullstack web applications applying modular architecture, componentization and design patterns.',
                    'Backend with Java 21 and Spring Boot: secure RESTful APIs with JWT authentication and SQL databases (PostgreSQL and MySQL).',
                    'Frontend with React and Angular: reusable components, API consumption and state management.',
                    'Git and development best practices (GitFlow, testing and version control).',
                    'DevOps and continuous deployment (Docker, GitHub Actions). AI-assisted development, LLM integration (OpenAI, Groq) and workflow automation with intelligent agents (n8n).',
                ],
            },
            {
                role: 'Hackathons',
                company: 'Tech challenges',
                period: '2025',
                description: [
                    {
                        text: 'Sanitas Challenge (Sep 17–19): built an accessible digital solution to improve healthcare. Interface design and implementation in React.',
                        link: SANITAS_REPO,
                    },
                    {
                        text: 'Barcelona Activa (Oct 15–16): a tool to visualize the impact of tourism through maps and rankings. Built with React as part of a team.',
                        link: BARCELONA_ACTIVA_REPO,
                    },
                ],
            },
        ],
        work: [
            {
                role: 'Head Waitress',
                company: 'Hotel Regina',
                period: '2023 - 2026',
                description: [
                    'Supervised dining room service in a high-volume hotel.',
                    'Organized shifts and supported team management.',
                    'Served national and international guests, ensuring a professional experience.',
                    'Trained new staff and maintained quality standards.',
                ],
            },
            {
                role: 'Employment Support & Administration',
                company: 'Fundación Quiero Trabajo',
                period: '2022 - 2023',
                description: [
                    'Supported women in vulnerable situations on their path into employment.',
                    'Coaching on interviews, communication and CV improvement.',
                    'Over 60% went on to employment or training after the programme.',
                ],
            },
            {
                role: 'Group Lead & Workshop Coordinator',
                company: 'Acpacys',
                period: '2019 - 2022',
                description: [
                    'Designed and coordinated inclusive workshops.',
                    'Led computer skills and adapted crafts workshops.',
                    "Improved the group's active participation and digital skills, increasing individual autonomy.",
                ],
            },
            {
                role: 'Youth Activity Leader',
                company: 'Cáritas',
                period: '2016 - 2018',
                description: ['Led recreational and sports activities for young people at risk of social exclusion.'],
            },
        ],
        education: [
            {
                title: 'Level 3 Professional Certificate in Cybersecurity',
                details: 'In progress',
            },
            {
                title: 'Intensive Fullstack Web Development Bootcamp',
                details: 'Factoría F5, Barcelona · Jun 2025 - Jan 2026 · 850 h',
                description:
                    'HTML, CSS, JavaScript, React, Java, Spring Boot and databases, with a module on AI applied to development: LLMs, intelligent agents and DevOps with Docker and GitHub Actions.',
            },
            { title: 'Higher Vocational Degree in Early Childhood Education' },
            { title: 'Vocational Degree in Outdoor Physical and Sports Activities' },
        ],
    },
};
