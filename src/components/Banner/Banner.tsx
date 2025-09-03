import { useNavigate } from 'react-router-dom';
import styles from './Banner.module.css';
import Button from '@/components/Button/Button';

export default function Banner() {
    const navigate = useNavigate();
    return (
        <section className={styles.heroSection}>
            <div className={`container ${styles.bannerContainer}`}>
                <h1 className={styles.bannerTitle}>Campers of your dreams</h1>
                <p className={styles.bannerText}>You can find everything you want in our catalog</p>
                <Button text={'view now'} onClickHandler={() => navigate('/catalog')}/>
            </div>
        </section>
    );
}
