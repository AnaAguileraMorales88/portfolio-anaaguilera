import Icon from '../ui/Icon';

const SkillCategory = ({ icon, category, skills }) => (
    <article className="card card-hover h-full p-5">
        <header className="mb-4 flex items-center gap-3">
            <span
                className="card-icon grid size-9 place-items-center rounded-lg bg-accent-soft text-accent"
                aria-hidden="true"
            >
                <Icon name={icon} className="size-[18px]" />
            </span>
            <h3 className="font-bold text-brand">{category}</h3>
        </header>
        <ul className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
                <li key={skill} className="chip">
                    {skill}
                </li>
            ))}
        </ul>
    </article>
);

export default SkillCategory;
