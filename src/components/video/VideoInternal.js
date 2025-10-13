import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import Image from "next/image";

export default function VideoInternal(props) {
  console.log("props", props);
  const { internalVideo } = props;
  const videoUrl = internalVideo?.video?.streamingUrl
    ? internalVideo?.video?.streamingUrl
    : internalVideo?.url;

  // return;
  return (
    <MediaPlayer
      autoPlay={false}
      muted={true}
      // playsInline={true}
      paused={true}
      controls={false}
      controlsDelay="0"
      loop={true}
      title={internalVideo.title ? internalVideo.title : "Oriente Occidente"}
      src={videoUrl}
    >
      <MediaProvider />

      <Poster asChild className="vds-poster">
        <Image
          src={internalVideo.thumbnailUrl}
          width={1280}
          height={800}
          alt={internalVideo.title ? internalVideo.title : "Italian Tech Week"}
        />
      </Poster>
      <DefaultVideoLayout
        thumbnails={internalVideo.thumbnailUrl}
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
