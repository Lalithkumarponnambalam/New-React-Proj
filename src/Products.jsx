import React from "react";
import product1 from './images/services-01.jpg';
import product2 from './images/services-02.jpg';
import product3 from './images/services-04.jpg';
import product4 from './images/services-05.jpg';
import "./App.css";

function Products() {
    return (
        <div className="container p-5">
            {/* First Row */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-2 order-md-1">
                    <p style={{fontWeight: '500'}} className="mt-4 mt-lg-0 mt-md-0">01.</p>
                    <h5 className="fw-bolder">Cut Wire - AS Cut</h5>
                    <p className="mt-4 description-text">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </p>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src={product1} alt="Product 1" className="img-fluid w-100" />
                </div>
            </div>

            {/* Second Row */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-1 order-md-1">
                    <img src={product2} alt="Product 2" className="img-fluid w-100" />
                </div>
                <div className="col-md-6 order-2 order-md-2">
                    <p style={{fontWeight: '500'}} className="mt-4 mt-lg-0 mt-md-0">02.</p>
                    <h5 className="fw-bolder">Single Conditioned Cut Wire Shots - (G1)</h5>
                    <p className="mt-4 description-text">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </p>
                </div>
            </div>

            {/* Third Row */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-2 order-md-1">
                    <p style={{fontWeight: '500'}} className="mt-4 mt-lg-0 mt-md-0">03.</p>
                    <h5 className="fw-bolder">Cut Wire - AS Cut</h5>
                    <p className="mt-4 description-text">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </p>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                    <img src={product3} alt="Product 3" className="img-fluid w-100" />
                </div>
            </div>

            {/* Fourth Row */}
            <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-1">
                    <img src={product4} alt="Product 4" className="img-fluid w-100" />
                </div>
                <div className="col-md-6 order-2 order-md-2">
                    <p style={{fontWeight: '500'}} className="mt-4 mt-lg-0 mt-md-0">04.</p>
                    <h5 className="fw-bolder">Single Conditioned Cut Wire Shots - (G1)</h5>
                    <p className="mt-4 description-text">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Products;
