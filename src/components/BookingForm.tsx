import { FormEvent, useState } from 'react';
import { showToast } from '@/redux/slices/uiSlice';
import { useAppDispatch } from '@/redux/hooks';

export default function BookingForm({ camperName }: { camperName: string }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState('');
    const dispatch = useAppDispatch();

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (!name || !email || !date) {
            dispatch(showToast({ type: 'error', message: 'Please fill in name, email and date' }));
            return;
        }
        // Mock success (no POST endpoint required by the task)
        dispatch(showToast({ type: 'success', message: `Booking request sent for ${camperName}!` }));
        setName('');
        setEmail('');
        setDate('');
        setComment('');
    }

    return (
        <form onSubmit={onSubmit} className="card" style={{ padding: 16, display: 'grid', gap: 12 }}>
            <h3 style={{ margin: '0 0 8px' }}>Book this camper</h3>
            <input className="input" placeholder="Full name" value={name} onChange={e => setName(e.target.value)}/>
            <input className="input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input className="input" type="date" value={date} onChange={e => setDate(e.target.value)}/>
            <textarea className="input" rows={4} placeholder="Comment (optional)" value={comment}
                      onChange={e => setComment(e.target.value)}/>
            <button className="btn" type="submit">Send</button>
            <p className="sr-only" aria-live="polite">Submitting booking form</p>
        </form>
    );
}
