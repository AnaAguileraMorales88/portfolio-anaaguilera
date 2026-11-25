const SkillCategory = ({ category, skills }) => (
    <article className="glass h-full p-7">
        <h3 className="mb-5 text-lg font-medium text-fg">{category}</h3>
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <li key={skill} className="chip">
                    {skill}
                </li>
            ))}
        </ul>
    </article>
);

export default SkillCategory;
