export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form submit:", data);

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-heading text-center mb-4">
          <h2 className="section-title">CONTACT US</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle mt-3">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical at Hampden-Sydney College.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-sm-5">
            <div className="row g-3 mb-2">
              <div className="col-6">
                <div className="fw-semibold">Mobile Number</div>
                <div className="text-muted small">+135 773 321 4442</div>
              </div>
              <div className="col-6">
                <div className="fw-semibold">Email Address</div>
                <div className="text-muted small">demo@demo.com</div>
              </div>
            </div>

            <h5 className="fw-bold mt-3">Make An Appointment</h5>

            <form className="mt-3" onSubmit={onSubmit}>
              <div className="mb-4">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your Message"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="col-12 col-sm-7">
            <div className="map-wrap">
              <iframe
                title="Google Map"
                className="w-100 h-100 rounded-3"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.7820590010576!2d29.009695912643288!3d41.081170866539715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70449295f6f%3A0x6f24bceeb952c6b6!2sLevent%20Loft%201!5e0!3m2!1str!2str!4v1767358306148!5m2!1str!2str"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}