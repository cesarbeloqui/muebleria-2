import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.png";
import heroBcg2 from "../assets/hero-bcg-2.jpg";
import fondoHeader from "../assets/fondoHeader.png";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <div className="text">
          <h1>Fábrica de muebles a medida</h1>
          <p>
            Muebles de cocina, placares y vestidores. <br />
            La atención personalizada, la garantía de 10 años de trabajo duro y
            la confianza de nuestros clientes nos avalan.
          </p>
        </div>
        <Link to="/productos" className="btn hero-btn">
          Mirá Nuestros productos
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="table" className="main-img" />
        <img src={heroBcg2} alt="person" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  margin-top: 3rem;
  /*   background-image: url(${fondoHeader});
  background-size: cover;
  background-position: center; */

  .img-container {
    display: none;
  }
  .text {
    background-color: rgba(0, 0, 0, 0.466);
    padding: 2rem;
    margin-bottom: 1rem;
    border-radius: 0;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: white;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding-left: 2rem;
    border-radius: 0 var(--radius-rounded) var(--radius-rounded) 0;
    .text {
      background-color: rgba(0, 0, 0, 0.466);
      padding: 2rem;
      margin-bottom: 1rem;
      border-radius: var(--radius-rounded);
    }
    h1 {
      margin-bottom: 2rem;
      font-size: 3rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.8rem;
      margin: 2rem;
      box-shadow: 1px 0px 44px 0px #f7e1c6;
    }
    .hero-btn:hover {
      transform: scale(1.2);
      box-shadow: 1px 0px 44px 0px #000000;
    }
    .img-container {
      display: block;
      position: relative;
      box-shadow: 1px 0px 44px 0px #000000;
      border-radius: var(--radius-rounded);
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius-rounded);
      display: block;
      object-fit: cover;
      box-shadow: 10px -1px 36px -1px rgba(0, 0, 0, 0.5);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translate(-50%, 20%);
      border-radius: var(--radius-rounded);
      box-shadow: 10px -1px 36px -1px rgba(0, 0, 0, 0.5);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--terciario);
      bottom: 0%;
      left: -7%;
      border-radius: var(--radius-rounded);
    }
    .img-container::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: transparent;
      border: 3px solid var(--terciario);
      bottom: -8%;
      left: 8%;
      border-radius: var(--radius-rounded);
      z-index: -5;
    }
  }
`;

export default Hero;
