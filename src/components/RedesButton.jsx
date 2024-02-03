import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const RedesButton = () => {
  return (
    <Wrapper className="redes-btn-wrapper">
      <a
        href="https://www.facebook.com/BiotecAmoblamientos"
        className="redes-btn"
      >
        <span className="redes-container">
          <FaFacebook className="icon" />
        </span>
      </a>
      <a
        href="https://www.instagram.com/biotecamoblamientos"
        className="redes-btn"
      >
        <span className="redes-container">
          <FaInstagram className="icon" />
        </span>
      </a>
      <a href="https://wa.me/message/XFWFB46MDS3TL1" className="redes-btn">
        <span className="redes-container">
          <FaWhatsapp className="icon" />
        </span>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  width: auto;
  a {
    text-decoration: none;
  }

  .redes-btn {
    margin: 0 0.5rem;
    background: var(--clr-primary-1);
    color: var(--clr-primary-10);
    transition: var(--transition);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    width: 35px;
    height: 35px;
  }
  .redes-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }
  .redes-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .icon {
    display: flex;
    position: absolute;
    transform: translateX(1.5px);
  }
`;
export default RedesButton;
