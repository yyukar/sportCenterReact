import { useState } from "react";

export default function Trainers() {
  const trainers = [
    { img: "assets/img/trainer1.jpg", name: "Jane Doe", role: "Trainer" },
    { img: "assets/img/trainer2.jpg", name: "John Smith", role: "Trainer" },
    { img: "assets/img/trainer3.jpg", name: "Jena Deo", role: "Cardio Trainer" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="trainers" className="py-5 bg-soft">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2 className="section-title">OUR BEST TRAINERS</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle mt-3">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {trainers.map((t, idx) => (
            <div key={t.name} className="col-10 col-sm-4">
              <div
                className={`trainer-card ${openIndex === idx ? "is-open" : ""}`}
                onClick={() => toggleCard(idx)}
                role="button"
                tabIndex={0}
              >
                <img className="img-fluid w-100" src={t.img} alt={t.name} />

                <div className="trainer-overlay">
                  <div className="trainer-badge">
                    <div className="trainer-name">{t.name}</div>
                    <div className="trainer-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}