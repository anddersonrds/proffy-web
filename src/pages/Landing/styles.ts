import styled from 'styled-components';
import { color, font } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  color: ${color.text_in_primary};
  background: ${color.primary};
`;

export const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 700px;

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    font-family: ${font.archivo};
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    color: ${color.button_text};
    transition: background-color 0.2s;

    :first-child {
      margin-right: 1.6rem;
    }

    img {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  .study {
    background: ${color.primary_lighter};
    :hover {
      background: ${color.primary_light};
    }
  }

  .give-classes {
    background: ${color.secundary};
    :hover {
      background: ${color.secundary_dark};
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.8rem;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
    font-size: 1.4rem;
  }
`;
