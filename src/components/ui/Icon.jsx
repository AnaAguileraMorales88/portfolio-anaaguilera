/** Iconos de trazo (estilo Lucide) y logotipos, todos decorativos. */
const strokes = {
    home: (
        <>
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
        </>
    ),
    user: (
        <>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
        </>
    ),
    code: (
        <>
            <path d="m16 18 6-6-6-6" />
            <path d="m8 6-6 6 6 6" />
        </>
    ),
    folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    route: (
        <>
            <circle cx="6" cy="19" r="2.5" />
            <circle cx="18" cy="5" r="2.5" />
            <path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
        </>
    ),
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </>
    ),
    download: (
        <>
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
        </>
    ),
    arrowRight: (
        <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </>
    ),
    arrowUpRight: (
        <>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
        </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    pause: (
        <>
            <path d="M9 5v14" />
            <path d="M15 5v14" />
        </>
    ),
    play: <path d="M7 4.5v15l12-7.5z" />,
    heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" />,
    target: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="12" cy="12" r="0.8" />
        </>
    ),
    layout: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 20V9" />
        </>
    ),
    server: (
        <>
            <rect x="3" y="4" width="18" height="7" rx="2" />
            <rect x="3" y="13" width="18" height="7" rx="2" />
            <path d="M7 7.5h.01" />
            <path d="M7 16.5h.01" />
        </>
    ),
    database: (
        <>
            <ellipse cx="12" cy="5.5" rx="8" ry="3" />
            <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
            <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </>
    ),
    check: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="m8.5 12 2.5 2.5 4.5-5" />
        </>
    ),
    wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.7-1.3a4 4 0 0 0-5-5l2.6 2.6-2 2-2.6-2.6" />,
    sparkles: (
        <>
            <path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
            <path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
        </>
    ),
    accessibility: (
        <>
            <circle cx="12" cy="4.5" r="1.6" />
            <path d="M5 8.5 12 10l7-1.5" />
            <path d="M12 10v4.5l-3 6" />
            <path d="m12 14.5 3 6" />
        </>
    ),
    commit: (
        <>
            <circle cx="12" cy="12" r="3.2" />
            <path d="M2.5 12h6.3" />
            <path d="M15.2 12h6.3" />
        </>
    ),
};

const brands = {
    github: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3',
    linkedin:
        'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z',
};

const Icon = ({ name, className = 'size-5' }) => {
    if (brands[name]) {
        return (
            <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false">
                <path d={brands[name]} />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
            focusable="false"
        >
            {strokes[name]}
        </svg>
    );
};

export default Icon;
