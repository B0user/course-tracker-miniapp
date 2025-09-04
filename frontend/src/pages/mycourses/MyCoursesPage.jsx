import './style.css';

import { CATEGORIES } from "../../constants.js";

import DefaultProfilePic from '../../assets/images/shared/user-avatar-default.svg'
import { useState } from 'react';

import MockCourse1 from '../../assets/images/mycourses/mock/english-mycourses.jpg';
import MockCourse2 from '../../assets/images/mycourses/mock/espanol-mycourses.jpeg';

export default function MyCourses() {
    const [mycourses, setMyCourses] = useState(
        [
            {
                name: 'Английский язык',
                desc: 'Коротко про этот курс',
                progress: 80,
                img: MockCourse1,
            },
            {
                name: 'Испанский язык',
                desc: 'Коротко про этот курс',
                progress: 50,
                img: MockCourse2,
            },
            {
                name: 'Английский язык 2',
                desc: 'Коротко про этот курс',
                progress: 63,
                img: MockCourse1,
            },
            {
                name: 'Испанский язык 2',
                desc: 'Коротко про этот курс',
                progress: 50,
                img: MockCourse2,
            },
            {
                name: 'Английский язык 3',
                desc: 'Коротко про этот курс',
                progress: 0,
                img: MockCourse1,
            },
            {
                name: 'Испанский язык 3',
                desc: 'Коротко про этот курс',
                progress: 10,
                img: MockCourse2,
            },
            {
                name: 'Английский язык 4',
                desc: 'Коротко про этот курс',
                progress: 85,
                img: MockCourse1,
            },
            {
                name: 'Испанский язык 4 ',
                desc: 'Коротко про этот курс',
                progress: 59,
                img: MockCourse2,
            },
        ]
    )

  return (
      <div className='mycourses-page'>
        <div className='mycourses-header'>
          <h1>Мои курсы</h1>
          <p>Отслеживайте свой прогресс в обучении</p>
        </div>

        <div className='mycourses-cats'>
          <h2>Фильтр по категориям</h2>
          <div className='mycourses-cats-grid'>
            {
              CATEGORIES.map(
                (item, index) => 
                  <div className='mycourses-cats-item' key={index}>
                      {item}
                  </div>
              )
            }
          </div>
        </div>
        
        <div className='mycourses-hero-block'>
            <h2>Английский язык</h2>
            <p>Продолжайте обучение</p>
        </div>

        <div className='mycourses-course-list'>
            {
                mycourses.map(
                    (item, index) => 
                        <div className='mycourses-course-list-item' key={index}>
                            <div className='course-image'>
                                <img src={item.img} alt={item.name}/>
                            </div>
                            <div className='mycourses-course-list-item-text'>
                                <h3>{item.name}</h3>
                                <p>{item.desc}</p>
                                <div className='progress-container'>
                                    <div className='progress-bar' style={{width: `${item.progress}%`}}></div>
                                    <span className='progress-text'>{item.progress}%</span>
                                </div>
                            </div>
                        </div>
                )
            }
        </div>    
            
      </div>
  );
}
