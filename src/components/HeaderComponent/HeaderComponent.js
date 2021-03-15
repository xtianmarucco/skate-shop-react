import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/skateboarding.png";
import { Header, LogoContainer, NavBar, LinkContainer } from "./styles";

const HeaderComponent = () => (
  <Header>
    <LogoContainer>
      <Link to="/">
        <h1>LOGO</h1>
      </Link>
      {/* <Logo src={Logo} /> */}
    </LogoContainer>

    <NavBar>
      <LinkContainer>
        <Link to="/contact">CONTACT</Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/shop">SHOP</Link>
      </LinkContainer>
    </NavBar>
  </Header>
);
export default HeaderComponent;
