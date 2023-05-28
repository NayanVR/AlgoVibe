import { Animation, AnimationArray } from "../types/sorting-algo";

export default function getInsertionSortAnimations(arr: number[]): AnimationArray {

    let animations: AnimationArray = [];

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j > 0; j--) {

            let animation: Animation = { comparison: [], swap: false };
            animation.comparison = [j, j - 1]

            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                animation.swap = true
            } else {
                animation.swap = false
            }
            animations.push(animation)
        }
    }
    return animations;
}