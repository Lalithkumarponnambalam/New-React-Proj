import React from "react";

function Footer() {
    return (
        <div>
            <footer className="py-3 my-4 border-top">
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <div className="align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24"></svg>
                        </a>
                        <span className="text-muted">©Construction Equipment. All Rights Reserved 2025</span>
                    </div>

                    <div className="justify-content-end">
                        <span className="text-muted">Powered By Precision Engineering</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;