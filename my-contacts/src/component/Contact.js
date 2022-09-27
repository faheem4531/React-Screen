import React from "react";

import contacts from "./ContactDetails";

const Contact = (props) => {
    return(
        <div className="card">
            <div className="top">
                <h1 className="name">{props.name}</h1>
                <img className="circle-img" src={props.img}/>
            </div>
            <div className="bottom">
                <p className="info">{props.tele}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    )
}

export default Contact