import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './styles.css'

import homeIcon from '../assets/icons/nav-home.svg'
import aboutIcon from '../assets/icons/nav-about.svg'
import homeworkIcon from '../assets/icons/nav-homework.svg'
import scheduleIcon from '../assets/icons/nav-schedule.svg'

export default function Navigation() {
    const [activePos, setActivePos] = useState(0);
    const navRef = useRef(null);

    const items = [
        { to: '/', icon: homeIcon, alt: 'home' },
        { to: '/about', icon: aboutIcon, alt: 'about' },
        { to: '/hw', icon: homeworkIcon, alt: 'homework' },
        { to: '/schedule', icon: scheduleIcon, alt: 'schedule' }
    ];

    useEffect(() => {
        const activeItem = navRef.current?.querySelector('.active-link');
        if (activeItem) {
            setActivePos(activeItem.offsetLeft);
        }
    }, []);

    return (
        <div className='navigation'>
            <div className='navigation-frame' ref={navRef}>

                <span
                    className="navigation-active-indicator"
                    style={{ transform: `translateX(${activePos}px)` }}
                />

                {items.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => `navigation-item ${isActive ? 'active-link' : ''}`}
                        onClick={(e) => {
                            setActivePos(e.currentTarget.offsetLeft);
                        }}
                    >
                        <img src={item.icon} width={25} height={25} alt={item.alt} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
