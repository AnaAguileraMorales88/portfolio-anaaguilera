const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
        >
            <article className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <header className="order-2 md:order-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                        Hola, soy <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Ana</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Desarrollo sitios web modernos y funcionales, con atención al diseño, la accesibilidad y la experiencia del usuario.
                    </p>
                    <a
                        href="#projects"
                        className="inline-block mt-6 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        aria-label="Ir a la sección de proyectos"
                    >
                        Descubre mis creaciones
                    </a>
                </header>

                <figure className="order-1 md:order-2 flex justify-center md:justify-end">
                    <img
                        src="src/assets/Images/Ana.jpg"
                        alt="Ana Aguilera, desarrolladora frontend"
                        className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
                    />
                </figure>
            </article>
        </section>
    );
};

export default Hero;