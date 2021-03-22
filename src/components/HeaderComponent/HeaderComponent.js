import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/skateboarding.png";
import { Header, LogoContainer, NavBar, LinkContainer } from "./styles";

import { auth } from "../../firebase/firebase.util";

const HeaderComponent = ({ currentUser }) => (
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

      {currentUser ? (
        <LinkContainer>
          <Link onClick={() => auth.signOut()}>SIGN OUT</Link>
        </LinkContainer>
      ) : (
        <LinkContainer>
          <Link to="/signin">SIGN IN</Link>
        </LinkContainer>
      )}
    </NavBar>
  </Header>
);
export default HeaderComponent;
