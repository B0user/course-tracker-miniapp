import './style.css';
import { CATEGORIES } from "../../constants.js";
import DefaultProfilePic from '../../assets/images/shared/user-avatar-default.svg'
import { useState } from 'react';

import MockCourse1 from '../../assets/images/home/mock/english.webp';
import MockCourse2 from '../../assets/images/home/mock/IELTS.png'

export default function Home() {
  const [courses, setCourses] = useState([
    {
      name: 'Английский 1', 
      img: MockCourse1, 
      desc: 'Описание курса. Тут будет какой-нибудь текст'
    },
    {
      name: 'Подготовка к IELTS', 
      img: MockCourse2, 
      desc: 'Описание курса. Тут будет какой-нибудь текст'
    },
    {
      name: 'Английский 1', 
      img: MockCourse1, 
      desc: 'Описание курса. Тут будет какой-нибудь текст'
    },
    {
      name: 'Подготовка к IELTS', 
      img: MockCourse2, 
      desc: 'Описание курса. Тут будет какой-нибудь текст'
    }
  ]);

  return (
      <div className="home-page">

        <div className='home-header'>
          <p>Привет, Адиль!</p>
          <div className='home-profile'>
            <img className='home-profile-pic' width={35} height={35} src={DefaultProfilePic} />
          </div>
        </div>

        <div className="home-search">
          <p>Подбери себе курс</p>
          <input className="search-bar" placeholder='Название курса'/>
        </div>
        
        <div className='home-cats'>
          <p>Категории</p>
          <div className='home-cats-slider'>
            {
              CATEGORIES.map(
                (item) => 
                  <div className='home-cats-slider-item'>
                      {item}
                  </div>
              )
            }
          </div>
        </div>

        <div className='home-courses'>
          <p className='home-courses-title'>Курсы</p>
          <div className='home-course-list'>
            {
              courses?.map(
                (item) => 
                  <div className='home-course-list-item'>
                    <img src={item.img} height={120}/>
                    <div className='home-course-list-item-text'>
                      <p className='home-course-list-item-text-name'>{item.name}</p>
                      <p className='home-course-list-item-text-desc'>{item.desc}</p>
                    </div>
                  </div>
              )              
            }
          </div>
        </div>

      </div>
  );
}
