import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em;
  margin-left: 25px;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 17px;
  color: #424242;
  position: relative;

  & span::after {
    content: '';
    position: absolute;
    height: 2px;
    bottom: -5px;
    left: 5px;
    right: 5px;
    background: #424242;
    transition: all .3s;
    opacity: 0;
  }

  &:hover span::after,
  &:focus span::after {
    bottom: 0;
    opacity: 1;
  }

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
