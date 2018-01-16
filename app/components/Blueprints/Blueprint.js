import styled from 'styled-components';

const Blueprint = styled.div`
  & + & {
    margin-top: 15px;
  }
`;

export default Blueprint;
