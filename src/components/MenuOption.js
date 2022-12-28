import React from "react";

const MenuOption = ({menuData}) => {

    return (
        <div className="dish fadeIn food__content">
        <div className="left">
            <div className="dish__details">
                <h3 className="dish__details__title">{menuData.title}</h3>
                <p className="dish__details__comment">{menuData.description}</p>
            </div>
            <div className="dish__details2">
                <p className="dish__details2__price">{menuData.price}$</p>
            </div>  
        </div>
        <div className="right">
            <i className="fas fa-check-circle check"></i>
        </div>
    </div>
        
    );
    };

export default MenuOption;