    const DownloadCV = () => {
    return (
        <a
        href="/cv-ana-aguilera.pdf"
        download="CV-Ana-Aguilera.pdf"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        aria-label="Descargar CV de Ana Aguilera en PDF"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
        </svg>
        Descargar CV
        </a>
    );
    };

    export default DownloadCV;
