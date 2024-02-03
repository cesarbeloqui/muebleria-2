import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import products_reducer from "../reducers/products_reducer";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <Link to={`/products/${id}`}>
        <div className="container">
          <img src={image} alt={name} />
        </div>
        <footer>
          <h5>{name}</h5>
        </footer>
      </Link>
      <Link to={`/products/${id}`} className="link">
        <FaSearch />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius-rounded);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius-rounded);
    transition: var(--transition);
    box-shadow: 10px -1px 36px -1px rgba(0, 0, 0, 0.5);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    color: var(--clr-primary-6);
  }
  footer h5 {
    background-color: var(--clr-primary-1);
    padding: .25rem .75rem;
    border-radius: var(--radius);
  }

  footer p {
    color: var(--clr-primary-7);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
