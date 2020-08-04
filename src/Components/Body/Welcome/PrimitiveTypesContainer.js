import React from "react";

import SecondButton from "./SecondButton";

import R from "./typeImages/R-Med.png";
import O from "./typeImages/O-Med.png";
import A from "./typeImages/A-Med.png";
import M from "./typeImages/M-Med.png";
import I from "./typeImages/I-Med.png";
import N from "./typeImages/N-Med.png";
import G from "./typeImages/G-Med.png";

import PrimitiveTypeCard from "./PrimitiveTypeCard";

const PrimitiveTypesContainer = () => {
  const PrimitiveTypes = [
    {
      image: R,
      title: "Relentless:",
      description: "Finds radical ways to charge forward and change direction",
    },
    {
      image: O,
      title: "Oppositional:",
      description: "Seeks out big challenges and despises groupthink",
    },
    {
      image: A,
      title: "Agnostic:",
      description: "Impartial from any field, method, or goal—willing to jump!",
    },
    {
      image: M,
      title: "Messianic:",
      description: "Pursues mission-driven objectives to change the world",
    },
    {
      image: I,
      title: "Insecure:",
      description:
        "Refuses to rest on their laurels; scratches and claws to success",
    },
    {
      image: N,
      title: "Nuts:",
      description: "Takes chances no careful or rational person would advise",
    },
    {
      image: G,
      title: "Gallant:",
      description: "Blends courage and nobility in measuring their impact",
    },
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          // border: "1px solid orange",
        }}
      >
        {PrimitiveTypes.map((primitiveType) => {
          return (
            <div className=" col s12 m6 l3 " key={primitiveType.id}>
              <PrimitiveTypeCard primitiveType={primitiveType} />
            </div>
          );
        })}
      </div>
      <SecondButton />
    </>
  );
};

export default PrimitiveTypesContainer;
