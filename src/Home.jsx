import React from "react";
import service1 from './images/services-02.jpg';
import service2 from './images/services-03.jpg';
import "./App.css";

function Home() {
    return (
        <>
            <section style={{ backgroundColor: "#edeeef"}}>
                <div className="container p-5">
                    <h2 className="text-center">How we create an impact on the world</h2>
                    <div className="text-center w-75 mx-auto mt-4">
                        At Manufacturing Company, we create an impactful difference in the world through our innovative manufacturing processes. With cutting-edge technology and a dedication to quality, we're shaping the future one product at a time.
                    </div>
                    <div className="row mt-5">
                        {/* Card 1 */}
                        <div className="col-md-6 mb-4">
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
                        <div className="col-md-6 mb-4">
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
        </>
    );
}

export default Home;
