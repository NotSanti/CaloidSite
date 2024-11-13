import { useRef } from "react";

const RandomPictureContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderPicture = (src: string) => {
    // const minXPos = containerRef.current?.offsetWidth || 0 - 300;
    // const xPos = Math.round()
    return (
      <div
        className="w-[100px] h-[200px] bg-slate-600 border border-red-600"
        key={src}
      ></div>
    );
  };

  return (
    <div className="w-[50vw] h-[50vh] m-auto" ref={containerRef}>
      <div className="flex gap-2">
        {["1", "2", "3", "4", "5"].map((item) => {
          return renderPicture(item);
        })}
      </div>
    </div>
  );
};

export default RandomPictureContainer;
