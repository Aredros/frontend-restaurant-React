import React, { useState } from "react";
import { Link } from "react-router-dom";

const RestoCard = ({restoData}) => {
    const [heartClassName, setHeartClassName] = useState("far fa-heart");
    const [activeHeart, setActiveHeart] = useState(true);
  
    const handleMouseOver = () => {
      activeHeart ? setHeartClassName('fas fa-heart') : console.log('already active') ;
    };
  
    const handleMouseOut = () => {
      activeHeart ? setHeartClassName("far fa-heart") : console.log('already active') ;
    };
  
    const handleHeartClick = () => {
      activeHeart ? setActiveHeart(false) : setActiveHeart(true);
    };

  return (
    <article>
        <Link to={"/restaurant/" + restoData.id}>
            <img className="restaurant-img" src={restoData.cover} alt="img-restocard"/>
            <p className="new-restaurant-tag">Nouveau</p>
            <div className="restaurant-card-text-area">
                <div>
                    <h3>{restoData.title}</h3>
                    <p>{restoData.Location}</p>
                </div>
                <p className="heart-icon">
                    <i 
                    className={heartClassName}
                    onClick={handleHeartClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    </i>
                </p>
            </div>
        </Link>   
    </article>
  ); 
};

export default RestoCard;