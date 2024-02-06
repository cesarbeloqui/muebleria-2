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
            Biotec Amoblamientos nació en 1 de julio 2014.
Somos una fábrica de muebles a medida y diseños estándar , nos dedicamos a la fabricación de cocina,placares y vestidores.
Nos diferenciamos de la competencia por la atención personalizada, y la garantía de 10 años nos avalan de trabajo duro y confianza en nuestros clientes.
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
