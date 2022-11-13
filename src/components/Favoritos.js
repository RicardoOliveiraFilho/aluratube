import styled from 'styled-components';
import { FavoritoCard } from './FavoritoCard';

const Container = styled.div`
  padding: 5px 32px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Title = styled.h2`
  margin-bottom: 16px;

  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  color: #000000
`;

export function Favoritos(props) {
  return (
    <Container>
      <Title>AluraTubes Favoritos</Title>

      <Content>
        {props.favoritos.map((favorito) => (
          <FavoritoCard favorito={favorito} />
        ))}
      </Content>
    </Container>
  );
}