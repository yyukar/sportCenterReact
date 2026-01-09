export default function Hero() {
    return (
        <header id="home" className="hero">
            <div className="container hero-content">
                <div className="row">
                    <div className="col-12 col-sm-8 col-lg-8 col-xl-12">
                        <span className="badge hero-badge mb-3 p-2">POWERFULL</span>

                        <h1 className="display-4 fw-bold text-white lh-1">
                            Group<br />Practice<br />With Trainer
                        </h1>

                        <p className="hero-text hero-text-box mt-3">
                            Lorem ipsum...
                        </p>

                        <div className="row g-2">
                            <div className="col-12 col-sm-auto">
                                <a
                                    className="btn btn-primary w-100 px-3 py-1 hero-badge border-0"
                                    href="#contact"
                                >
                                    Sign Up
                                </a>
                            </div>
                            <div className="col-12 col-sm-auto">
                                <a
                                    className="btn btn-outline-light w-100 px-3 py-1 hero-btn-box"
                                    href="#classes"
                                >
                                    Details
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}