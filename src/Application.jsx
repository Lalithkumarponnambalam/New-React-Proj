import React from "react";
import "./App.css";
import application1 from './images/application-01.jpg';
import application2 from './images/application-02.jpg';
import application3 from './images/application-03.jpg';
import application4 from './images/application-04.jpg';
import application5 from './images/application-05.jpg';
import application6 from './images/application-06.jpg';
import application7 from './images/application-07.jpg';
import application8 from './images/application-08.jpg';
import application9 from './images/application-09.jpg';
import application10 from './images/application-10.jpg';
import application11 from './images/application-11.jpg';
import application12 from './images/application-12.jpg';
import application13 from './images/application-13.jpg';
import application14 from './images/application-14.jpg';
import application15 from './images/application-15.jpg';

function Application() {
    return (
        <div className="container p-lg-5 p-md-5 p-3">

            <section>
                <h3 className="text-center">Blasting</h3>
                <div className="card border-0 mb-3">
                    <div className="card border-0 mt-5">
                        <div className="row g-0">
                            <div className="col-md-6" style={{ background: '#0056B8' }}>
                                <div className="card-body">
                                    <p className="card-text text-white p-3">
                                        Shot blasting is a process that uses high-speed rotating impeller to throw Abrasives out and impact workpiece at high speed to clean up the surface, or twist the lattice of workpiece surface by high-speed impact to increase the surface hardness and
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={application1} alt="application1" style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-4 col-lg-4 col-6">
                        <div className="card border-0">
                            <img src={application2} className="card-img-top" alt="application2" />
                            <div className="card-body custom-background">
                                <p className="card-text">Engineering machinery</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6">
                        <div className="card border-0">
                            <img src={application3} className="card-img-top" alt="application3" />
                            <div className="card-body custom-background">
                                <p className="card-text">Steel plate surface preparation</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-0 mt-md-0 mt-3">
                        <div className="card border-0">
                            <img src={application4} className="card-img-top" alt="application4" />
                            <div className="card-body custom-background">
                                <p className="card-text">Stainless steel plate cleans up</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application5} className="card-img-top" alt="application5" />
                            <div className="card-body custom-background">
                                <p className="card-text">Steel structure</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application6} className="card-img-top" alt="application6" />
                            <div className="card-body custom-background">
                                <p className="card-text">The pipeline anticorrosion</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application7} className="card-img-top" alt="application7" />
                            <div className="card-body custom-background">
                                <p className="card-text">Casting cleaning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <h3 className="text-center">Sand blasting</h3>
                <div className="card border-0 mt-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={application5} style={{ width: '100%' }} alt="application5" />
                        </div>
                        <div className="col-md-6" style={{ background: '#f8f9fa' }}>
                            <div className="card-body">
                                <p className="card-text">

                                    After the shot peening of the steel surface, there will be many fine peaks and troughs, that is, the surface roughness. The coating goes deep into the bottom of the trough, and the crest of the wave is like a tooth, holding the coating tightly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row align-items-center mt-5">
                    <div className="col-md-4 col-lg-4 col-6">
                        <div className="card border-0">
                            <img src={application8} className="card-img-top" alt="application8" />
                            <div className="card-body custom-background">
                                <p className="card-text">Body section</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6">
                        <div className="card border-0">
                            <img src={application9} className="card-img-top" alt="application9" />
                            <div className="card-body custom-background">
                                <p className="card-text">Container</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-0 mt-md-0 mt-3">
                        <div className="card border-0">
                            <img src={application10} className="card-img-top" alt="application10" />
                            <div className="card-body custom-background">
                                <p className="card-text">The wind electricity equipment</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application11} className="card-img-top" alt="application11" />
                            <div className="card-body custom-background">
                                <p className="card-text">The steel structure</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application12} className="card-img-top" alt="application12" />
                            <div className="card-body custom-background">
                                <p className="card-text">Port machinery</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4 col-6 mt-lg-4 mt-md-4 mt-3">
                        <div className="card border-0">
                            <img src={application13} className="card-img-top" alt="application13" />
                            <div className="card-body custom-background">
                                <p className="card-text">Locomotives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <h3 className="text-center">Intensification</h3>
                <div className="card border-0 mt-5">
                    <div className="row g-0">
                        <div className="col-md-6" style={{ background: '#0056B8' }}>
                            <div className="card-body">
                                <p className="card-text text-white">
                                    In order to improve the fatigue life of metal parts under alternating loads and cyclic stress, shot peening strengthening process is needed.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={application14} alt="application14" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <h3 className="text-center">Stone cutting</h3>
                <div className="card border-0 mt-5">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={application15} style={{ width: '100%' }} alt="application15" />
                        </div>
                        <div className="col-md-6" style={{ background: '#f8f9fa' }}>
                            <div className="card-body">
                                <p className="card-text">
                                    Using the kinetic energy of metal abrasive and water jet to cut granite and other stones, there is no chemical change in the cutting process. It has the advantages of no influence on the physical and chemical properties of cutting materials, no therm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Application;