export function CustomSvg({ width, height, spriteUrl, label, className, fill }: {
    width: number,
    height: number,
    spriteUrl: string,
    label?: string,
    className?: string,
    fill?: string,
}) {
    return (
        <svg className={className} aria-label={label} width={width} height={height} fill={fill}>
            <use href={spriteUrl}></use>
        </svg>
    );
} //TODO place base url for images.svg here