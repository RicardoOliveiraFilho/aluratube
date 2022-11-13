import styled from 'styled-components';

export const Banner = styled.div`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  height: 230px;
  width: 100%;
`;