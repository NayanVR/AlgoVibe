"use client";

import React, { useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { BiPowerOff } from "react-icons/bi";
import SortingVisualizer from "@/components/SortingVisualizer";

const sortingAlgos = {
  bubbleSort: "Bubble Sort",
  insertionSort: "Insertion Sort",
  mergeSort: "Merge Sort",
  quickSort: "Quick Sort",
};

const clientWidth = document.documentElement.clientWidth;

export default function Sorting() {
  const [sizeOfArray, setSizeOfArray] = useState<number>(25);
  const [selectedAlgo, setSelectedAlgo] = useState<string>(
    sortingAlgos.bubbleSort
  );

  function handleGenerateClick(): void {}

  function handleStartClick(): void {}

  function handleKillClick(): void {}

  return (
    <section className="relative flex flex-col gap-4 sm:gap-8 h-screen items-center px-2">
      <div className="h-full">
        <SortingVisualizer length={sizeOfArray} />
      </div>
      <div className="m-2 p-2 sm:mb-8 w-full max-w-xl border-gray-300 border rounded-xl flex flex-col sm:flex-row gap-2">
        <div className="w-full h-10 gap-2 flex">
          <button
            className="h-10 min-w-[2.5rem] bg-primary hover:bg-primary-dark transition-all rounded-lg"
            onClick={handleGenerateClick}
          >
            <BsArrowRepeat color="white" className="mx-auto" />
          </button>
          <div className="w-full h-full rounded-lg overflow-hidden relative">
            <span className="absolute top-1/2 -translate-y-1/2 font-text left-4 z-10 text-white pointer-events-none">
              Size
            </span>
            <input
              type="range"
              onChange={(e) => setSizeOfArray(parseInt(e.target.value))}
              min={5}
              max={clientWidth < 600 ? 25 : 50}
              value={sizeOfArray}
              step={1}
            />
          </div>
        </div>
        <div className="w-full h-10 gap-2 flex">
          <select
            onChange={(e) => setSelectedAlgo(e.target.value)}
            value={selectedAlgo}
            className="h-10 w-full px-4 bg-[#f0f0f0] border border-tertiary font-text transition-all rounded-lg"
          >
            {Object.values(sortingAlgos).map((algo) => {
              return (
                <option key={algo} value={algo}>
                  {algo}
                </option>
              );
            })}
          </select>
          <button
            className="h-10 min-w-[2.5rem] bg-secondary hover:bg-secondary-dark transition-all rounded-lg"
            onClick={handleStartClick}
          >
            <MdRocketLaunch color="white" className="mx-auto" />
          </button>
          <button
            className="h-10 min-w-[2.5rem] bg-error transition-all rounded-lg"
            onClick={handleKillClick}
          >
            <BiPowerOff color="white" className="mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
