import { useEffect } from 'react';
import { clearToast } from '@/redux/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Toast() {
    const toast = useAppSelector(s => s.ui.toast);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!toast) return;
        const t = setTimeout(() => dispatch(clearToast()), 2500);
        return () => clearTimeout(t);
    }, [toast, dispatch]);
    if (!toast) return null;
    return <div className="toast" role="status">{toast.message}</div>;
}
