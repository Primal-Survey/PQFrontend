import React from "react";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import ResultVisual from "./ResultVisual";

function DataVisual(surveyInfo) {
  const resultInfo = surveyInfo.surveyInfo.surveyInfo;
  console.log(surveyInfo);
  const [DataInfo, setDataInfo] = useState(resultInfo);

  useEffect(() => {
    agrigateData();
  }, []);
  //   console.log(DataInfo);

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
		  DataInfo.relentlessResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.oppositionalResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.agnosticResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.messianicResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.insecureResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.nutsResult = Math.floor(Math.random() * 15) + 1
		  DataInfo.gallantResult = Math.floor(Math.random() * 15) + 1
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
  const defaultOptions = {
    captionProps: () => ({
      className: "caption",
      textAnchor: "middle",
      fontSize: "20px",
      fontFamily: "sans-serif",
    }),
  };

  const captions = {
    // columns
    Relentless: "Relentless",
    Oppositional: "Oppositional",
    Agnostic: "Agnostic",
    Messianic: "Messianic",
    Insecure: "Insecure",
    Nuts: "Nuts",
    Gallant: "Gallant",
  };

  return (
    <Fade>
      <RadarChart captions={captions} data={data} size={350} />
      <h3>You are {PrimalPercent}% Primal</h3>
      <ResultVisual resultInfo={resultInfo} />
    </Fade>
  );
}

export default DataVisual;
