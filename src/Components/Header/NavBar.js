import React from "react";
import styled from "styled-components";

import DarkMode from "./DarkMode";

import { AutoInit } from "materialize-css";
import { Row } from "react-materialize";

const NavBar = () => {
  return (
    <div className="main-header">

      <div className="darkmode-left"></div>

      <nav
        className="nav-wrapper N/A transparent"
        style={{
          height: "10vh",
          //   border: "1px solid orange",
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="nav-wrapper N/A transparent"
          style={{
            backgroundColor: "#00FFFFFF",
            width: "95%",
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          {/* Icon for mobile screen menu */}
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger white-text"
          >
            <I
              className=" material-icons"
              style={{ fontSize: "4em", textColor: "darkcyan" }}
            >
              menu
            </I>
          </a>
          {/* main NavBar */}
          <NavContainer className="right hide-on-med-and-down">
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Main Site"
                href="https://www.primitivebook.com/#book-section"
              >
                <I>BOOK</I>
              </MainLink>
            </ListItem>
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Buy it Here!"
                href="https://www.primitivebook.com/#purchase-section"
              >
                <I>PURCHASE</I>
              </MainLink>
            </ListItem>
            <h2>The Roaming Survey</h2>
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="About the book"
                href="https://www.primitivebook.com/#author-section"
              >
                <I>ABOUT</I>
              </MainLink>
            </ListItem>

            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Marco"
                href="https://www.primitivebook.com/contact"
              >
                <I>CONTACT</I>
              </MainLink>
            </ListItem>
          </NavContainer>
        </div>
      </nav>
      
      <div className="darkmode-right"><DarkMode /></div>

      {/* for mobile screen menu */}
      <Ul className="sidenav" id="mobile-demo">
        <Div>
          <Li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Main Site"
              href="https://www.primitivebook.com/#book-section"
            >
              <P>BOOK</P>
            </StyledLink>
          </Li>
          <Li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Buy it Here!"
              href="https://www.primitivebook.com/#purchase-section"
            >
              <P>PURCHASE</P>
            </StyledLink>
          </Li>
          <Li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="About the book"
              href="https://www.primitivebook.com/#author-section"
            >
              <P>ABOUT</P>
            </StyledLink>
          </Li>

          <Li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Marco"
              href="https://www.primitivebook.com/contact"
            >
              <P>CONTACT</P>
            </StyledLink>
          </Li>
        </Div>
      </Ul>
    </div>
  );
};

const NavContainer = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid blue; */
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  /* border: 1px solid blue; */
`;
const Div = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ListItem = styled.li`
  width: 8vw;
  height: auto;
  /* border: 1px solid lightGray; */
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`;

const P = styled.p`
  color: white !important;
  /* border: 1px solid lightGray; */
  width: 100px;
  height: auto;
  &:hover {
    color: darkcyan;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const I = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 40px;
  font-size: 1em;
  /* border: 1px solid lightGray; */
`;

const MainLink = styled.a`
  color: white;
  /* text-decoration: none; */
  /* margin: 1%; */
  /* border: 1px solid orange; */

  &:hover {
    color: darkcyan;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
  min-height: 18vh;
  /* border: 1px solid orange; */
  &:hover {
    color: darkcyan;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;
export default NavBar;
