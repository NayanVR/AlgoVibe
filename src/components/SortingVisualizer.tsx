import { calculateArrayBarWidth, randomInt } from "@/util/functions";
import React from "react";

type Props = {
  length: number;
};

const clientHeight = document.documentElement.clientHeight;
const clientWidth = document.documentElement.clientWidth;

export default function SortingVisualizer({ length }: Props) {
  const array = Array.from({ length }, () =>
    randomInt(25, (2 * clientHeight) / 3)
  );

  const widthOfBar = calculateArrayBarWidth(8, length, clientWidth);

  return (
    <div className="flex h-full flex-col justify-end">
      <div className="flex gap-2 items-end">
        {array.map((number, index) => {
          return (
            <div
              className="bg-primary text-center font-text text-white rounded-md"
              key={index}
              style={{
                height: `${number}px`,
                width: `${widthOfBar}px`,
              }}
            >
              {((clientWidth < 600 && length <= 8) ||
                (clientWidth >= 600 && length <= 20)) &&
                number}
            </div>
          );
        })}
      </div>
      <div className="w-full h-4 bg-primary-dark rounded-md"></div>
    </div>
  );
}
