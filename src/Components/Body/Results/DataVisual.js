import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// import Fade from "react-reveal/Fade";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./chart.css";
import ResultVisual from "./ResultVisual";
import axios from "axios";
import RP from "../Welcome/typeImages/R-Med.png";
import OP from "../Welcome/typeImages/O.ico";
import AP from "../Welcome/typeImages/A.ico";
import MP from "../Welcome/typeImages/M.ico";
import IP from "../Welcome/typeImages/I.ico";
import NP from "../Welcome/typeImages/N.ico";
import GP from "../Welcome/typeImages/G.ico";
import { Container } from "react-materialize";

function DataVisual(surveyInfo) {
  const resultInfo = surveyInfo.surveyInfo.surveyInfo;
  //   console.log(surveyInfo);
  const [DataInfo, setDataInfo] = useState(resultInfo);
  const [largeDataSet, setLargeDataSet] = useState({});

  useEffect(() => {
    agrigateData();
    pullAndCompare();
    // averageTheResults()
  }, []);

  const pullAndCompare = () => {
    axios.get(`https://pq-backend.herokuapp.com/api/results`).then((res) => {
      setLargeDataSet(res.data);
    });
  };

  const all = Object.values(largeDataSet);
  //   console.log(all);

  let RelentlessResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[15] === "relentlessResult") {
      //   console.log("here", Object.keys(key))
      RelentlessResult = RelentlessResult + Object.values(key)[15];
    } else {
      console.log("didnt work");
    }
  });

  let OppositionalResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[19] === "oppositionalResult") {
      OppositionalResult = OppositionalResult + Object.values(key)[19];
    } else {
      console.log("didnt work");
    }
  });

  let AgnosticResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[23] === "agnosticResult") {
      AgnosticResult = AgnosticResult + Object.values(key)[23];
    } else {
      console.log("didnt work");
    }
  });

  let MessianicResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[27] === "messianicResult") {
      MessianicResult = MessianicResult + Object.values(key)[27];
    } else {
      console.log("didnt work");
    }
  });

  let InsecureResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[35] === "insecureResult") {
      InsecureResult = InsecureResult + Object.values(key)[35];
    } else {
      console.log("didnt work");
    }
  });

  let NutsResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[39] === "nutsResult") {
      NutsResult = NutsResult + Object.values(key)[39];
    } else {
      console.log("didnt work");
    }
  });

  let GallantResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[31] === "gallantResult") {
      GallantResult = GallantResult + Object.values(key)[31];
    } else {
      console.log("didnt work");
    }
  });

  const R = parseInt(RelentlessResult / all.length) / 15;
  const O = parseInt(OppositionalResult / all.length) / 15;
  const A = parseInt(AgnosticResult / all.length) / 15;
  const M = parseInt(MessianicResult / all.length) / 15;
  const I = parseInt(InsecureResult / all.length) / 15;
  const N = parseInt(NutsResult / all.length) / 15;
  const G = parseInt(GallantResult / all.length) / 15;

  //   console.log(R)
  //   console.log(O)
  //   console.log(A)
  //   console.log(M)
  //   console.log(I)
  //   console.log(N)
  //   console.log(G)

  const agrigateData = () => {
    const formatData = () => {
      Object.keys(DataInfo).forEach(function (key) {
        if (parseInt(DataInfo[key])) {
          DataInfo[key] = +DataInfo[key];
        } else {
          return DataInfo[key];
        }
      });
    };

    setDataInfo(formatData(DataInfo));
    setDataInfo(
      (DataInfo.relentlessResult =
        parseInt(DataInfo.relentless1) +
        parseInt(DataInfo.relentless2) +
        parseInt(DataInfo.relentless3))
    );
    setDataInfo(
      (DataInfo.oppositionalResult =
        parseInt(DataInfo.oppositional1) +
        parseInt(DataInfo.oppositional2) +
        parseInt(DataInfo.oppositional3))
    );
    setDataInfo(
      (DataInfo.agnosticResult =
        parseInt(DataInfo.agnostic1) +
        parseInt(DataInfo.agnostic2) +
        parseInt(DataInfo.agnostic3))
    );
    setDataInfo(
      (DataInfo.messianicResult =
        parseInt(DataInfo.messianic1) +
        parseInt(DataInfo.messianic2) +
        parseInt(DataInfo.messianic3))
    );
    setDataInfo(
      (DataInfo.insecureResult =
        parseInt(DataInfo.insecure1) +
        parseInt(DataInfo.insecure2) +
        parseInt(DataInfo.insecure3))
    );
    setDataInfo(
      (DataInfo.nutsResult =
        parseInt(DataInfo.nuts1) +
        parseInt(DataInfo.nuts2) +
        parseInt(DataInfo.nuts3))
    );
    setDataInfo(
      (DataInfo.gallantResult =
        parseInt(DataInfo.gallant1) +
        parseInt(DataInfo.gallant2) +
        parseInt(DataInfo.gallant3))
    );

    // if you're in DEV mode, this will RANDOM GEN the results..
    if (process.env.NODE_ENV === "development") {
      DataInfo.relentlessResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.oppositionalResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.agnosticResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.messianicResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.insecureResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.nutsResult = Math.floor(Math.random() * 15) + 1;
      DataInfo.gallantResult = Math.floor(Math.random() * 15) + 1;
    }

    setDataInfo(
      (DataInfo.IN_ShortScale =
        parseInt(DataInfo.insecureResult) + parseInt(DataInfo.nutsResult))
    );
    setDataInfo(
      (DataInfo.PQ_ShortScale =
        parseInt(DataInfo.relentlessResult) +
        parseInt(DataInfo.oppositionalResult) +
        parseInt(DataInfo.agnosticResult) +
        parseInt(DataInfo.messianicResult) +
        parseInt(DataInfo.insecureResult) +
        parseInt(DataInfo.nutsResult) +
        parseInt(DataInfo.gallantResult))
    );

    setDataInfo(
      (DataInfo.ROAMG_ShortScale =
        parseInt(DataInfo.relentlessResult) +
        parseInt(DataInfo.oppositionalResult) +
        parseInt(DataInfo.agnosticResult) +
        parseInt(DataInfo.messianicResult) +
        parseInt(DataInfo.gallantResult))
    );
  };
  const r = resultInfo.relentlessResult / 15;
  const o = resultInfo.oppositionalResult / 15;
  const a = resultInfo.agnosticResult / 15;
  const m = resultInfo.messianicResult / 15;
  const i = resultInfo.insecureResult / 15;
  const n = resultInfo.nutsResult / 15;
  const g = resultInfo.gallantResult / 15;

  const data = [
    {
      data: {
        Relentless: R,
        Oppositional: O,
        Agnostic: A,
        Messianic: M,
        Insecure: I,
        Nuts: N,
        Gallant: G,
      },
      meta: { color: "red" },
    },
    {
      data: {
        Relentless: r,
        Oppositional: o,
        Agnostic: a,
        Messianic: m,
        Insecure: i,
        Nuts: n,
        Gallant: g,
      },
      meta: { color: "blue" },
    },
  ];

  const PrimalPercent = parseFloat(
    (resultInfo.PQ_ShortScale / 105) * 100
  ).toFixed();

  //   console.log(PrimalPercent);
  //   const defaultOptions = {
  //     captionProps: () => ({
  //       className: "caption",
  //       textAnchor: "middle",
  //       fontSize: "20px",
  //       fontFamily: "sans-serif",
  //     }),
  //   };

  const captions = {
    // columns
    Relentless: "R",
    Oppositional: "O",
    Agnostic: "A",
    Messianic: "M",
    Insecure: "I",
    Nuts: "N",
    Gallant: "G",
  };

  return (
    <>
      <H2 className="teal-text">
        You are <strong>{PrimalPercent}%</strong> Primitive
      </H2>

      <GraphDiv>
        <BoxLeft></BoxLeft>
        <BoxMid>
          {" "}
          <RadarChart captions={captions} data={data} size={525} />
        </BoxMid>
        <Box>
          <GraphKey>
            <Text>
              <i className="material-icons tiny ">vpn_key</i>

              <P>Blue Overlay : Your Result</P>
              <P>Red Overlay : Overall Survey Results of {all.length} users</P>
            </Text>
          </GraphKey>
        </Box>
      </GraphDiv>
      <BackgroundLayer></BackgroundLayer>
      <ResultVisual resultInfo={resultInfo} />
    </>
  );
}

const BackgroundLayer = styled.div`
  border-bottom: 2px lightgray solid;
  width: 80%;
  margin: auto;
`;

const P = styled.p`
  text-align: justify;
  /* border: 1px solid black; */
  font-size: 0.75rem;
  font-weight: 700;
  margin: 1px;
`;

const GraphDiv = styled.div`
  display: flex;
  margin: 2em auto;
  justify-content: center;
  align-items: center;
    @media (max-width: 991px) {
	  flex-direction: column;
  }

`;

const BoxLeft = styled.div`
  width: 33%;
  @media (max-width: 991px) {
	  display: none;
  }
`;

const BoxMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px lightgray solid; */
  width: 33%;
  /* min-height: 100%; */
    min-width: 420px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px lightgray solid; */
  width: 33%;
  /* min-height: 100%; */
`;

const GraphKey = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 80% 0; */
  text-align: justify;
  width: 100%;
  height: auto;
  /* border: 1px solid blue; */
`;
const Text = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  text-align: justify;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

const H2 = styled.h2`
  font-size: 3rem;
  color: black !important;
`;
export default DataVisual;
