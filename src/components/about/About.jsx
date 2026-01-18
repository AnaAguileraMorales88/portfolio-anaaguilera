import AboutCard from './AboutCard';

const About = () => {
    const cards = [
        {
            icon: "",
            title: "Quién soy",
            description: "Desarrolladora frontend con pasión por crear experiencias web accesibles y modernas. Creo en la belleza de la simplicidad y el código limpio."
        },
        {
            icon: "",
            title: "Lo que me encanta",
            description: "Diseñar interfaces elegantes y funcionales con atención al detalle. Mi inspiración proviene de la combinación perfecta entre diseño y tecnología."
        },
        {
            icon: "",
            title: "Mi enfoque",
            description: "Desarrollo proyectos con paciencia y dedicación, priorizando la accesibilidad, el rendimiento y la experiencia del usuario."
        }
    ];

    return (
        <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
            <article className="max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2">
                        Sobre mí
                    </h2>
                </section>

                <ul className="grid md:grid-cols-3 gap-8 text-center">
                    {cards.map((card, index) => (
                        <li key={index}>
                            <AboutCard {...card} />
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default About;