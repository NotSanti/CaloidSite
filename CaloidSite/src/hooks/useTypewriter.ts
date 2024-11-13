import { useEffect, useMemo, useState } from "react";

const useTypewriter = (
  texts: string[],
  speed = 100,
  pauseTime = 2000,
  endDelay = 10000
) => {
  const [textIndex, setTextIndex] = useState(0); // Tracks which text in the array we're on
  const [index, setIndex] = useState(0); // Tracks the character index of the current text
  const [isDeleting, setIsDeleting] = useState(false); // Tracks whether we are typing or deleting
  const [isEndDelay, setIsEndDelay] = useState(false); // Tracks if we're pausing after last text

  const currentText = texts[textIndex % texts.length];
  const displayText = useMemo(
    () => currentText.slice(0, index),
    [currentText, index]
  );

  useEffect(() => {
    // If we are at the end of the final text and `endDelay` is active, pause without deleting
    if (isEndDelay) {
      const endDelayTimeout = setTimeout(() => {
        setIsEndDelay(false); // Reset the end delay flag
        setIsDeleting(true); // Start deleting after the delay
      }, endDelay);
      return () => clearTimeout(endDelayTimeout);
    }

    // Typing completed for the current text, pause before deleting
    if (!isDeleting && index === currentText.length) {
      const isLastText = textIndex === texts.length - 1;

      if (isLastText) {
        setIsEndDelay(true); // Trigger end delay if this is the last text
      } else {
        // For other texts, just start the delete cycle after `pauseTime`
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
      return;
    }

    // Deleting completed for the current text
    if (isDeleting && index === 0) {
      // Move to the next text or loop back to the beginning
      setTextIndex((prev) => (prev + 1) % texts.length);
      setIsDeleting(false); // Switch back to typing
      return;
    }

    // Continue typing or deleting characters
    const timeoutId = setTimeout(() => {
      setIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    // Cleanup timeout on unmount or dependencies change
    return () => clearTimeout(timeoutId);
  }, [
    index,
    isDeleting,
    currentText,
    pauseTime,
    endDelay,
    speed,
    textIndex,
    texts.length,
    isEndDelay,
  ]);

  return displayText;
};

export default useTypewriter;
