import { useState } from "react";

export default function Shorts() {
  const shortVideos: string[] = [
    "https://cdn.pixabay.com/video/2023/01/09/145864-787701151_large.mp4",
    "https://cdn.pixabay.com/video/2019/10/09/27706-365890968_large.mp4",
    "https://cdn.pixabay.com/video/2020/01/13/31210-385265519_large.mp4",
  ];
  const [active, setActive] = useState<string>(shortVideos[0]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16">
      <div className="relative w-4/5 md:w-1/2 shadow-lg overflow-hidden rounded-lg">
        <video
          className="w-full h-auto bg-black rounded-lg"
          autoPlay
          src={active}
        />
      </div>

      <ul className="flex gap-4 mt-8 overflow-x-auto w-full justify-center overflow-hidden">
        {shortVideos.map((v, index) => (
          <li
            key={index}
            onClick={() => setActive(v)}
            className={`w-28 h-28 md:w-36 md:h-36 flex-shrink-0 cursor-pointer transition-transform duration-300 ${
              active === v ? "border-4 border-red-600" : "hover:scale-105"
            } rounded-lg overflow-hidden shadow-md`}
          >
            <video className="w-full h-full object-cover" src={v} muted />
          </li>
        ))}
      </ul>
    </div>
  );
}
