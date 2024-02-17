import {
  FeaturedProducts,
  Hero,
  /*   Services,
  Contact, */
  Loading,
} from "../components";
import styled from "styled-components";
import fondoHeader from "../assets/fondoHeader.png";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  // Simula un tiempo de carga
  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded ? (
    <Wrapper>
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
const Wrapper = styled.section.attrs((props) => ({
  style: {
    background: `linear-gradient(#0000004e, #000000c5), url(${fondoHeader}) fixed`,
    backgroundAttachment: "fixed",
    marginTop: "2rem",
  },
}))`
  /*   min-height: 60vh;
  display: grid;
  place-items: center;
  margin-top: 3rem; */
  /*   background-image: url(${fondoHeader});*/
`;

export default HomePage;
