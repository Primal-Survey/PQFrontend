import React from "react";
import styled from "styled-components";

const PrimitiveTypeCard = (props) => {
  //   console.log(props.skill);
  return (
    <SkillStyle
      className="card small"
      style={{
        width: "15vw",
        // height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <CardImage
        className="card-image"
        style={{
          maxWidth: "75px",
          maxHeight: "75px",
          display: "block",
        }}
      >
        <img src={props.primitiveType.image} alt="primitiveType img" />
      </CardImage>

      <CardText className="card-content center">
        <Div>
          <p>
            <strong>{props.primitiveType.title}</strong>
          </p>
        </Div>
        <Div>
          <p>{props.primitiveType.description}</p>
        </Div>
      </CardText>
    </SkillStyle>
  );
};
const SkillStyle = styled.div`
  /* border: 1px solid black; */
  margin-bottom: 1em;
`;

const CardImage = styled.div`
  /* border: 1px solid orange; */
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  min-height: 75%;

  /* border: 1px solid blue; */
`;

const Div = styled.div`
  /* border: 1px solid red; */
  margin-top: 1em;
`;

export default PrimitiveTypeCard;
