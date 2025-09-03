import styles from './Button.module.css';

export default function Button({ text, onClickHandler, style }: {
    text: string;
    onClickHandler: () => void,
    style?: any
}) {
    return (
        <button className={styles.bannerButton} onClick={() => onClickHandler()} style={style}>{text}</button>
    );
}