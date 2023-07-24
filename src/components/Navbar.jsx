import logoBlue from "../assets/logos/logo-blue.png"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
        <div className="brand">
        <img src={logoBlue} alt="logo" />
        </div>
        <div className="menus">

        </div>
    </Nav>
  )
}

const Nav = styled.nav`
    display: flex;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    padding:1rem 2rem;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;

    .brand {
        width: calc(100vw / 3);

        img {
            max-width: 20%;
            cursor: pointer;
        }
    }
`

export default Navbar