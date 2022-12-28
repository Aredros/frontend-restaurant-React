import React from "react";

const MenuOption = ({menuData}) => {

    return (
        <div class="dish fadeIn food__content">
        <div class="left">
            <div class="dish__details">
                <h3 class="dish__details__title">{menuData.title}</h3>
                <p class="dish__details__comment">{menuData.description}</p>
            </div>
            <div class="dish__details2">
                <p class="dish__details2__price">{menuData.price}$</p>
            </div>  
        </div>
        <div class="right">
            <i class="fas fa-check-circle check"></i>
        </div>
    </div>
        
    );
    };

export default MenuOption;