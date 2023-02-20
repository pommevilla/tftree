import React from "react";
import { Champion } from "./Champion.interface";

export const SelectCardGrid = ({
  championList,
  onClick,
}: {
  championList: Champion[];
  onClick: (champion: Champion) => void;
}) => {
  return (
    // Whole thing
    <div>
      {/* Sort by buttons */}

      {/* Champions */}
      <div className="grid grid-cols-10 gap-1">
        {championList.map((champion, index) => (
          <div
            key={index}
            className="w-20 cursor-pointer rounded-lg border-2 border-gray-100 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
            onClick={() => onClick(champion)}
          >
            <img
              className="rounded-t-lg"
              src={champion.src}
              alt={champion.name}
              title={champion.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
