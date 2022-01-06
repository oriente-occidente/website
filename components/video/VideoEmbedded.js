import { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoEmbedded = ({ id, video, autoplay, loop }) => {
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
          controls={true}
          muted={true}
          width={width}
          height={500}
          autoPlay={autoplay}
          loop={loop}
          url={video.url}
        />
      )}
    </div>
  );
};

export default VideoEmbedded;
