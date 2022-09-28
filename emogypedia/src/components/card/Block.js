import React from "react";

const Block = (prop) => {
  return (

    
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {prop.icon}
          </span>
          <span>{prop.naam}</span>
        </dt>
        <dd>{prop.mutlab}</dd>
      </div>
   
  )
}
export default Block;