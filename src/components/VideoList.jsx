// src/components/VideoList.js
import React from 'react';
import styled from 'styled-components';
import Video from './Video';

const VideoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const VideoList = ({ videos }) => {
    return (
        <VideoListContainer>
            {videos.map((video) => (
                <Video key={video.id} video={video} />
            ))}
        </VideoListContainer>
    );
};

export default VideoList;