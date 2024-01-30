import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="footer-top_1">
          <div className="footer-top_1-text">
            <h5>Продукция</h5>
            <p>Колбасные и мясные изделия</p>
            <p>Молочные продукты</p>
          </div>
          <h5>O компании</h5>
        </div>
        <div className="footer-top_2">
          <div className="footer-top_2-text">
            <p>Морепродукты</p>
            <p>Пиво</p>
          </div>
          <h5>Наши магазины</h5>
        </div>
        <div className="footer-top_3">
          <div className="footer-top_3-text">
            <p>Замороженные продукты Мед</p>
            <p>Мед</p>
          </div>
          <h5>Контакты</h5>
        </div>
        <div className="footer-top_4">
          <p>Свежие овощи</p>
          <p>Свежие фрукты</p>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p> 2016-2021 © OOO «ПД Реснота» </p>
        <div className="footer-icons">
          <i className="fa-1 fa-brands fa-facebook-f"></i>
          <i className="fa-2 fa-brands fa-vk"></i>
          <i className="fa-3 fa-brands fa-instagram"></i>
        </div>
        <p> Разработка и продвижение сайта — SEOabsolut </p>
      </div>
    </footer>
  );
};
