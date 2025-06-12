import React from "react";
import logo from "./images/logo.png";
import "./App.scss";

function App() {
  return (
    <div className="row app">
      <div className="col-md-12 overflow-y-scroll">
        <div className=" vh-97 bg-eventhra ">
          <div className="p-5 py-2 row nav-bar">
            <div className="col-md-3">
              <img className="logo" src={logo} alt="EventHRA Logo" />
            </div>
            <div className="col-md-9">
              <div className="nav-links d-flex gap-5 align-items-center justify-content-end pt-4">
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Events</a>
                <a className="nav-link" href="#">Study Materials</a>
                <a className="nav-link" href="#">Discussion Forum</a>
                <a className="nav-link" href="#">About Us</a>
              </div>
            </div>
          </div>
          <h3 className="d-flex justify-content-center text-white font-size-64 motto">CODE COMPETE CONQUERE</h3>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
