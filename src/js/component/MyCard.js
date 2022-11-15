import React from "react";

const MyCard = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card mt-3">
            <img className="card-img-top" src={props.image} alt="Card image cap" />
            <div className="card-body text-center">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">Find out more!</a>
              </div>
            </div>
          </div>
        </div>    
    );
}

export default MyCard