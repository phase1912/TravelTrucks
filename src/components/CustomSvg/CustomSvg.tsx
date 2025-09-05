export function CustomSvg({ width, height, spriteUrl, label, className, fill, style }: {
    width: number,
    height: number,
    spriteUrl: string,
    label?: string,
    className?: string,
    fill?: string,
    style?: any,
}) {
    return (
        <svg className={className} aria-label={label} width={width} height={height} fill={fill} style={style}>
            <use href={spriteUrl}></use>
        </svg>
    );
} //TODO place base url for images.svg here