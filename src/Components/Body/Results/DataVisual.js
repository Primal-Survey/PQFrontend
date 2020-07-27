import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Fade from "react-reveal/Fade";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./chart.css";
import ResultVisual from "./ResultVisual";
import axios from "axios";
import HeaderBanner from "../../../Assets/Images/HeaderBanner.jpg";

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

    // if you're in DEV mode, it will RANDOM GEN the results..
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
    Relentless: "Rel",
    Oppositional: "Opp",
    Agnostic: "Agn",
    Messianic: "Mes",
    Insecure: "Ins",
    Nuts: "Nut",
    Gallant: "Gal",
  };

  return (
    <Fade>
      <h4 className="teal-text">
        You are <strong>{PrimalPercent}% Primal</strong>
        {/* and{" "}
        <strong>{100 - PrimalPercent}% Civilized</strong> */}
      </h4>
      <GraphDiv>
        <RadarChart captions={captions} data={data} size={525} />
        <Div>
          <GraphKey>
            <Text>
              <i className="material-icons tiny ">vpn_key</i>

              <P>Blue Overlay : Your Result</P>
              <P>Red Overlay : Overall Survey Group of {all.length} users</P>
              {/* <P>
              You are {parseInt((resultInfo.relentlessResult / 15) * 100)}%
              Relentless
            </P>
            <P>
              You are {parseInt((resultInfo.oppositionalResult / 15) * 100)}%
              Oppositional
            </P>
            <P>
              You are {parseInt((resultInfo.agnosticResult / 15) * 100)}%
              Agnostic
            </P>
            <P>
              You are {parseInt((resultInfo.messianicResult / 15) * 100)}%
              Messianic
            </P>
            <P>
              You are {parseInt((resultInfo.insecureResult / 15) * 100)}%
              Insecure
            </P>
            <P>You are {parseInt((resultInfo.nutsResult / 15) * 100)}% Nuts</P>
            <P>
              You are {parseInt((resultInfo.gallantResult / 15) * 100)}% Gallant
            </P> */}
            </Text>
          </GraphKey>
        </Div>
      </GraphDiv>
      <BackgroundLayer></BackgroundLayer>
      <ResultVisual resultInfo={resultInfo} />
    </Fade>
  );
}

const BackgroundLayer = styled.div`
  text-align: center;
  background: url(${HeaderBanner}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  min-height: 10vh;
  margin: 10px 0;
`;

const P = styled.p`
  text-align: justify;
  /* border: 1px solid black; */
  font-size: 0.75rem;
  font-weight: 700;
  margin: 1px;
`;
const Div = styled.div`
  text-align: justify;
  margin-bottom: 2em;
  /* border: 1px solid black; */
`;

const GraphDiv = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const GraphKey = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80% 0;
  text-align: justify;
  max-width: 40vw;
  height: 200px;
  /* border: 1px solid black; */
`;
const Text = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  text-align: justify;
  max-width: 40vw;
  height: auto;
  border: 2px solid black;
  padding: 0.5px;
`;
export default DataVisual;
