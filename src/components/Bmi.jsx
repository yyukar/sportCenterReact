import { useState } from "react";

export default function Bmi() {
  const [height, setHeight] = useState(188);
  const [weight, setWeight] = useState(77);

  const BAR_START = 8;  
  const BAR_END = 90.5; 

  function getCategory(bmi) {
    if (bmi < 18.5) return { label: "Underweight", cssClass: "is-underweight", index: 0 };
    if (bmi < 25)   return { label: "Normal",      cssClass: "is-normal",      index: 1 };
    if (bmi < 30)   return { label: "Overweight",  cssClass: "is-overweight",  index: 2 };
    if (bmi < 35)   return { label: "Obese",       cssClass: "is-obese",       index: 3 };
    return            { label: "Extremely Obese", cssClass: "is-extreme",     index: 4 };
  }

  function getSegmentCenter(index) {
    const segmentWidth = (BAR_END - BAR_START) / 5;
    return BAR_START + (index + 0.5) * segmentWidth;
  }

  const cm = Number(height);
  const kg = Number(weight);

  let bmiText = "-";
  let label = "-";
  let cssClass = "";
  let arrowLeft = "10%";

  if (cm && kg) {
    const meters = cm / 100;
    const bmi = kg / (meters * meters);

    const cat = getCategory(bmi);
    bmiText = bmi.toFixed(2);
    label = cat.label;
    cssClass = cat.cssClass;
    arrowLeft = `${getSegmentCenter(cat.index)}%`;
  }

  return (
    <section id="bmi" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-sm-6">
            <h2 className="fw-bold mb-3 text-brand">BMI Calculator</h2>

            <p className="text-muted small">
              Contrary to popular belief, Lorem ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <p className="text-muted small">
              Contrary to popular belief, Lorem ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>

            <div className="row g-2 mt-3">
              <div className="col-6">
                <label className="form-label small mb-1" htmlFor="bmiHeight">
                  Your Height
                </label>
                <div className="input-group">
                  <input
                    id="bmiHeight"
                    type="number"
                    min="50"
                    max="250"
                    className="form-control"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                  <span className="input-group-text">cm</span>
                </div>
              </div>

              <div className="col-6">
                <label className="form-label small mb-1" htmlFor="bmiWeight">
                  Your Weight
                </label>
                <div className="input-group">
                  <input
                    id="bmiWeight"
                    type="number"
                    min="10"
                    max="300"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <span className="input-group-text">kg</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className={`bmi-top text-center mb-2 ${cssClass}`}>
              <div className="bmi-top-value">{bmiText}</div>
              <div className="bmi-top-label">{label}</div>
            </div>

            <div className="bmi-scale-wrap">
              <img
                className="img-fluid"
                src="assets/img/bmi-index.jpg"
                alt="Body Mass Index scale"
              />
              <div
                className="bmi-arrow"
                aria-hidden="true"
                style={{ left: arrowLeft }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}