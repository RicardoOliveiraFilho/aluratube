import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 100px;
  height: 124px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;

export function FavoritoCard(props) {
  return (
    <Card>
      <Avatar src={props.favorito.avatar_url} />
      <Name>{props.favorito.name}</Name>
    </Card>
  );
}