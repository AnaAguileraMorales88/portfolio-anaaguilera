const ExperienceItem = ({ role, company, period, description }) => (
    <li className="relative pl-8 pb-12 last:pb-0 border-l-2 border-purple-200 ml-4">
        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white"></span>

        <article className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 ml-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{role}</h3>
            
            <section className="flex flex-col sm:flex-row sm:items-center text-sm text-purple-600 mb-4 gap-2">
                <span className="font-medium">{company}</span>
                <span className="hidden sm:inline text-gray-300" aria-hidden="true">•</span>
                <time className="text-gray-600">{period}</time>
            </section>

            <ul className="space-y-2 text-gray-600 text-sm">
                {description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    </li>
);

export default ExperienceItem;