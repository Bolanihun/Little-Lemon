import React from "react";
import Img from "../assets/restauranfood.jpg";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <>
      <section className="Hero-wrapper">
        <div className="Hero">
        <div className="Hero-content">
          <div className="title">
          <h3>
            Little Lemon
          </h3>
          <span>Chicago</span>
          </div>
          
          <p>
            We are a family owned Mediterranean restaurant, Focused on
            traditional recipes served with a modern twist
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="Hero-img">
            <img src= {Img} alt="" />
        </div>
        </div>
      </section>

      <Menu/>
      <Footer/>
    </>
  );
}
