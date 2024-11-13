import React, { useEffect, useState } from "react";
import {
  BehanceIcon,
  InstagramIcon,
  SoundCloudIcon,
} from "../components/Icons";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [displayedText, setDisplayedText] = useState("");
  const initialText = "caloid";
  const finalText = "coming soon.";
  const typingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let isTypingFinalText = false;

    const typeText = () => {
      if (!isDeleting && index <= initialText.length && !isTypingFinalText) {
        setDisplayedText(initialText.slice(0, index));
        index++;
        setTimeout(typeText, typingSpeed);
      } else if (!isDeleting && !isTypingFinalText) {
        setTimeout(() => {
          isDeleting = true;
          index = initialText.length - 1;
          typeText();
        }, pauseTime);
      } else if (isDeleting && index >= 0) {
        setDisplayedText(initialText.slice(0, index));
        index--;
        setTimeout(typeText, typingSpeed);
      } else if (isDeleting && index < 0 && !isTypingFinalText) {
        isDeleting = false;
        isTypingFinalText = true;
        index = 0;
        setTimeout(typeText, typingSpeed);
      } else if (isTypingFinalText && index <= finalText.length) {
        setDisplayedText(finalText.slice(0, index));
        index++;
        if (index <= finalText.length) {
          setTimeout(typeText, typingSpeed);
        }
      }
    };

    typeText();
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="text-2xl font-bold h-10">
        {displayedText.toUpperCase()}
      </div>
      <div className="gap-2 mt-2">
        <Link to="https://www.instagram.com/caloid" target="_blank">
          <InstagramIcon width={20} className=" hover:opacity-50" />
        </Link>
        <Link to="https://www.behance.net/caloid" target="_blank">
          <BehanceIcon width={20} className=" hover:opacity-50" />
        </Link>
        <Link to="https://soundcloud.com/caloid" target="_blank">
          <SoundCloudIcon width={20} className=" hover:opacity-50" />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
