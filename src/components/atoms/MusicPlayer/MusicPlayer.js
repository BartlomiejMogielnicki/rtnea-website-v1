import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 60px;
  border: 1px solid #bbb;
  border-radius: 5px;
  text-align: center;
  color: #bbb;
`;

const StyledTitle = styled.p`
  margin-bottom: -10px;
  font-size: 0.8rem;
`;

const MusicPlayer = () => (
  <StyledWrapper>
    <StyledTitle>Włącz mnie</StyledTitle>
    <AudioPlayer
      layout="stacked-reverse"
      showJumpControls={false}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      style={{
        backgroundColor: 'transparent',
      }}
    />
  </StyledWrapper>
);

export default MusicPlayer;
