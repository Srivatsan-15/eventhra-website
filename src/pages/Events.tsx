import "../styles/Events.scss";
import NavBar from "../components/NavBar";
import React from "react";
import IntraEvents from "../components/IntraEvents";
import InterEvents from "../components/InterEvents";

type Props = {
  navVariable: number;
  setnavVariable: React.Dispatch<React.SetStateAction<number>>;
};

function Events({ navVariable, setnavVariable}: Props) {
    const [isIntra, setisIntra] = React.useState(true);
    let content;
    if (isIntra){
        content=<h4>Intra College Events Content</h4>;
    }
  return (
    <div className="events">
      <div className="eventsbg w-100">
        <NavBar navVariable={navVariable} setnavVariable={setnavVariable} />
        <div className="row m-5">
            <div className="col d-flex justify-content-start align-items-center gap-5 ms-5">
                <h4 className={isIntra ? "selected" : "notSelected"} onClick={() => setisIntra(true)}>Intra College Events</h4>
                <h4 className={isIntra ? "notSelected" : "selected"} onClick={() => setisIntra(false)}>Inter College Events</h4>
            </div>
        </div>
        <div className="m-3">
        {isIntra ? <IntraEvents /> : <InterEvents />}
        </div>
      </div>
    </div>
  );
}
export default Events;
