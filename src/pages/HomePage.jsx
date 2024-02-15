import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import styled from "styled-components";
import fondoHeader from "../assets/fondoHeader.png";

const HomePage = () => {
  return (
    <Wrapper>
      <main className="main">
        <Hero />
        <FeaturedProducts />
        {/*       <Services /> */}
        {/*       <Contact /> */}
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*   min-height: 60vh;
  display: grid;
  place-items: center;
  margin-top: 3rem; */
  /*   background-image: url(${fondoHeader});*/
  .main {
    background-size: cover;
    background-image: url(${fondoHeader});
    background-position: center;
  }
`;

export default HomePage;
