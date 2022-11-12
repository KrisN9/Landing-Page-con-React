import React from "react";

const MyCard = () => {
    return (
      <div className="col-12 col-md-4">
        <div className="card" style={{width: "15rem"}}>
          <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHM3mMj5fHCqBjeC2WGyMQ55veJcqiKfad43DYbL8Yg&s" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text" style={{height: "8rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            <a href="#" className="btn btn-primary">Find out more!</a>
          </div>
        </div>
      </div>  
    );
}

export default MyCard