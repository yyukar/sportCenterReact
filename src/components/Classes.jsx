import { useState } from "react";

export default function Classes() {
  const [active, setActive] = useState("yoga");

  return (
    <section id="classes" className="section-angle py-5">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2 className="section-title fw-medium">OUR CLASSES</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle mt-3">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>

        <ul className="nav nav-pills row classes-tabs mx-auto g-3" id="classesTabs">
          <li className="nav-item col-6 sm-3">
            <button
              type="button"
              className={`nav-link ${active === "yoga" ? "active" : ""}`}
              onClick={() => setActive("yoga")}
            >
              Yoga
            </button>
          </li>

          <li className="nav-item col-6 sm-3">
            <button
              type="button"
              className={`nav-link ${active === "group" ? "active" : ""}`}
              onClick={() => setActive("group")}
            >
              Group
            </button>
          </li>

          <li className="nav-item col-4 sm-3">
            <button
              type="button"
              className={`nav-link ${active === "solo" ? "active" : ""}`}
              onClick={() => setActive("solo")}
            >
              Solo
            </button>
          </li>

          <li className="nav-item col-8 sm-3">
            <button
              type="button"
              className={`nav-link ${active === "stretch" ? "active" : ""}`}
              onClick={() => setActive("stretch")}
            >
              Stretching
            </button>
          </li>
        </ul>

        <div className="mt-4">
          {active === "yoga" && (
            <div className="row align-items-center g-4">
              <div className="col-12 col-sm-6">
                <h3 className="fw-bold mb-3">Why are your Yoga?</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur possimus voluptatum impedit id perferendis dolorum
                  placeat, exercitationem in officia.
                </p>

                <h4 className="fw-bold mt-4">When comes Yoga Your Time.</h4>
                <ul className="list-unstyled small mt-3">
                  <li>Saturday-Sunday: 8:00am - 10:00am</li>
                  <li className="mt-1">Monday-Tuesday: 10:00am - 12:00pm</li>
                  <li className="mt-1">Wednesday-Friday: 3:00pm - 6:00pm</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  className="img-fluid rounded-3 shadow-sm"
                  src="assets/img/yoga.jpg"
                  alt="Yoga class"
                />
              </div>
            </div>
          )}

          {active === "group" && (
            <div className="row align-items-center g-4">
              <div className="col-12 col-sm-6">
                <h3 className="fw-bold mb-3">Why are your Group?</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur possimus voluptatum impedit id perferendis dolorum
                  placeat, exercitationem in officia.
                </p>

                <h4 className="fw-bold mt-4">When comes Group Your Time.</h4>
                <ul className="list-unstyled small mt-3">
                  <li>
                    <strong>Saturday-Sunday:</strong> 8:00am - 10:00am
                  </li>
                  <li className="mt-1">
                    <strong>Monday-Tuesday:</strong> 10:00am - 12:00pm
                  </li>
                  <li className="mt-1">
                    <strong>Wednesday-Friday:</strong> 3:00pm - 6:00pm
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  className="img-fluid rounded-3 shadow-sm"
                  src="assets/img/group.webp"
                  alt="Group class"
                />
              </div>
            </div>
          )}

          {active === "solo" && (
            <div className="row align-items-center g-4">
              <div className="col-12 col-sm-6">
                <h3 className="fw-bold mb-3">Why are your Solo?</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur possimus voluptatum impedit id perferendis dolorum
                  placeat, exercitationem in officia.
                </p>

                <h4 className="fw-bold mt-4">When comes Solo Your Time.</h4>
                <ul className="list-unstyled small mt-3">
                  <li>
                    <strong>Saturday-Sunday:</strong> 8:00am - 10:00am
                  </li>
                  <li className="mt-1">
                    <strong>Monday-Tuesday:</strong> 10:00am - 12:00pm
                  </li>
                  <li className="mt-1">
                    <strong>Wednesday-Friday:</strong> 3:00pm - 6:00pm
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  className="img-fluid rounded-3 shadow-sm"
                  src="assets/img/solo.jpg"
                  alt="Solo class"
                />
              </div>
            </div>
          )}

          {active === "stretch" && (
            <div className="row align-items-center g-4">
              <div className="col-12 col-sm-6">
                <h3 className="fw-bold mb-3">Why are your Stretching?</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur possimus voluptatum impedit id perferendis dolorum
                  placeat, exercitationem in officia.
                </p>

                <h4 className="fw-bold mt-4">When comes Stretching Your Time.</h4>
                <ul className="list-unstyled small mt-3">
                  <li>
                    <strong>Saturday-Sunday:</strong> 8:00am - 10:00am
                  </li>
                  <li className="mt-1">
                    <strong>Monday-Tuesday:</strong> 10:00am - 12:00pm
                  </li>
                  <li className="mt-1">
                    <strong>Wednesday-Friday:</strong> 3:00pm - 6:00pm
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  className="img-fluid rounded-3 shadow-sm"
                  src="assets/img/stret.webp"
                  alt="Stretching class"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}