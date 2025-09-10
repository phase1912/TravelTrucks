import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import spriteUrl from '../../img/icons.svg?url';
import { lazy, Suspense } from 'react';
import Loader from '@/components/Loader';

export default function App() { // TODO - refactor this 
    const Home = lazy(() => import('@/pages/Home/Home'));
    const Catalog = lazy(() => import('@/pages/Catalog/Catalog'));
    const CamperDetails = lazy(() => import('@/pages/CamperDetails/CamperDetails'));
    const NotFoundPage = lazy(() => import('@/pages/NotFound'));

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
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/catalog/:id" element={<CamperDetails/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
}
