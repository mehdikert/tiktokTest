// src/components/Video.js
import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin-bottom: 20px;
`;

const VideoElement = styled.video`
  width: 100%;
  max-width: 600px;
`;

const Username = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const Hashtags = styled.p`
  color: ${props => props.theme.secondaryColor};
`;

const Video = ({ video }) => {
    return (
        <VideoContainer>
            <VideoElement controls>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoElement>
            <Username>{video.userName}</Username>
            <Hashtags>Hashtags: {video.hashtags.join(', ')}</Hashtags>
        </VideoContainer>
    );
};

export default Video;