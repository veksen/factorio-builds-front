import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SiteTitle = styled(Link)`
  color: #424242;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export default SiteTitle;
