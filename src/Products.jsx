import React from "react";
import product1 from './images/services-01.jpg';
import product2 from './images/services-02.jpg';
import product3 from './images/services-04.jpg';
import product4 from './images/services-05.jpg';

function Products() {
    return (
        <div className="container p-5">
            <div className="row">
                {/* Left column (content) */}
                <div className="col-md-6">
                    <p>01.</p>
                    <h5>Cut Wire - AS Cut</h5>
                    <div className="mt-4">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </div>
                </div>

                {/* Right column (image) */}
                <div className="col-md-6">
                    <img
                        src={product1}
                        alt="Product"
                        className="img-fluid w-100"
                    />
                </div>
            </div>

            <div className="row mt-5">
                {/* Left column (content) */}
                <div className="col-md-6">
                    <img
                        src={product2}
                        alt="Product"
                        className="img-fluid w-100"
                    />
                </div>

                {/* Right column (content) */}
                <div className="col-md-6">
                    <p>02.</p>
                    <h5>Single Conditioned Cut Wire Shots - (G1)</h5>
                    <div className="mt-5">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                {/* Left column (content) */}
                <div className="col-md-6">
                    <p>03.</p>
                    <h5>Cut Wire - AS Cut</h5>
                    <div className="mt-4">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </div>
                </div>

                {/* Right column (image) */}
                <div className="col-md-6">
                    <img
                        src={product3}
                        alt="Product"
                        className="img-fluid w-100"
                    />
                </div>
            </div>

            <div className="row mt-5">
                {/* Left column (content) */}
                <div className="col-md-6">
                    <img
                        src={product4}
                        alt="Product"
                        className="img-fluid w-100"
                    />
                </div>

                {/* Right column (content) */}
                <div className="col-md-6">
                    <p>04.</p>
                    <h5>Single Conditioned Cut Wire Shots - (G1)</h5>
                    <div className="mt-5">
                        AS Cut Carbon Steel Cut Wire Shots are precision-engineered, cold-worked steel
                        shots made by cutting wire into uniform lengths. These shots offer superior
                        hardness, consistency, and durability, making them ideal for shot peening, surface
                        cleaning, and surface preparation applications. They are commonly used in the
                        automotive, aerospace, and manufacturing industries for improving material
                        strength and surface finish.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
