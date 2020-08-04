import styled from 'styled-components';
import { color, font } from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    align-self: flex-start;
    font-size: 1.4rem;
  }

  &:focus-within::after {
    position: absolute;
    content: '';
    height: 2px;
    width: calc(100% - 3.2rem);
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
    background: ${color.primary_light};
    background: red;
  }

  input {
    width: 100%;
    height: 5.6rem;
    font-size: 1.6rem;
    font-family: ${font.archivo};
    padding: 0 1.6rem;
    margin-top: 0.8rem;
    outline: 0;
    border-radius: 0.8rem;
    border: 1px solid ${color.line_in_white};
    background: ${color.input_background};
  }

  & + div {
    margin-top: 1.4rem;
  }
`;
