import { Animation } from "@/lib/types/sorting-algo";

export function visualize(animation: Animation, barOne: HTMLDivElement, barTwo: HTMLDivElement, interval: number) {

    const barOneStyle = barOne.style;
    const barTwoStyle = barTwo.style;

    barOneStyle.backgroundColor = "#FFC700";
    barTwoStyle.backgroundColor = "#FFC700";

    setTimeout(() => {
        if (animation.swap) {
            const tempHeight = barOneStyle.height;
            const tempText = barOne.innerText;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
            barOne.innerText = barTwo.innerText;
            barTwo.innerText = tempText;
        }
        barOneStyle.backgroundColor = "#2667FF";
        barTwoStyle.backgroundColor = "#2667FF";
    }, interval * 0.8);
}