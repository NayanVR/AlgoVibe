import getBubbleSortAnimations from "@/lib/sorting-algos/BubbleSort";
import { AnimationArray } from "@/lib/types/sorting-algo";

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function calculateArrayBarWidth(gap: number, length: number, totalWidth: number): number {
    const gutter = gap * (length - 1);
    const barWidth = (totalWidth - gutter) / length;
    return barWidth;
}

export function randomArray(length: number, min: number, max: number): number[] {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(randomInt(min, max));
    }
    return arr;
}

export function getAnimations(algo: string, allAlgos: any, array: number[]): AnimationArray {
    switch (algo) {
        case allAlgos.bubbleSort:
            return getBubbleSortAnimations([...array]);
        default:
            return [];
    }
}