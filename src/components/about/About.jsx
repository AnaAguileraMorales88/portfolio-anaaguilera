import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import AboutCard from './AboutCard';
import { aboutData } from './aboutData';
import { useLanguage } from '../../i18n/useLanguage';

const About = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen id="about" state={state} labelledBy="about-title">
            <SectionHeading id="about-title" eyebrow={t.about.eyebrow} pre={t.about.pre} mark={t.about.mark}>
                {t.about.intro}
            </SectionHeading>

            <ul className="carousel lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
                {aboutData[lang].map((card, i) => (
                    <li key={card.icon} className="reveal lg:w-auto lg:max-w-none" style={{ '--i': i + 3 }}>
                        <AboutCard {...card} />
                    </li>
                ))}
            </ul>
        </Screen>
    );
};

export default About;
