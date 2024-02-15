import React from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Loading,
} from "../components";
import styled from "styled-components";
import fondoHeader from "../assets/fondoHeader.png";
import { useState } from "react";

const HomePage = () => {

  return fondoHeader ? (
    <Wrapper backgroundImage={fondoHeader}>
      <main className="main">
        <Hero />
        <FeaturedProducts />
        {/* <Services /> */}
        {/* <Contact /> */}
      </main>
    </Wrapper>
  ) : (
    <Loading />
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
    background-image: url(${(props) => props.backgroundImage});
    background-position: center;
  }
`;

export default HomePage;
