"use client";

import React, { useState, useRef } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { BiPowerOff } from "react-icons/bi";
import { SortingVisualizer } from "@/components/SortingVisualizer";
import { randomInt } from "@/util/functions";

const sortingAlgos = {
  bubbleSort: "Bubble Sort",
  insertionSort: "Insertion Sort",
  mergeSort: "Merge Sort",
};

const clientWidth = document.documentElement.clientWidth;
const MIN_ARRAY_BARS = clientWidth < 600 ? 5 : 10;
const MAX_ARRAY_BARS = clientWidth < 600 ? 25 : 50;

export default function Sorting() {
  const [sizeOfArray, setSizeOfArray] = useState<number>(20);
  const [selectedAlgo, setSelectedAlgo] = useState<string>(
    sortingAlgos.bubbleSort
  );
  const [isControlsDisabled, setIsControlsDisabled] = useState<boolean>(false);

  const visualizerRef = useRef<any>(null);

  function handleGenerateClick(): void {
    const newLength = randomInt(MIN_ARRAY_BARS, MAX_ARRAY_BARS);
    setSizeOfArray(newLength);
  }

  function handleStartClick(): void {
    setIsControlsDisabled(true);
    visualizerRef.current.startClick();
  }

  function handleKillClick(): void {
    setIsControlsDisabled(false);
    visualizerRef.current.killClick();
  }

  return (
    <section className="relative flex flex-col gap-4 sm:gap-8 h-screen items-center px-2">
      <div className="h-full">
        <SortingVisualizer
          length={sizeOfArray}
          algo={selectedAlgo}
          allAlgos={sortingAlgos}
          toggleControls={setIsControlsDisabled}
          ref={visualizerRef}
        />
      </div>
      <div className="m-2 p-2 sm:mb-8 w-full max-w-xl border-gray-300 border rounded-xl flex flex-col sm:flex-row gap-2">
        <div className="w-full h-10 gap-2 flex">
          <button
            disabled={isControlsDisabled}
            className="h-10 min-w-[2.5rem] bg-primary hover:bg-primary-dark disabled:bg-gray-700 transition-all rounded-lg"
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
              disabled={isControlsDisabled}
              onChange={(e) => setSizeOfArray(parseInt(e.target.value))}
              min={MIN_ARRAY_BARS}
              max={MAX_ARRAY_BARS}
              value={sizeOfArray}
              step={1}
            />
          </div>
        </div>
        <div className="w-full h-10 gap-2 flex">
          <select
            disabled={isControlsDisabled}
            onChange={(e) => setSelectedAlgo(e.target.value)}
            value={selectedAlgo}
            className="h-10 w-full px-4 bg-[#f0f0f0] text-gray-800 border border-tertiary disabled:border-gray-700 font-text transition-all rounded-lg"
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
            disabled={isControlsDisabled}
            className="h-10 min-w-[2.5rem] bg-secondary hover:bg-secondary-dark disabled:bg-gray-700 transition-all rounded-lg"
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
