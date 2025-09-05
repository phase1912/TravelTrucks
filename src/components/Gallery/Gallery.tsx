import styles from './Gallery.module.css';

export default function Gallery({ images = [] }: { images?: { thumb: string, original: string }[] }) {
    if (!images?.length) return null;
    return (
        <div className={styles.galleryFlex}>
            {images.map((img, i) => (
                <div className={styles.cardImageContainer} key={i}>
                    <img className={styles.cardImage} src={img.original} alt={`photo ${i + 1}`}/>
                </div>
            ))}
        </div>
    );
}
