export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function calculateArrayBarWidth(gap: number, length: number, clientWidth: number): number {
    const gutter = gap * (length - 1);
    const totalWidth = clientWidth < 600 ? clientWidth - 16 : (2 * clientWidth) / 3;
    const barWidth = (totalWidth - gutter) / length;
    return barWidth;
}