import React from "react";

import Image from "./utility/Image";
import Detail from "./utility/Detail";

const Contact = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.name}</h1>
        <Image
          img={props.img}
        />
      </div>
      <div className="bottom">
        <Detail
          detailInfo={props.tele}
        />
        <Detail
          detailInfo={props.email}
        />
      </div>
    </div>
  )
}

export default Contact