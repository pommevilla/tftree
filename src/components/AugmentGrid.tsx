import React from "react";
import { Augment } from "./Augment.interface";

export const AugmentGrid = ({
  augmentList,
  onClick,
}: {
  augmentList: Augment[];
  onClick: (augment: Augment) => void;
}) => {
  return (
    <div>
      <div className="grid grid-cols-10 gap-1">
        {augmentList.map((augment, index) => (
          <div
            key={index}
            className="w-20 cursor-pointer rounded-lg border-2 border-gray-100 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
            onClick={() => onClick(augment)}
          >
            <img
              className="rounded-t-lg"
              src={augment.icon}
              alt={augment.name}
              title={augment.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
