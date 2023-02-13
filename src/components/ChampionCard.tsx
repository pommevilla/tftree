import React from "react";
import Link from "next/link";
import { Champion } from "./Champion.interface";

export const ChampionCard = ({ champion, onClick }) => {
  return (
    // <div className="max-w-sm rounded-lg border-4 border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
    <div
      className="w-32 cursor-pointer rounded-lg border-2 border-gray-100 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
      onClick={(e) => onClick(e.target)}
    >
      <img
        className="rounded-t-lg"
        src={champion.src}
        alt={champion.name}
        title={champion.name}
      />
    </div>
  );
};
