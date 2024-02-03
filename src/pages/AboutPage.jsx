import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.png";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="Acerca De Nosotros" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Nuestra historia</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            iure vel tempora laudantium molestias earum unde eius eum omnis
            nemo. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, repellat.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-8);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    margin-top: 0.75rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
