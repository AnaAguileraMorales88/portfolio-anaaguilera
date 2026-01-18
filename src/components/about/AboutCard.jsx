const AboutCard = ({ icon, title, description }) => (
    <article className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
        <span className="text-4xl mb-4 block" role="img" aria-label={title}>
            {icon}
        </span>
        <h3 className="text-xl font-semibold mb-3 text-purple-600">
            {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
            {description}
        </p>
    </article>
);

export default AboutCard;