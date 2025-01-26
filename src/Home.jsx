import React from "react";
import service1 from './images/services-02.jpg';
import service2 from './images/services-03.jpg';
import industry from './images/industrial-experience.jpg';
import whyUs from './images/why-us.jpg';
import "./App.css";

function Home() {
    return (
        <div>
            <section style={{ backgroundColor: "#edeeef" }}>
                <div className="container p-5">
                    <h2 className="text-center">How we create an impact on the world</h2>
                    <div className="text-center w-75 mx-auto mt-4">
                        At Manufacturing Company, we create an impactful difference in the world through our innovative manufacturing processes. With cutting-edge technology and a dedication to quality, we're shaping the future one product at a time.
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        {/* Card 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card text-white">
                                <div
                                    className="card-img"
                                    style={{
                                        backgroundImage: `url(${service1})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "500px",
                                    }}
                                ></div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                    {/* Title at the top */}
                                    <h3 className="card-title p-2 rounded">Manufacturing and Production</h3>
                                    {/* Description at the bottom */}
                                    <p className="card-text p-2 rounded">
                                        Our state-of-the-art manufacturing facilities and skilled team ensure efficient and high-quality production to meet your demands.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card text-white">
                                <div
                                    className="card-img"
                                    style={{
                                        backgroundImage: `url(${service2})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "500px",
                                    }}
                                ></div>
                                <div className="card-img-overlay d-flex flex-column justify-content-between">
                                    <h3 className="card-title p-2 rounded">Quality Assurance and Control</h3>
                                    <p className="card-text p-2 rounded">
                                        We prioritize quality at every step with rigorous quality control measures in place, ensuring that our products meet the highest industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="p-5">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-lg-6 col-12 px-4 text-start">
                                <div>
                                    <h5 style={{ color: '#ffbc28' }}>WHY US</h5>
                                    <h2 className="mt-4 why-title">We are future of manufacturing technology</h2>
                                    <p className="description-text mt-3">Discover the future of manufacturing technology with Manufacturing Company. We utilize the latest advancements and cutting-edge techniques to revolutionize the industry and deliver unparalleled results for our clients.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-lg-6 col-12">
                                <img src={industry} alt="about-2" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row align-items-start mt-3">
                            <div className="col-lg-6 col-lg-6 col-12 text-end why-img-second">
                                <img src={whyUs} alt="about-3" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-lg-6 col-12 px-5 text-start">
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="me-5 fw-bolder year-text">10+</h1>
                                        <h3>Years of Industrial Experience</h3>
                                    </div>

                                    <p className="description-text mt-2">With over a decade of experience in the abrasives sector, SB Abrasives is dedicated
                                        to being at the forefront of manufacturing technology. Our extensive expertise
                                        allows us to deliver unparalleled results for our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="table-responsive mx-auto" style={{ maxWidth: '100%' }}>
                    <table className="table table-bordered table-hover caption-top">
                        {/* <caption>Chemical Composition</caption> */}
                        <thead className="thead-warning">
                            <tr>
                                <th scope="col">Characteristic / Defect</th>
                                <th scope="col">Cut Wire</th>
                                <th scope="col">Cast Steel Shots</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Particle Shape</td>
                                <td>≤ 5% (tighter tolerance, fewer unacceptable shapes)</td>
                                <td>Marginal and unacceptable shapes
                                    – looser tolerance compared to cut
                                    wire</td>
                            </tr>
                            <tr>
                                <td>Voids</td>
                                <td>≤ 10%</td>
                                <td>≤ 15%</td>
                            </tr>
                            <tr>
                                <td>Shrinkage</td>
                                <td>≤ 10%</td>
                                <td>≤ 15%</td>
                            </tr>
                            <tr>
                                <td>Cracks</td>
                                <td>≤ 15%</td>
                                <td>≤ 15%</td>
                            </tr>
                            <tr>
                                <td>Microstructure</td>
                                <td>Homogeneous structure,
                                    fewer inconsistencies</td>
                                <td>Slight variations in microstructure
                                    due to casting process</td>
                            </tr>
                            <tr>
                                <td>Screening</td>
                                <td>Tighter than SAE J444 (for
                                    more precision)</td>
                                <td>Looser screening, more variation in
                                    size and shape</td>
                            </tr>
                            <tr>
                                <td>Hardness
                                    Uniformity</td>
                                <td>High uniformity due to
                                    manufacturing precision</td>
                                <td>Can have less uniform hardness
                                    due to casting process</td>
                            </tr>
                            <tr>
                                <td>Durability</td>
                                <td>Higher durability (less wear
                                    and tear in applications)</td>
                                <td>Less durable, may wear faster
                                    depending on casting quality</td>
                            </tr>
                            <tr>
                                <td>Surface Quality</td>
                                <td>Smoother surface, minimal
                                    defects</td>
                                <td>Can have rougher surface, leading
                                    to potential surface damage</td>
                            </tr>
                            <tr>
                                <td>Shape Consistency</td>
                                <td>Highly consistent, sharp and
                                    uniform (ideal for precision)</td>
                                <td>More variation in shape, often
                                    irregular and more aggressive</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Home;
