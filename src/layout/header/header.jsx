import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import img_1 from '../../assets/icon-1.svg'
import img_2 from '../../assets/icon-2.svg'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="nav">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
            <p>Колбасы и мясные <br /> деликатесы</p>
            </Link>
          <div className="nav-icons">
            <img src={img_1} alt="" />
            <img src={img_2} alt="" />
            <p> Товаров: 3 <br /> <span>6 540 ₽</span> </p>
          </div>
        </div>
      <div className="home">
        <ul className="list">
          <li> <Link className="li" to="/resnote">O ресноте</Link> </li>
          <li> <Link className="li" to="/category">Каталог</Link> </li>
          <li> <Link className="li" to="/shop">Наши магазины</Link> </li>
          <li> <Link className="li" to="/contacts">Контакты</Link> </li>
        </ul>
        <div className="search-div">
          <input id="search" type="search" name="search" placeholder="Поиск по сайту"/>
          <i className="fa-solid fa-search"></i>
        </div>
      </div>
      </header>
    </>
  );
};
