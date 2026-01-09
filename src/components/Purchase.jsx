export default function Purchase() {
    const products = [
        {
            img: "assets/img/purchase1.jpg",
            alt: "Kettlebell 5kg",
            title: "Kettlebell / 5kg",
            oldPrice: "$89.99",
            newPrice: "$59.99",
        },
        {
            img: "assets/img/purchase2.jpg",
            alt: "Treadmill",
            title: "Treadmill",
            oldPrice: "$79.99",
            newPrice: "$59.99",
        },
        {
            img: "assets/img/purchase3.jpg",
            alt: "Adjustable Dumbbell",
            title: "Adjustable Dumbbell",
            oldPrice: "$89.99",
            newPrice: "$59.99",
        },
        {
            img: "assets/img/purchase4.jpg",
            alt: "Kettlebell 3kg",
            title: "Kettlebell / 3kg",
            oldPrice: "$89.99",
            newPrice: "$59.99",
        },
    ];

    return (
        <section id="purchase" className="py-5">
            <div className="container">
                <div className="section-heading text-center mb-4">
                    <h2 className="section-title">PURCHASE FROM US</h2>
                    <div className="section-underline"></div>
                    <p className="section-subtitle mt-3">
                        Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical at Hampden-Sydney College.
                    </p>
                </div>

                <div className="row g-4">
                    {products.map((p) => (
                        <div key={p.title} className="col-12 col-sm-3">
                            <div className="card product-card h-100">
                                <img src={p.img} className="card-img-top" alt={p.alt} />
                                <div className="card-body text-center">
                                    <div className="fw-semibold">{p.title}</div>
                                    <div className="small mt-1">
                                        <span className="text-decoration-line-through text-muted">
                                            {p.oldPrice}
                                        </span>
                                        <span className="fw-semibold ms-1">{p.newPrice}</span>
                                    </div>
                                </div>
                                <div className="card-footer bg-white border-0 text-center pb-3">
                                    <button className="btn btn-sm btn-outline-dark" type="button">
                                        <span className="me-1">🛒</span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}