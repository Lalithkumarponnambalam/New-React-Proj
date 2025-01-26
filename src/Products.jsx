import React from "react";
import product1 from './images/services-01.jpg';
import product2 from './images/services-02.jpg';
import product3 from './images/services-04.jpg';
import product4 from './images/services-05.jpg';
import "./App.css";

function Products() {
    return (
        <div className="container p-lg-5 p-md-5 p-4">
            {/* First Row */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-2 order-md-1">
                    <p style={{ fontWeight: '500' }} className="mt-4 mt-lg-0 mt-md-0">01.</p>
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
                    <p style={{ fontWeight: '500' }} className="mt-4 mt-lg-0 mt-md-0">02.</p>
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

            <div className="mx-auto justify-content-center d-flex">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover caption-top">
                        <caption>Carbon Steel Cut Wire Shots</caption>
                        <thead>
                            <tr>
                                <th scope="col">Specification</th>
                                <th scope="col">Carbon Steel Cut Wire Shot</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hardness Range</td>
                                <td>45-50 HRC, 50-55 HRC, 55-60 HRC</td>
                            </tr>
                            <tr>
                                <td>Size Range</td>
                                <td>0.40 mm to 2.50 mm (0.016" to 0.098")</td>
                            </tr>
                            <tr>
                                <td>Bulk Density</td>
                                <td>Approximately 4.5 g/cm³</td>
                            </tr>
                            <tr>
                                <td>Chemical Composition</td>
                                <td>C: 0.10-0.15%, Mn: 1.20-1.50%, Si: 0.10-0.25%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Third Row */}
            <div className="row align-items-center mb-5 mt-5">
                <div className="col-md-6 order-2 order-md-1">
                    <p style={{ fontWeight: '500' }} className="mt-4 mt-lg-0 mt-md-0">03.</p>
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
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-1 order-md-1">
                    <img src={product4} alt="Product 4" className="img-fluid w-100" />
                </div>
                <div className="col-md-6 order-2 order-md-2">
                    <p style={{ fontWeight: '500' }} className="mt-4 mt-lg-0 mt-md-0">04.</p>
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

            <div className="table-responsive mx-auto" style={{ maxWidth: '100%' }}>
                <table className="table table-bordered table-hover caption-top">
                    {/* <caption>Chemical Composition</caption> */}
                    <thead className="thead-warning">
                        <tr>
                            <th scope="col">Project</th>
                            <th scope="col">Specification</th>
                            <th scope="col">Test Mode</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carbon (C)</td>
                            <td>0.45-0.75%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Phosphorus (P)</td>
                            <td>≤ 0.04%</td>
                            <td>ISO 9556:1989</td>
                        </tr>
                        <tr>
                            <td>Chromium (Cr)</td>
                            <td>≤ 0.04%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Silicon (Si)</td>
                            <td>0.10-0.30%</td>
                            <td>ISO 439:1982</td>
                        </tr>
                        <tr>
                            <td>Manganese (Mn)</td>
                            <td>0.40-1.5%</td>
                            <td>ISO 629:1982</td>
                        </tr>
                        <tr>
                            <td>Molybdenum (Mo)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Sulfur (S)</td>
                            <td>≤ 0.04%</td>
                            <td>ISO 10714:1992</td>
                        </tr>
                        <tr>
                            <td>Nickel (Ni)</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>MICROSTRUCTURE</td>
                            <td>Deformed pearlite, carbide network class 3</td>
                            <td>GB/T 19816.5-2005</td>
                        </tr>
                        <tr>
                            <td>DENSITY</td>
                            <td>7.8 g/cm³</td>
                            <td>GB/T 19816.4-2005</td>
                        </tr>
                        <tr>
                            <td>EXTERNAL FORM</td>
                            <td className="text-wrap">Cylindrical shape, flat shape ≤10%, trimming and burrs ≤18%</td>
                            <td>Visual Inspection</td>
                        </tr>
                        <tr>
                            <td>HARDNESS</td>
                            <td>HRC 40-60</td>
                            <td>GB/T 19816.3-2005</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Products;
