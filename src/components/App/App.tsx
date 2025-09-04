import { NavLink, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import styles from './App.module.css';
import spriteUrl from '../../img/icons.svg?url';
import Home from '@/pages/Home/Home';
import Catalog from '@/pages/Catalog/Catalog';
import CamperDetails from '@/pages/CamperDetails/CamperDetails';

export default function App() {
    return (
        <div>
            <header className={styles.sticky}>
                <div className={`container ${styles.headerContainer}`}>
                    <NavLink to="/" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <svg width={136} height={16} aria-label="Logo">
                            <use href={`${spriteUrl}#icon-logo`}></use>
                        </svg>
                    </NavLink>
                    <nav className={styles.nav}>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                        <NavLink to="/catalog" className={({ isActive }) => isActive ? 'active' : ''}>Catalog</NavLink>
                    </nav>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:id" element={<CamperDetails/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </div>
    );
}
