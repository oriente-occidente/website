import { useRef, useEffect } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({ src, autoplay = true, ...other }) {
  const ref = useRef();

  useEffect(() => {
    var hls = new Hls();
    hls.attachMedia(ref.current);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      hls.loadSource(src);
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        // if (autoplay) {
        ref.current.play();
        // }
      });
    });
  }, []);

  console.log('HLS', src);
  return (
    <div style={{ width: '100%', minHeight: 500, backgroundColor: 'black' }}>
      <video ref={ref} style={{ width: '100%' }} {...other} />
    </div>
  );
}
