import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div
          className="nav-wrapper black"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Icon for mobile screen menu */}
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger teal-text"
          >
            <i
              className=" material-icons"
              style={{ fontSize: "4em", textColor: "teal" }}
            >
              menu
            </i>
          </a>
          {/* main NavBar */}
          <ul className=" right hide-on-med-and-down">
            <li>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Main Site"
                href="https://www.primitivebook.com/#book-section"
              >
                <i>BOOK</i>
              </MainLink>
            </li>
            <li>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Buy it Here!"
                href="https://www.primitivebook.com/#purchase-section"
              >
                <i>PURCHASE</i>
              </MainLink>
            </li>
            <li>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="About the book"
                href="https://www.primitivebook.com/#about-section"
              >
                <i>ABOUT</i>
              </MainLink>
            </li>

            <li>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="About Marco Greenberg"
                href="https://www.primitivebook.com/#author-section"
              >
                <i>AUTHOR</i>
              </MainLink>
            </li>

            <li>
              <MainLink
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Marco"
                href="https://www.primitivebook.com/contact"
              >
                <i>CONTACT</i>
              </MainLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* for mobile screen menu */}
      <Ul className="sidenav" id="mobile-demo">
        <Li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Main Site"
              href="https://www.primitivebook.com/#book-section"
            >
              <i>BOOK</i>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Buy it Here!"
              href="https://www.primitivebook.com/#purchase-section"
            >
              <i>PURCHASE</i>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="About the book"
              href="https://www.primitivebook.com/#about-section"
            >
              <i>ABOUT</i>
            </StyledLink>
          </li>

          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="About Marco Greenberg"
              href="https://www.primitivebook.com/#author-section"
            >
              <i>AUTHOR</i>
            </StyledLink>
          </li>

          <li>
            <StyledLink
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Marco"
              href="https://www.primitivebook.com/contact"
            >
              <i>CONTACT</i>
            </StyledLink>
          </li>
        </Li>
      </Ul>
    </div>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: teal;
`;
const Li = styled.li`
  /* border: 1px solid black; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 70%;
`;

const MainLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 1%;

  &:hover {
    color: teal;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: items center;
  color: white;

  margin: 1%;
  min-height: 60px;
  /* border: 1px solid lightGray; */
  &:hover {
    /* border: 1px solid white; */
    color: teal;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;
export default NavBar;
