"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const VideoEmbedded = (props) => {
  const { id, video, autoPlay, loop, muted, controls } = props;
  // console.log("props", props);
  return (
    <div
      key={id}
      className="aspect-[4/3]"
      style={{ width: "100%", backgroundColor: "#000" }}
    >
      <ReactPlayer
        controls={controls ?? true}
        muted={muted}
        autoPlay={autoPlay}
        width="100%"
        height="100%"
        loop={loop}
        url={video.url}
      />
    </div>
  );
};

export default VideoEmbedded;
