import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [item, setItem] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItem(updatedItems);
  };
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItem(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work__item" onClick={() => filterItem("Branding")}>
          Branding
        </span>
      </div>
      <div className="work__container grid">
        {item.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div key={id} className="work__card">
              <div className="work__thumbnail">
                <img src={image} className="work__img" alt="" />
                <div className="work__mask"> </div>
              </div>
              <div className="work__category">{category}</div>

              <h3 className="work__title">{title}</h3>
              <a className="work_button" href="##">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
