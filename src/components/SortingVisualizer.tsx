import {
  calculateArrayBarWidth,
  getAnimations,
  randomArray,
} from "@/util/functions";
import { visualize } from "@/util/visualization";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type Props = {
  length: number;
  algo: string;
  allAlgos: { [key: string]: string };
  toggleControls: (value: boolean) => void;
};

const clientHeight: number = document.documentElement.clientHeight;
const clientWidth: number = document.documentElement.clientWidth;

const BAR_MIN_HEIGHT: number = 25;
const BAR_MAX_HEIGHT: number = (2 * clientHeight) / 3;

const totalWidth = clientWidth < 600 ? clientWidth - 16 : (2 * clientWidth) / 3;

export const SortingVisualizer = forwardRef(
  ({ length, algo, allAlgos, toggleControls }: Props, ref) => {
    const [array, setArray] = useState<number[]>([]);

    const arrayElements = useRef<HTMLDivElement[]>([]);

    const widthOfBar = calculateArrayBarWidth(8, length, totalWidth);

    useEffect(() => {
      setArray(randomArray(length, BAR_MIN_HEIGHT, BAR_MAX_HEIGHT));
      return () => setArray([]);
    }, [length]);

    useEffect(() => {
      arrayElements.current = Array.from(
        document.getElementsByClassName("array-bar")
      ) as HTMLDivElement[];
    }, [array]);

    const animations = getAnimations(algo, allAlgos, array);
    let animIndex: number = 0;

    const isActive = useRef<boolean>(true);
    const previousTimeRef = useRef<number>();
    let interval = 100;

    function animate(time: number) {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time;
      }

      let elapsed = time - previousTimeRef.current!;
      if (elapsed > interval) {
        previousTimeRef.current = time - (elapsed % interval);
        // i will put updated interval here

        const animation = animations[animIndex];
        const [i, j] = animation.comparison;
        const barOne = arrayElements.current[i];
        const barTwo = arrayElements.current[j];

        visualize(animation, barOne, barTwo, interval);

        animIndex++;
        if (animIndex === animations.length) {
          toggleControls(false);
          resetArray();
          return;
        }
      }

      isActive.current && requestAnimationFrame(animate);
    }

    function killAnimation(): void {
      isActive.current = false;
      animIndex = 0;
      // setTimeout becuase we need to wait for the last animation to finish
      setTimeout(() => {
        const newArr = arrayElements.current.map((bar) =>
          parseInt(bar.style.height)
        );
        setArray(newArr);
      }, interval);
    }

    function resetArray(): void {
      isActive.current = false;
      // setTimeout becuase we need to wait for the last animation to finish
      setTimeout(() => {
        const newArr = arrayElements.current.map((bar) =>
          parseInt(bar.style.height)
        );
        setArray(newArr);
      }, interval);
    }

    useImperativeHandle(ref, () => ({
      startClick() {
        isActive.current = true;
        if (animations.length !== 0) {
          requestAnimationFrame(animate);
        } else {
          toggleControls(false);
        }
      },
      killClick() {
        killAnimation();
      },
    }));

    return (
      <div className="flex h-full flex-col justify-end">
        <div
          className="flex gap-2 items-end"
          style={{ width: `${totalWidth}px` }}
        >
          {array.map((number, index) => {
            return (
              <div
                className="array-bar bg-primary text-center font-text text-white rounded-md transition-all"
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
        <div
          onClick={(_) => {
            requestAnimationFrame(animate);
          }}
          className="w-full h-4 bg-primary-dark rounded-sm"
        ></div>
      </div>
    );
  }
);
