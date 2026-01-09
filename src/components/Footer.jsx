export default function Footer() {
    return (
        <footer className="footer pt-2 pb-2">
            <div className="container">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <img
                        src="assets/img/logo.png"
                        alt="Powerfull logo"
                        className="brand-logo"
                    />
                </div>

                <p className="small text-white-50 footer-text mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                    voluptatibus, explicabo eaque repellat, laboriosam ex earum deleniti
                    nemo inventore molestiae cum amet deserunt quas reiciendis corrupti
                    voluptatem enim consectetur. Sed.
                </p>

                <div className="row g-4 justify-content-center px-5">
                    <div className="col-6 col-sm-8">
                        <h6 className="text-white fw-bold">Information</h6>
                        <ul className="list-unstyled small mt-3 footer-links">
                            <li>
                                <a href="#home">About Us</a>
                            </li>
                            <li>
                                <a href="#classes">Classes</a>
                            </li>
                            <li>
                                <a href="#purchase">Blog</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-4">
                        <h6 className="text-white fw-bold">Helpful Links</h6>
                        <ul className="list-unstyled small mt-3 footer-links">
                            <li>
                                <a href="#classes">Services</a>
                            </li>
                            <li>
                                <a href="#purchase">Supports</a>
                            </li>
                            <li>
                                <a href="#contact">Terms &amp; Condition</a>
                            </li>
                            <li>
                                <a href="#contact">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}