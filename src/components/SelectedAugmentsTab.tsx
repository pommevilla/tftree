import React from "react";
import { Augment } from "./Augment.interface";

export const SelectedAugmentsTab = ({
  augmentList,
}: {
  augmentList: Augment[];
}) => {
  return (
    // Whole thing
    <div>
      {/* Sort by buttons */}

      {/* Champions */}
      <div className="grid grid-cols-3 gap-1">
        {augmentList.map((augment, index) => (
          <div
            key={index}
            className="w-14 cursor-pointer rounded-lg border-2 border-gray-700 shadow-md"
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
