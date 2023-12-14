import React from "react";
import Img from "../assets/restauranfood.jpg"

export default function Home() {
  return (
    <>
      <section className="Hero-wrapper">
        <div className="Hero">
        <div className="Hero-content">
          <h3 className="title">
            Little Lemon <br /> <span>Chicago</span>
          </h3>
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
    </>
  );
}
