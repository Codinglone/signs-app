import { useState } from "react";
import logoBlue from "../assets/logos/logo-blue.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
const Navbar = () => {
  const [active, setActive] = useState("home");
  return (
    <Nav>
      <div className="brand">
        <img src={logoBlue} alt="logo" />
      </div>
      <div className="menus">
        <Link
          to="#"
          className="link"
          style={
            active === "home" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          to="#"
          className="link"
          style={
            active === "dictionary"
              ? { color: "#4890fc" }
              : { color: "#212427" }
          }
          onClick={() => setActive("dictionary")}
        >
          Dictionary
        </Link>
        <Link
          to="#"
          className="link"
          style={
            active === "interactive"
              ? { color: "#4890fc" }
              : { color: "#212427" }
          }
          onClick={() => setActive("interactive")}
        >
          Interactive
        </Link>
        <Link
          to="#"
          className="link"
          style={
            active === "sandbox" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("sandbox")}
        >
          Sandbox
        </Link>
        <Link
          to="#"
          className="link"
          style={
            active === "about" ? { color: "#4890fc" } : { color: "#212427" }
          }
          onClick={() => setActive("about")}
        >
          About Us
        </Link>
      </div>
      <div
        id="contact"
        style={{ width: "30%", display: "flex", justifyContent: "end" }}
      >
        <Button label="Get In Touch" severity="info" icon="pi pi-phone" />
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;

  .brand {
    width: calc(100vw / 4);

    img {
      max-width: 20%;
      cursor: pointer;
    }
  }

  .menus {
    display: flex;
    justify-content: space-between;
    width: calc(100vw / 2.5);

    .link {
      text-decoration: none;
      color: #212427;
      font-weight: 600;
      font-size: 1.2rem;

      &:hover {
        color: #4890fc;
      }
    }
  }
`;

export default Navbar;
