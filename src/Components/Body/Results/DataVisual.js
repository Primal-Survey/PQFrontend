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

  /////////////////////////////////////////////////////////////these are the Db results on the graph, dont change to /20, too many results are prior to adding the additional questions
  //and it makes it very skewed

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
    console.log("relentlessResult", DataInfo.relentlessResult);
    console.log("oppositionalResult", DataInfo.oppositionalResult);
    console.log("agnosticResult", DataInfo.agnosticResult);
    console.log("messianicResult", DataInfo.messianicResult);
    console.log("insecureResult", DataInfo.insecureResult);
    console.log("nutsResult", DataInfo.nutsResult);
    console.log("gallantResult", DataInfo.gallantResult);

    // if you're in DEV mode, this will RANDOM GEN the results..
    if (process.env.NODE_ENV === "development") {
      DataInfo.relentlessResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.oppositionalResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.agnosticResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.messianicResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.insecureResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.nutsResult = Math.floor(Math.random() * 20) + 1;
      DataInfo.gallantResult = Math.floor(Math.random() * 20) + 1;
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //change this to the following instead of dividing the percent
  //   The math is imperfect in the table (going to round up per Ron's advice), so if:
  // (a)  someone scores 28 (i.e. if they put "1" for each question) to 47, then it should say: "You Scored in the 1st Primitive Percentile."
  // (b) someone scores between 48 to 65, then it should say: "You Scored in the 10th Primitive Percentile."
  // (c) someone scores between 66 to 78, then it should say: "You Scored in the 20th Primitive Percentile."
  // (d) someone scores between 79 to 89, then it should say: "You Scored in the 35th Primitive Percentile."
  // (e) someone scores between 90 to 99, then it should say: "You Scored in the 50th Primitive Percentile."
  // (f) someone scores between 100 to 111, then it should say: "You Scored in the 75th Primitive Percentile."
  // (g) someone scores between 112 to 118, then it should say: "You Scored in the 85th Primitive Percentile."
  // (h) someone scores between 119 to 128, then it should say: "You Scored in the 95th Primitive Percentile."
  // (i) someone scores between 129 to 139, then it should say: "You Scored in the 99th Primitive Percentile."
  // (j) someone scores 140, then it should say: "You Scored in the 100th Primitive Percentile."

  //   const primitivePercentile = parseFloat(
  //     (resultInfo.PQ_ShortScale / 140) * 100
  //   ).toFixed();

  //total results are out of 28 min to 140 max points

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
  console.log(resultInfo.PQ_ShortScale);
  console.log(primitivePercentile);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
