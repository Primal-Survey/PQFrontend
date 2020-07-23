import React from "react";
import styled from "styled-components";

const PrimitiveTypeCard = (props) => {
  //   console.log(props.skill);
  return (
    <SkillStyle
      className="card medium"
      style={{
        width: "15vw",
        // height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        className="card-image"
        style={{
          maxWidth: "95%",
          maxHeight: "95%",
          display: "block",
        }}
      >
        <img src={props.primitiveType.image} alt="primitiveType img" />
      </div>

      <div className="card-content center">
        <p>
          <strong>{props.primitiveType.title}</strong>
        </p>
        <p>{props.primitiveType.description}</p>
      </div>
    </SkillStyle>
  );
};
const SkillStyle = styled.div`
  padding: 3%;

  &:hover {
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

export default PrimitiveTypeCard;
