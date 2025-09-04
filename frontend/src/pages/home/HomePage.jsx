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
          <div className='home-greeting'>
            <h1>Привет, Адиль!</h1>
            <p>Добро пожаловать в мир изучения языков</p>
          </div>
          <div className='home-profile'>
            <img className='home-profile-pic' width={40} height={40} src={DefaultProfilePic} />
          </div>
        </div>

        <div className="home-search">
          <h2>Подбери себе курс</h2>
          <div className="search-container">
            <input className="search-bar" placeholder='Название курса'/>
          </div>
        </div>
        
        <div className='home-cats'>
          <h2>Категории</h2>
          <div className='home-cats-grid'>
            {
              CATEGORIES.map(
                (item, index) => 
                  <div className='home-cats-item' key={index}>
                      {item}
                  </div>
              )
            }
          </div>
        </div>

        <div className='home-courses'>
          <h2>Популярные курсы</h2>
          <div className='home-course-list'>
            {
              courses?.map(
                (item, index) => 
                  <div className='home-course-list-item' key={index}>
                    <div className='course-image'>
                      <img src={item.img} alt={item.name}/>
                    </div>
                    <div className='home-course-list-item-text'>
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
              )              
            }
          </div>
        </div>

      </div>
  );
}
