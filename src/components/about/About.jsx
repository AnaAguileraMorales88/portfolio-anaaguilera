import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import AboutCard from './AboutCard';
import { aboutData } from './aboutData';
import { useLanguage } from '../../i18n/useLanguage';

const About = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen id="about" state={state} labelledBy="about-title">
            <SectionHeading id="about-title" eyebrow={t.about.eyebrow} pre={t.about.pre} mark={t.about.mark} />

            <ol className="grid gap-5 md:grid-cols-3 lg:gap-6">
                {aboutData[lang].map((card) => (
                    <li key={card.icon}>
                        <AboutCard {...card} />
                    </li>
                ))}
            </ol>
        </Screen>
    );
};

export default About;
