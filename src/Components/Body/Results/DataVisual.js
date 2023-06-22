import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./chart.css";
import ResultVisual from "./ResultVisual";
import axios from "axios";

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
    axios
      .get(`https://pq-backend-a52333f1cc00.herokuapp.com/api/results`)
      .then((res) => {
        setLargeDataSet(res.data);
      });
  };

  const all = Object.values(largeDataSet);

  let RelentlessResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[14] === "relentlessResult") {
      //   console.log('here', Object.keys(key));
      RelentlessResult = RelentlessResult + Object.values(key)[14];
    } else {
      console.log("RelentlessResult didnt work");
    }
  });

  let OppositionalResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[19] === "oppositionalResult") {
      OppositionalResult = OppositionalResult + Object.values(key)[19];
    } else {
      console.log("OppositionalResult didnt work");
    }
  });

  let AgnosticResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[24] === "agnosticResult") {
      AgnosticResult = AgnosticResult + Object.values(key)[24];
    } else {
      console.log("AgnosticResult didnt work");
    }
  });

  let MessianicResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[29] === "messianicResult") {
      MessianicResult = MessianicResult + Object.values(key)[29];
    } else {
      console.log("MessianicResult didnt work");
    }
  });

  let InsecureResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[39] === "insecureResult") {
      InsecureResult = InsecureResult + Object.values(key)[39];
    } else {
      console.log("InsecureResult didnt work");
    }
  });

  let NutsResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[44] === "nutsResult") {
      NutsResult = NutsResult + Object.values(key)[44];
    } else {
      console.log("NutsResult didnt work");
    }
  });

  let GallantResult = 0;
  all.forEach(function (key) {
    if (Object.keys(key)[34] === "gallantResult") {
      GallantResult = GallantResult + Object.values(key)[34];
    } else {
      console.log("GallantResult didnt work");
    }
  });

  //divide by 20 when the original 1000 survey takers data includes the additional questions totalling 28 questions
  //divide by 15 when the original 1000 survey takers data includes the additional questions totalling 21 questions

  const R = parseInt(RelentlessResult / all.length) / 20;
  const O = parseInt(OppositionalResult / all.length) / 20;
  const A = parseInt(AgnosticResult / all.length) / 20;
  const M = parseInt(MessianicResult / all.length) / 20;
  const I = parseInt(InsecureResult / all.length) / 20;
  const N = parseInt(NutsResult / all.length) / 20;
  const G = parseInt(GallantResult / all.length) / 20;

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
        parseInt(DataInfo.relentless3) +
        parseInt(DataInfo.relentless4))
    );
    setDataInfo(
      (DataInfo.oppositionalResult =
        parseInt(DataInfo.oppositional1) +
        parseInt(DataInfo.oppositional2) +
        parseInt(DataInfo.oppositional3) +
        parseInt(DataInfo.oppositional4))
    );
    setDataInfo(
      (DataInfo.agnosticResult =
        parseInt(DataInfo.agnostic1) +
        parseInt(DataInfo.agnostic2) +
        parseInt(DataInfo.agnostic3) +
        parseInt(DataInfo.agnostic4))
    );
    setDataInfo(
      (DataInfo.messianicResult =
        parseInt(DataInfo.messianic1) +
        parseInt(DataInfo.messianic2) +
        parseInt(DataInfo.messianic3) +
        parseInt(DataInfo.messianic4))
    );
    setDataInfo(
      (DataInfo.insecureResult =
        parseInt(DataInfo.insecure1) +
        parseInt(DataInfo.insecure2) +
        parseInt(DataInfo.insecure3) +
        parseInt(DataInfo.insecure4))
    );
    setDataInfo(
      (DataInfo.nutsResult =
        parseInt(DataInfo.nuts1) +
        parseInt(DataInfo.nuts2) +
        parseInt(DataInfo.nuts3) +
        parseInt(DataInfo.nuts4))
    );
    setDataInfo(
      (DataInfo.gallantResult =
        parseInt(DataInfo.gallant1) +
        parseInt(DataInfo.gallant2) +
        parseInt(DataInfo.gallant3) +
        parseInt(DataInfo.gallant4))
    );

    // // if you're in DEV mode, this will RANDOM GEN the results..
    // if (process.env.NODE_ENV === 'development') {
    //   DataInfo.relentlessResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.oppositionalResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.agnosticResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.messianicResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.insecureResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.nutsResult = Math.floor(Math.random() * 20) + 1;
    //   DataInfo.gallantResult = Math.floor(Math.random() * 20) + 1;
    // }

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
  const r = resultInfo.relentlessResult / 20;
  const o = resultInfo.oppositionalResult / 20;
  const a = resultInfo.agnosticResult / 20;
  const m = resultInfo.messianicResult / 20;
  const i = resultInfo.insecureResult / 20;
  const n = resultInfo.nutsResult / 20;
  const g = resultInfo.gallantResult / 20;

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

  const primitivePercentile =
    resultInfo.PQ_ShortScale < 48
      ? "1st"
      : resultInfo.PQ_ShortScale >= 48 && resultInfo.PQ_ShortScale < 66
      ? "10th"
      : resultInfo.PQ_ShortScale >= 66 && resultInfo.PQ_ShortScale < 79
      ? "20th"
      : resultInfo.PQ_ShortScale >= 79 && resultInfo.PQ_ShortScale < 90
      ? "35th"
      : resultInfo.PQ_ShortScale >= 90 && resultInfo.PQ_ShortScale < 100
      ? "50th"
      : resultInfo.PQ_ShortScale >= 100 && resultInfo.PQ_ShortScale < 112
      ? "75th"
      : resultInfo.PQ_ShortScale >= 112 && resultInfo.PQ_ShortScale < 119
      ? "85th"
      : resultInfo.PQ_ShortScale >= 119 && resultInfo.PQ_ShortScale < 129
      ? "95th"
      : resultInfo.PQ_ShortScale >= 129 && resultInfo.PQ_ShortScale < 140
      ? "99th"
      : (resultInfo.PQ_ShortScale = 140 ? "100th" : null);

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
        You scored in the <strong>{primitivePercentile}</strong> Primitive
        Percentile
      </H2>

      <GraphDiv>
        <BoxLeft></BoxLeft>
        <BoxMid>
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
      <Divider></Divider>
      <ResultVisual resultInfo={resultInfo} />
    </>
  );
}

const Divider = styled.div`
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
