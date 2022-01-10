import VideoInternal from 'components/video/VideoInternal';
import VideoHls from 'components/video/VideoHls';

export default function VideoPlayer(props) {
  if (props.videoFile.video) {
    return (
      <VideoHls
        autoPlay={props.autoPlay ? true : false}
        loop={props.loop}
        controls={props.controls}
        muted={props.mudeted}
        src={props.videoFile.video.streamingUrl}
      />
    );
  } else {
    return <VideoInternal  {...props} />;
  }
}
<source src={videoFile.url} type={videoFile.mimeType} />;
