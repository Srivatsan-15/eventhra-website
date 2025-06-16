import React from "react";
import logo from "../assets/logo.png";
import "./NavBar.scss";


type Props = {
  navVariable:number;
  setnavVariable: React.Dispatch<React.SetStateAction<number>>;
};

function NavBar({
  navVariable,
  setnavVariable,
}: Props) {
  return (
    <div className="row nav">
      <div className="col-md-12"> 
          <div className={`p-5 py-2 row ${navVariable === 1 ? 'nav-bar-home' : 'nav-bar'}`}>
            <div className="col-md-3">
              <img className="logo" src={logo} alt="EventHRA Logo" />
            </div>
            <div className="col-md-9">
              <div className="nav-links d-flex gap-5 align-items-center justify-content-end pt-4">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setnavVariable(1)}
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setnavVariable(2)}
                >
                  Events
                </a>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setnavVariable(3)}
                >
                  Study Materials
                </a>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setnavVariable(4)}
                >
                  Discussion Forum
                </a>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setnavVariable(5)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default NavBar;