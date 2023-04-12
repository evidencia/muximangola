import { NavLink, Link } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/images/fake.png";

import '../../styles/Header.css';
import { useState } from "react";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Produtos",
    path: "/products",
  },
  {
    display: "histórico",
    path: "/history",
  },
  {
    display: "Contactos",
    path: "/contact",
  },
];

export function Header() {
  const [isMobile, setIsmobile] = useState(true);
  const toggleMobile = () => setIsmobile(!isMobile);


  return (
    <header className="header" >
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* ======= menu ======= */}
          <div className={isMobile ? "navigation" : "navigation show__menu"}   >
            <div 
              onClick={toggleMobile}
              className="menu d-flex align-items-center gap-5"
            >
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}

              <span className="closeMenu">
                <i className="ri-close-line" onClick={toggleMobile}></i>
              </span>  

            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <Link to="/cart" className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </Link>

            <span className="user">
              <Link to="/profile">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu"  onClick={toggleMobile}>
              <i className="ri-menu-line"></i>  
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}
