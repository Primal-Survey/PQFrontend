import React from "react";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import submitInfo from "../Contexts/SubmitInfo";

function DataVisual(surveyInfo) {
  const resultInfo = surveyInfo.surveyInfo.surveyInfo;
  const [DataInfo, setDataInfo] = useState(resultInfo);
  useEffect(() => {
    agrigateData();
    console.log(DataInfo.relentlessResult);

  }, [surveyInfo]);

  const agrigateData = () => {
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
  };

  const r = 0.001 * DataInfo.relentlessResult;
  const o = 0.001 * DataInfo.relentlessResult;
  const a = 0.001 * DataInfo.relentlessResult;
  const m = 0.001 * DataInfo.relentlessResult;
  const i = 0.001 * DataInfo.relentlessResult;
  const n = 0.001 * DataInfo.relentlessResult;
  const g = 0.001 * DataInfo.relentlessResult;

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
      <RadarChart captions={captions} data={data} size={800} />
    </Fade>
  );
}

export default DataVisual;
