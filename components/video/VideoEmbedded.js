import { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoEmbedded = (props) => {
  console.log(props);
  const { id, video, autoPlay, loop, muted, controls } = props;
  const ref = useRef();
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (ref?.current && !width) {
      const rect = ref.current.getBoundingClientRect().toJSON();
      // console.log('RECT WIDTH', rect.width);
      setWidth(rect.width);
    }
    [ref?.current], width;
  });

  return (
    <div key={id}>
      {width && (
        <ReactPlayer
          controls={controls}
          muted={muted}
          width={width}
          height={500}
          autoPlay={autoPlay}
          loop={loop}
          url={video.url}
        />
      )}
    </div>
  );
};

export default VideoEmbedded;
