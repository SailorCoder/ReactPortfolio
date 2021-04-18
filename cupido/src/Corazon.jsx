import React from "react";
import corazonRoto from "./recursos/corazon-roto.svg";
import corazonFull from "./recursos/corazon-full.svg";

export default function Corazon(props) {
  return (
    <div className="corazon-container">
      {props.roto === true ? (
        <img
          onClick={props.click}
          src={corazonRoto}
          alt="corazon-roto"
          height="40px"
        />
      ) : (
        <img
          onClick={props.click}
          src={corazonFull}
          alt="corazon-full"
          height="40px"
        />
      )}
    </div>
  );
}
