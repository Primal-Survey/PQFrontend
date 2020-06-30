import React from "react";
import styled from "styled-components";
import { AutoInit } from "materialize-css";

const NavBar = () => {
  return (
    <div>
      <nav
        className="nav-wrapper N/A transparent"
        style={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <div
          className="nav-wrapper N/A transparent"
          style={{
            backgroundColor: "#00FFFFFF",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Icon for mobile screen menu */}
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger white-text"
          >
            <i
              className=" material-icons"
              style={{ fontSize: "4em", textColor: "darkcyan" }}
            >
              menu
            </i>
          </a>
          {/* main NavBar */}
          <ul className=" right hide-on-med-and-down">
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Main Site"
                href="https://www.primitivebook.com/#book-section"
              >
                <i>BOOK</i>
              </MainLink>
            </ListItem>
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Buy it Here!"
                href="https://www.primitivebook.com/#purchase-section"
              >
                <i>PURCHASE</i>
              </MainLink>
            </ListItem>
            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="About the book"
                href="https://www.primitivebook.com/#about-section"
              >
                <i>ABOUT</i>
              </MainLink>
            </ListItem>

            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="About Marco Greenberg"
                href="https://www.primitivebook.com/#author-section"
              >
                <i>AUTHOR</i>
              </MainLink>
            </ListItem>

            <ListItem>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Marco"
                href="https://www.primitivebook.com/contact"
              >
                <i>CONTACT</i>
              </MainLink>
            </ListItem>
          </ul>
        </div>
      </nav>

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
              href="https://www.primitivebook.com/#about-section"
            >
              <P>ABOUT</P>
            </StyledLink>
          </Li>

          <Li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="About Marco Greenberg"
              href="https://www.primitivebook.com/#author-section"
            >
              <P>AUTHOR</P>
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
  min-width: 10vw;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
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

const MainLink = styled.a`
  color: white;
  /* text-decoration: none; */
  margin: 1%;

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
