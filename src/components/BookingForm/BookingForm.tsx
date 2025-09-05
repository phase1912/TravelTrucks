import { FormEvent, useState } from 'react';
import { showToast } from '@/redux/slices/uiSlice';
import { useAppDispatch } from '@/redux/hooks';
import styles from './BookingForm.module.css';
import Button from '@/components/Button/Button';
import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import { format } from 'date-fns';

export default function BookingForm({ camperName, className }: { camperName: string, className?: string }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState<Date | null>(null);
    const [comment, setComment] = useState('');
    const dispatch = useAppDispatch();
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [dateFocused, setDateFocused] = useState(false);

    const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (!name || !email || !date) {
            dispatch(showToast({ type: 'error', message: 'Please fill in name, email and date' }));
            return;
        }

        dispatch(showToast({ type: 'success', message: `Booking request sent for ${camperName}!` }));
        setName('');
        setEmail('');
        setDate(null);
        setComment('');
    }

    return (
        <form className={className} onSubmit={onSubmit}>
            <div className={styles.headerContainer}>
                <h3 className={styles.header}>Book your campervan now</h3>
                <p className={styles.formDescription}>Stay connected! We are always ready to help you.</p>
            </div>
            <div className={styles.inputsWrapper}>
                <input className={styles.textInput}
                       placeholder={nameFocused ? 'Name' : 'Name*'} value={name}
                       onFocus={() => setNameFocused(true)}
                       onBlur={() => setNameFocused(false)}
                       onChange={e => setName(e.target.value)}/>
                <input className={styles.textInput}
                       value={email}
                       placeholder={emailFocused ? 'Email' : 'Email*'}
                       onFocus={() => setEmailFocused(true)}
                       onBlur={() => setEmailFocused(false)}
                       onChange={e => setEmail(e.target.value)}/>
                <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    onCalendarOpen={() => setDateFocused(true)}
                    onCalendarClose={() => setDateFocused(false)}
                    placeholderText={dateFocused ? 'Select a date between today' : 'Booking date*'}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    className={`${styles.textInput} ${styles.inputDate}`}
                    calendarClassName="myDatepicker"
                    popperClassName="myDatepickerPopper"
                    locale={enGB}                 // week starts on Monday
                    renderCustomHeader={({
                                             date,
                                             decreaseMonth,
                                             increaseMonth,
                                             prevMonthButtonDisabled,
                                             nextMonthButtonDisabled
                                         }) => (
                        <div className="dp-header">
                            <button type="button" className="dp-nav" onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled} aria-label="Previous month">‹
                            </button>
                            <div className="dp-title">{format(date, 'LLLL yyyy', { locale: enGB })}</div>
                            <button type="button" className="dp-nav" onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled} aria-label="Next month">›
                            </button>

                            <div className="dp-weekdays">
                                {WEEKDAYS.map((d) => (
                                    <span key={d} className="dp-weekday">{d}</span>
                                ))}
                            </div>
                        </div>
                    )}
                />
                <textarea className={styles.textInput} style={{ height: 200 }} rows={4} placeholder="Comment"
                          value={comment}
                          onChange={e => setComment(e.target.value)}/>
                <Button style={{ marginTop: 10 }} text={'Send'} type="submit" onClickHandler={() => {
                }}/>
            </div>
        </form>
    );
}
