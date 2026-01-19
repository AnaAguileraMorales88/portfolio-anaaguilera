const SkillCategory = ({ category, skills }) => (
    <article className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        <h3 className="text-xl font-bold text-black border-b-1 border-purple-600 mb-4 text-center">
            {category}
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 flex-1">
            {skills.map((skill) => (
                <li key={skill}>
                    <span className="inline-block px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 
                        text-xs font-medium text-gray-800">
                        {skill}
                    </span>
                </li>
            ))}
        </ul>
    </article>
);

export default SkillCategory;