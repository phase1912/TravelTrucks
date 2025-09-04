import styles from './Button.module.css';

export default function Button({ text, onClickHandler, style, disabled, className }: {
    text: string;
    onClickHandler: () => void,
    style?: any,
    disabled?: boolean,
    className?: string,
}) {
    return (
        <button disabled={disabled} className={`${styles.bannerButton} ${className}`} onClick={() => onClickHandler()}
                style={style}>{text}</button>
    );
}