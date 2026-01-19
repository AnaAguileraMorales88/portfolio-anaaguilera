const AboutCard = ({ title, description }) => (
    <article className="bg-white/90 backdrop-blur-sm p-9 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
        <h3 className="text-xl font-semibold mb-3 text-black border-b-2 border-purple-600 pb-2">
            {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed text-justify">
            {description}
        </p>
    </article>
);

export default AboutCard;