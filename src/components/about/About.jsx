import AboutCard from './AboutCard';
import { aboutData } from './aboutData';
import SectionHeading from '../ui/SectionHeading';

const About = () => {
    return (
        <section id="about" aria-labelledby="about-title" className="px-5 py-24 sm:px-8">
            <SectionHeading id="about-title" eyebrow="01 · Perfil" title="Sobre mí" />

            <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                {aboutData.map((card) => (
                    <li key={card.title}>
                        <AboutCard {...card} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default About;
