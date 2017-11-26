import { css } from 'styled-components';

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 14px;
  text-decoration: none;
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 17px;
  border: 0;
  color: #fff;
  background-color: #543B7A;
  background-image: linear-gradient(#7950B9 0%, #543B7A 100%);
  height: 38px;
  transition: all .2s ease;

  &:hover,
  &:focus {
    background-position: 0 -100px;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), inset 0 0 12px #543B7A;
  }

  &:active {
    opacity: 0.85;
  }
`;

export default buttonStyles;
