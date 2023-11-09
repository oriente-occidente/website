import { PlayIcon } from "@heroicons/react/outline";
import { PauseIcon } from "@heroicons/react/solid";
import { VolumeUpIcon } from "@heroicons/react/outline";
import { VolumeOffIcon } from "@heroicons/react/outline";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function MediaAudioPlayer({ data, locale }) {
  return (
    <div className="audio-player grid grid-cols-1 justify-start px-6 lg:px-10">
      {data.audioFiles &&
        data.audioFiles.map((el) => (
          <div
            key={el.id}
            className="col-span-1 border-t border-[#D83D35] py-8 md:flex md:justify-between"
          >
            <div>
              <div className="w-full pb-1 text-sm font-bold uppercase">
                {el.title}
              </div>
              <div className="pb-4 text-xs">{el.author}</div>
            </div>
            <div className="col-span-1 flex h-auto justify-center">
              <AudioPlayer
                src={el.url}
                autoplay={false}
                loop={false}
                preload="none"
                showSkipControls={false}
                defaultCurrentTime="00:00"
                layout="horizontal-reverse"
                showJumpControls={false}
                customProgressBarSection={[
                  RHAP_UI.MAIN_CONTROLS,
                  RHAP_UI.CURRENT_TIME,
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.DURATION,
                  RHAP_UI.VOLUME,
                ]}
                customIcons={{
                  play: (
                    <PlayIcon
                      aria-hidden="true"
                      className="absolute h-12 w-12 sm:h-[60px] sm:w-[60px]"
                      color="#D83D35"
                    />
                  ),
                  pause: (
                    <PauseIcon
                      aria-hidden="true"
                      className="absolute h-12 w-12 sm:h-[60px] sm:w-[60px]"
                      color="#D83D35"
                    />
                  ),
                  volume: (
                    <VolumeUpIcon
                      aria-hidden="true"
                      className="absolute h-5 w-5"
                    />
                  ),
                  volumeMute: (
                    <VolumeOffIcon
                      aria-hidden="true"
                      className="absolute h-5 w-5"
                    />
                  ),
                }}
              />
            </div>
          </div>
        ))}
    </div>
  );
}
