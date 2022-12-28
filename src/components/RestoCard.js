import React from "react";
import { Link } from "react-router-dom";

const RestoCard = ({restoData}) => {
  return (
    <article>
        <Link to={"/restaurant/" + restoData.id}>
            <img class="restaurant-img" src={restoData.cover} alt="logo"/>
            <p class="new-restaurant-tag">Nouveau</p>
            <div class="restaurant-card-text-area">
                <div>
                    <h3>{restoData.title}</h3>
                    <p>{restoData.Location}</p>
                </div>
                <p class="heart-icon">
                    <i class="far fa-heart" 
                    onmouseover="this.className='fas fa-heart'" 
                    onmouseout="this.className='far fa-heart'"></i>
                </p>
            </div>
        </Link>   
    </article>
  ); 
};

export default RestoCard;