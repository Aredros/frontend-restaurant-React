import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import restoData from '../data/restaurantdata.json';
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
import Footer from "../components/Footer";


const FicheRestaurant = () => {
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


  //To get the right restaurant data from the restaurantdata.json file
  const params = useParams();
  const restodata = restoData.find((resto) => resto.id === params.id);
  if(restodata !== undefined) { 
  
  return (
    <div>
        <div className="loading-area fadeOUT">
          <div className="loading-area__spinner"></div>
        </div>
        <Header />
        <section className="section-main"> 
            <img src={restodata.cover} alt="img-cover-restaurant"/>
            <div className="menu-title">
                <h1 className="pretty-title">{restodata.title}</h1>
                <p className="heart-icon">
                <i
      className={heartClassName}
      onClick={handleHeartClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
                </p>
            </div>
        </section>
{/* <!--******************************** ENTREES ********************************--> */}
    <section className="menu-area">
        <article className="menu-options">
              <div className="menu-options__dividers">
              <h2 className="menu-subtitles">ENTREES</h2>
              {restodata.dishes.entrees.map((entree, index)=>(
                <MenuOption key={index} menuData={entree}/>
              ))}
              </div>
          </article>
        <article className="menu-options">
              <div className="menu-options__dividers">
              <h2 className="menu-subtitles">PLATS</h2>
              {restodata.dishes.plats.map((plat, index)=>(
                <MenuOption key={index} menuData={plat}/>
              ))}
              </div>
        </article>
        <article className="menu-options">
              <div className="menu-options__dividers">
              <h2 className="menu-subtitles">DESSERTS</h2>
              {restodata.dishes.desserts.map((dessert, index)=>(
                <MenuOption key={index} menuData={dessert}/>
              ))}
              </div>
        </article>
    </section>
    <div className="center-button">
        <button className="multicolor-button center">Commander</button>
    </div>
    <Footer />
    </div>
  );
  } else {
    window.location.href ="/errorpage";
  }
};

export default FicheRestaurant;
