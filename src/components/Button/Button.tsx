import styles from './Button.module.css';

export default function Button({ text, onClickHandler, style, disabled, className, type }: {
    text: string;
    onClickHandler: () => void,
    style?: any,
    disabled?: boolean,
    className?: string,
    type?: 'submit' | 'reset' | 'button' | undefined,
}) {
    return (
        <button disabled={disabled} type={type} className={`${styles.bannerButton} ${className}`}
                onClick={() => onClickHandler()}
                style={style}>{text}</button>
    );
}