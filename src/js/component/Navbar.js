import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-black">
            <div className="container">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white" id="nav-link" aria-current="page" href="#">Home</a>
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