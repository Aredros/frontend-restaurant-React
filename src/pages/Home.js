import React from "react";
import BalisseIcon from "../components/BalisseIcon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RestoCard from "../components/RestoCard";
import restoData from '../data/restaurantdata.json';

const Home = () => {
  return (
    <div>
    <div className="loading-area fadeOUT">
        <div className="loading-area__spinner"></div>
    </div>
        <Header />
        <section className="home-banner">
            <p className="home-banner_location"><i className="fa-solid fa-location-dot"></i>ICON Paris, Belleville</p>
            <div>
                <h1>Reservez le menu qui vous convient</h1>
                <p className="home-banner_subtitle">Découvrez des restaurants d'exception, séléctionnés par nos soins.</p>
                <button className="multicolor-button">
                    Explorer nos restaurants
                </button>
            </div>
        </section>
        <section className="fonctions">
            <h2>Fonctionnement</h2>
            <BalisseIcon 
                icon={"fa-mobile-alt"}
                number={1}
                text={"Choisissez un restaurant"}
                />
            <BalisseIcon 
                icon={"fa-list"}
                number={2}
                text={"Composez un menu"}
            />
            <BalisseIcon
                icon={"fa-store"}
                number={3}
                text={"Dégustez au restaurant"}
            />
        </section>
        <section className="restaurants">
            <h2>Restaurants</h2>
            <ul className="restaurants__cards">
                {restoData.map((restoData) => (
                        <RestoCard key={restoData.id} restoData={restoData} />
                ))}
            </ul>
        </section>
        <Footer />
    </div>
  );
};

export default Home;
