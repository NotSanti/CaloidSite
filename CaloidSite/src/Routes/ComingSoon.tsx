import {
  BehanceIcon,
  InstagramIcon,
  SoundCloudIcon,
} from "../components/Icons";
import { Link } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";

const ComingSoon = () => {
  const texts = [
    "videographer",
    "Photographer",
    "Creative",
    "Caloid",
    "Coming soon.",
  ];

  const displayedText = useTypewriter(texts);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="videoBG"
        className="fixed right-0 bottom-0 min-w-full min-h-full blur-lg scale-110"
      >
        <source
          src="https://dcowma0th03ok4n2.public.blob.vercel-storage.com/caloidBG2Comp-FMmfMZ9MmHFvX4E0YEBW0W5WLKvY43.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="h-full w-full flex flex-col justify-center items-center absolute">
        <div className="text-2xl font-bold h-10">
          {displayedText.toUpperCase()}
        </div>
        <div className="gap-2 mt-2">
          <Link to="https://www.instagram.com/caloid" target="_blank">
            <InstagramIcon width={20} className="hover:text-gray-400" />
          </Link>
          <Link to="https://www.behance.net/caloid" target="_blank">
            <BehanceIcon width={20} className="hover:text-gray-400" />
          </Link>
          <Link to="https://soundcloud.com/caloid" target="_blank">
            <SoundCloudIcon width={20} className="hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
