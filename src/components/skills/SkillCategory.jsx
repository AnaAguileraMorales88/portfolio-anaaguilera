import Icon from '../ui/Icon';

const SkillCategory = ({ icon, category, skills }) => (
    <article className="card h-full p-6">
        <header className="mb-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent" aria-hidden="true">
                <Icon name={icon} />
            </span>
            <h3 className="text-lg font-bold text-brand">{category}</h3>
        </header>
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
