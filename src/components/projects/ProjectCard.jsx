const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => (
    <article className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">

        <section className="mb-4">
            <h3 className="text-xl font-bold text-black hover:text-purple-700 transition-colors text-center">
                {title}
            </h3>
        </section>

        <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed text-justify">
            {description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
                <li key={tag}>
                    <span className="text-xs px-1 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                        {tag}
                    </span>
                </li>
            ))}
        </ul>

        <section className="flex gap-3">
            <a
      href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex mx-auto items-center justify-center px-5 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 text-sm font-medium hover:scale-120"
    aria-label={`Ver código de ${title} en GitHub`}
>
    GitHub
</a>

            {liveLink && (
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 text-sm font-medium flex-1"
                    aria-label={`Ver demo en vivo de ${title}`}
                >
                    Demo
                </a>
            )}
        </section>

    </article>
);

export default ProjectCard;
