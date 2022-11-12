import styled from 'styled-components';

import { CSSReset } from '../styles/GlobalStyles';

import config from '../../config.json';

import Menu from '../components/Menu';
import { StyledTimeline } from '../components/Timeline';

export default function HomePage() {
  const estiloDaHomePage = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  };

  return (
    <>
      <CSSReset />
      <div style={estiloDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]

        return (
          <section>
            <h2>{playlistName}</h2>

            <div>
              {videos.map((video) => (
                <a href={video.url}>
                  <img src={video.thumb} />
                  <span>{video.title}</span>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  );
}