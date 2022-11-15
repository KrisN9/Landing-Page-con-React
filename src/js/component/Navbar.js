import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-muted" id="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link active text-muted" id="nav-link" href="#">About</a>
                        <a className="nav-link active text-muted" id="nav-link" href="#">Services</a>
                        <a className="nav-link active text-muted" id="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar