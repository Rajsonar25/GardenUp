import React from 'react';

const VideoComponent = () => {
  const videoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  };

  const iframeStyle = {
    border: '10px solid black',
    width: '560px',
    height: '315px',
  };

  return (<>
    <div class="yt-video" id="ytlink">YOUTUBE LINK</div>
    <hr style={{ border: '1px solid grey' }} />
    <div style={videoContainerStyle}>
      <iframe
        style={iframeStyle}
        src="https://www.youtube.com/embed/N-gjXi2yZ5I?si=C0ykghWAVCGFYvtT"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    </>
  );
};

export default VideoComponent;
