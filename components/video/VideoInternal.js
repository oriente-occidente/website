const VideoInternal = ({ id, videoFile, autoPlay, ...other }) => {
  return (
    <div key={id}>
      <video autoPlay={autoPlay || false} {...other} style={{ width: '100%' }}>
        <source src={videoFile.url} type={videoFile.mimeType} />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default VideoInternal;
