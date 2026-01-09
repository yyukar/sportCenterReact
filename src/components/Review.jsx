export default function Review() {
    const reviews = [
        {
            img: "assets/img/client1.jpg",
            alt: "Client 1",
            name: "Diet Expert",
            title: "CFO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur quia, nostrum ipsam id, harum molestias.",
        },
        {
            img: "assets/img/client2.jpg",
            alt: "Client 2",
            name: "Cardio Trainer",
            title: "CEO",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, tenetur quia, nostrum ipsam id, harum molestias.",
        },
    ];

    return (
        <section id="review" className="py-5 bg-soft">
            <div className="container">
                <div className="section-heading text-center mb-4">
                    <h2 className="section-title">REVIEW CLIENT</h2>
                    <div className="section-underline"></div>
                    <p className="section-subtitle mt-3 bold">
                        Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical at Hampden-Sydney College.
                    </p>
                </div>

                <div className="row g-4">
                    {reviews.map((r) => (
                        <div key={r.name} className="col-12 col-sm-6">
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <img className="review-avatar" src={r.img} alt={r.alt} />
                                <div>
                                    <div className="fw-semibold">{r.name}</div>
                                    <div className="small text-muted">{r.title}</div>
                                </div>
                            </div>

                            <div className="review-bubble">
                                <p className="mb-0 small">{r.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}