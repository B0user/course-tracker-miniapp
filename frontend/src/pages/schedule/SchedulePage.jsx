import { useState } from 'react';
import './style.css';

export default function Schedule() {
    const [week, setWeek] = useState([
        {
            event: 'Вводный урок',
            course: 'Английский язык',
            duration: 60,
            start: '13:00',
            end: '14:00'
        },
        {
            event: 'Урок #1',
            course: 'Английский язык',
            duration: 60,
            start: '13:00',
            end: '14:00'
        },
        { event: 'Разговорная практика', course: 'Английский язык', duration: 90, start: '10:30', end: '12:00' },
        { event: 'Грамматика', course: 'Английский язык', duration: 60, start: '15:00', end: '16:00' },
        { event: 'Словарный запас', course: 'Английский язык', duration: 45, start: '17:15', end: '18:00' },
        { event: 'Подготовка к IELTS', course: 'Английский язык', duration: 60, start: '19:00', end: '20:00' }
    ]);

    return (
        <div className='schedule-page'>
            <div className='schedule-header'>
                <h2>Расписание на неделю</h2>
                <div className='schedule-week-nav'>
                    <button className='nav-btn'>&lt;</button>
                    <span className='week-label'>10 — 16 июня</span>
                    <button className='nav-btn'>&gt;</button>
                </div>
            </div>

            <div className='schedule-grid'>
                {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map((day) => (
                    <div className='schedule-day' key={day}>
                        <div className='schedule-day-header'>{day}</div>
                        <div className='schedule-day-list'>
                            {week.map((lesson, idx) => (
                                <div className='schedule-event' key={idx}>
                                    <div className='event-time'>{lesson.start} — {lesson.end}</div>
                                    <div className='event-meta'>
                                        <div className='event-title'>{lesson.event}</div>
                                        <div className='event-course'>{lesson.course}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}