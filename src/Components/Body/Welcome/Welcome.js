import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
// import axios from "axios";

import WelcomeHeader from "./WelcomeHeader";
import WelcomeContent from "./WelcomeContent";

function Welcome() {
  //   const [largeDataSet, setLargeDataSet] = useState({});

  //   useEffect(() => {
  //     pullAndCompare();
  //     // averageTheResults()
  //   }, []);

  //   const pullAndCompare = () => {
  //     axios.get(`https://pq-backend.herokuapp.com/api/results`).then((res) => {
  //       setLargeDataSet(res.data);
  //     });
  //   };

  //   const all = Object.values(largeDataSet);

  return (
    <Fade>
      <Container>
        <WelcomeHeader />
        <WelcomeContent />
      </Container>
    </Fade>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  max-width: 100vw;
`;
export default Welcome;
