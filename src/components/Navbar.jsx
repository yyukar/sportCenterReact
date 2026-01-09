import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="mainNav"
      className={[
        "navbar navbar-expand-lg navbar-dark fixed-top pt-0 pb-1",
        solid ? "is-solid" : "",
        menuOpen ? "is-open" : "",
      ].join(" ")}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          aria-label="Powerfull Home"
          onClick={closeMenu}
        >
          <img
            src="assets/img/logo.png"
            alt="Powerfull logo"
            className="brand-logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link opacity-75" href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link opacity-75" href="#classes" onClick={closeMenu}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link opacity-75" href="#trainers" onClick={closeMenu}>
                Trainers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link opacity-75" href="#review" onClick={closeMenu}>
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link opacity-75" href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <a
            className="btn btn-join ms-lg-3 mt-3 mt-lg-0 py-0 px-2"
            href="#contact"
            onClick={closeMenu}
          >
            JOIN US
          </a>
        </div>
      </div>
    </nav>
  );
}