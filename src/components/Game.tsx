"use client";

import { maze, calculateMove } from "@/util/maze";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Game() {
  const [playerXPos, setPlayerXPos] = useState<number>(1);
  const [playerYPos, setPlayerYPos] = useState<number>(0);

  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const rows = maze.length;
  const cols = maze[0].length;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerXPos, playerYPos]);

  function isGameWon(x: number, y: number) {
    return x === cols - 2 && y === rows - 1;
  }

  function handleKeyDown(e: KeyboardEvent) {
    const newPlayerPos = calculateMove(e.key, playerXPos, playerYPos);
    setPlayerXPos(newPlayerPos.x);
    setPlayerYPos(newPlayerPos.y);
    if (isGameWon(newPlayerPos.x, newPlayerPos.y)) {
      window.removeEventListener("keydown", handleKeyDown);
      setIsGameOver(true);
    }
  }

  return (
    <section className="hidden sm:block">
      <div
        className={`relative w-96 h-96 grid grid-cols-[repeat(21,1fr)] grid-rows-[repeat(21,1fr)]`}
      >
        <div
          style={{
            minHeight: `${100 / rows}%`,
            minWidth: `${100 / cols}%`,
            top: `${(playerYPos * 100) / rows}%`,
            left: `${(playerXPos * 100) / cols}%`,
          }}
          className="absolute bg-primary-dark transition-all"
        ></div>

        {maze.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <div
                className={`min-w-full min-h-full ${
                  cell ? "bg-tertiary" : "bg-white"
                }`}
                key={`${i}-${j}`}
              ></div>
            );
          });
        })}

        <div
          className={`bg-tertiary ${
            isGameOver ? "scale-1" : "scale-0"
          } absolute w-full h-full flex justify-center items-center transition-all duration-500`}
        >
          <Image
            src="/NayanVR-Logo.svg"
            alt="NayanVR Logo"
            width={150}
            height={150}
          />
        </div>

        <p className="absolute w-full h-max translate-y-6 bottom-0 text-center font-text text-gray-600">
          Use W, A, S, D to move 😎
        </p>
      </div>
    </section>
  );
}
