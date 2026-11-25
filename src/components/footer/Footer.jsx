const Footer = () => {
    return (
        <footer className="border-t border-line px-5 py-8 text-center sm:px-8">
            <p className="text-sm text-subtle">
                © {new Date().getFullYear()} Ana Aguilera. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
