import React from "react";

const HeaderSocials = () => {
  return (
    <div>
      <div className="home__socials">
        <a
          href="https://www.instagram.com/"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.twitter.com/"
          className="home__social-link"
          target="_blank"
          rel="noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://www.behance.com/"
          className="home__social-link"
          rel="noreferrer"
          target="_blank">
          <i className="fa-brands fa-behance"></i>{" "}
        </a>
        <a
          href="https://www.dribble.com/"
          className="home__social-link"
          rel="noreferrer"
          target="_blank">
          <i className="fa-brands fa-dribbble"></i>{" "}
        </a>
        <a
          href="https://www.pinterest.com/"
          className="home__social-link"
          rel="noreferrer"
          target="_blank">
          <i className="fa-brands fa-pinterest"></i>{" "}
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
