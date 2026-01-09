export default function Stats() {
    return (
        <section className="stats py-4">
            <div className="container">
                <div className="row g-3 text-center">
                    {[
                        { n: 325, t: "Course" },
                        { n: 405, t: "Work Out" },
                        { n: 305, t: "Working Hour" },
                        { n: 705, t: "Happy Client" },
                    ].map((item) => (
                        <div key={item.t} className="col-12 col-sm-3">
                            <div className="stat-card">
                                <div className="stat-number">{item.n}</div>
                                <div className="stat-label">{item.t}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}