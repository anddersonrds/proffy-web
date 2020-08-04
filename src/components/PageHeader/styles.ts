import styled from 'styled-components';
import { color, font } from '../../styles/theme';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: ${color.primary};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 1.6rem 0;
    color: ${color.text_in_primary};

    a {
      height: 3.2rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 1.6rem;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  strong {
    font-family: ${font.archivo};
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.2rem;
    color: ${color.title_in_primary};
  }
`;
