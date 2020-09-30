import React from "react";
import styled from "styled-components";

import Amazon3 from "./images/amazon3.png";
import Bam2 from "./images/Bam2.png";
import BN2 from "./images/BN2.jpg";
import IndieBound from "./images/IndieBound.JPG";
import BookDown from "./../../Assets/Images/BookDown.png";
import Marco from "./../../Assets/Images/Marco.jpg";
import HeaderBanner from "./../../Assets/Images/HeaderBanner.jpg";

function Footer() {
  return (
    <BackgroundLayer>
      <Foot className="page-footer N/A transparent">
        <Content className="container">
          <div className="row ">
            <LeftBox className="col l6 s12">
              <Section>
                <div>
                  <div>
                    <LeftH5>
                      "Captures insights and advice that everyone can use to
                      thrive in the constantly evolving workplace."
                    </LeftH5>
                  </div>
                  <LeftH5 className="teal-text">
                    — DANIEL H. PINK, NEW YORK TIMES BESTSELLING AUTHOR OF WHEN,
                    DRIVE, AND TO SELL IS HUMAN.
                  </LeftH5>
                </div>
                {/* <ImgBox>
                  <div><Img2 src={Marco} alt="Primitive Book" /></div>
                </ImgBox> */}
              </Section>
            </LeftBox>

            {/* -----------------  right links ---------------------------*/}
            <RightBox className="col l6  s12">
              <div>
                <H5>PURCHASE THE BOOK AT YOUR FAVORITE RETAILER</H5>
              </div>
              <ImgBox className="col s12 m12 l12 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://primitive-book.squarespace.com/#purchase-section"
                >
                  <div className="col s6 m3 l3 ">
                    <Img2 src={BookDown} alt="Primitive Book" />
                  </div>
                </a>
              </ImgBox>

              <ImgBox className="col s12 m12 l12 ">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazon.com/Primitive-Tapping-Primal-Powering-Successful/dp/0316530379/"
                >
                  <div className="col s6 m3 l3 ">
                    <Img src={Amazon3} alt="" />
                  </div>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.booksamillion.com/p/Primitive/Marco-Greenberg/9780316530378"
                >
                  <div className="col s6 m3 l3 ">
                    <Img src={Bam2} alt="" />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.barnesandnoble.com/w/primitive-marco-greenberg/1136270724?ean=9780316530378"
                >
                  <div className="col s6 m3 l3 ">
                    <Img src={BN2} alt="" />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.indiebound.org/book/9780316530378"
                >
                  <div className="col s6 m3 l3 ">
                    <Img src={IndieBound} alt="" />
                  </div>
                </a>
              </ImgBox>
            </RightBox>
          </div>

          {/* -----------------  right links ---------------------------*/}
        </Content>
      </Foot>
      <Copyright
        className="footer-copyright N/A transparent"
        //   style={{
        //     border: "none",
        //     boxShadow: "none",
        //   }}
      >
        <div className="container">
          © 2020 Marco Greenberg. All Rights Reserved.
        </div>
      </Copyright>
    </BackgroundLayer>
  );
}
const Copyright = styled.div`
  border: none;
  box-shadow: none;
  /* margin-top: -20px; */
  padding-bottom: 20px;
`;

const Foot = styled.footer`
  height: 60vh;
  display: contents;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid pink; */
`;

const Content = styled.div`
  display: flex;
  /* border: 1px solid blue; */
  justify-content: space-evenly;
  align-items: center;
  min-width: 100vw;
  min-height: 50vh;
  /* border: 1px solid pink; */
`;

const Section = styled.section`
  /* border: 1px solid dodgerblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 40vw;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 49%;
  height: auto;
  /* border: 1px solid yellow; */
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 49%;
  height: 50vh;
  /* border: 1px solid red; */
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 3% 0;
  /* border: 1px solid pink; */
`;

const Img = styled.img`
  max-width: 7vw;
  max-height: auto;
  /* border: 1px solid red; */
`;

const Img2 = styled.img`
  max-width: 20vw;
  height: auto;
  /* border-radius: 100%; */
  /* border: 1px solid black; */
`;

const H5 = styled.h5`
  padding-left: 10px;
  margin-top: 10%;
  /* border: 1px solid black; */
`;

const LeftH5 = styled.h5`
  /* padding-left: 10px; */
  margin: 5% 0;
  /* border: 1px solid blue; */
`;

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${HeaderBanner}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  width: 100%;
  height: 100%;
  margin: auto;
  /* border: 2px solid orange; */
`;

export default Footer;
