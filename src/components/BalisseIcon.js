import React from "react";

const BalisseIcon = ({icon}) => {
    return ( 
        <div className="balisse-icon-card fadeIn">
            <div className="number-fonctionnement"><p>1</p></div>
            <i className={`fas ${icon}`}></i>
            <p className="balisse-icon-card-text">Choisissez un restaurant</p>
        </div>
    );
    };

export default BalisseIcon;