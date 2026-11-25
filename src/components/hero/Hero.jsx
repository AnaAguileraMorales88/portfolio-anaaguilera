import DownloadCV from '../downloadCV/DownloadCV';
import anaPhoto from '../../assets/Images/Ana.jpg';

const Hero = () => {
    return (
        <section
            id="hero"
            aria-labelledby="hero-title"
            className="relative flex min-h-svh items-center px-5 pb-16 pt-28 sm:px-8"
        >
            <article className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
                <header className="order-2 space-y-7 text-center md:order-1 md:text-left">
                    <p className="chip">
                        <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" aria-hidden="true"></span>
                        Desarrolladora Frontend · Fullstack
                    </p>

                    <h1 id="hero-title" className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                        Hola, soy <em className="font-serif font-normal text-gradient">Ana</em>
                    </h1>

                    <p className="mx-auto max-w-lg text-lg leading-relaxed text-muted md:mx-0">
                        Desarrollo sitios web modernos y funcionales, con atención al diseño, la accesibilidad y la experiencia del usuario.
                    </p>

                    <nav aria-label="Acciones principales" className="flex flex-col justify-center gap-4 pt-2 sm:flex-row md:justify-start">
                        <a href="#projects" className="btn-primary">
                            Descubre mis creaciones
                        </a>
                        <DownloadCV />
                    </nav>
                </header>

                <figure className="order-1 mx-auto md:order-2">
                    <img
                        src={anaPhoto}
                        alt="Ana Aguilera, desarrolladora frontend"
                        className="size-56 rounded-full object-cover p-1.5 ring-1 ring-line sm:size-72 lg:size-80"
                        style={{
                            background: 'linear-gradient(140deg, var(--color-accent), transparent 45%, var(--color-accent-cool))',
                            boxShadow: '0 0 80px -20px rgb(183 169 240 / 0.45)',
                        }}
                    />
                </figure>
            </article>
        </section>
    );
};

export default Hero;
