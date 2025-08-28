import './style.css';

export default function InfoPage() {
    return (
        <div className='info-page'>
            <div className='info-header'>
                <h1>О приложении</h1>
                <p>Ваш помощник в изучении языков</p>
            </div>

            <div className='info-content'>
                <div className='info-section'>
                    <h2>Возможности</h2>
                    <div className='info-features'>
                        <div className='feature-item'>
                            <div className='feature-icon'>📚</div>
                            <div className='feature-text'>
                                <h3>Курсы</h3>
                                <p>Доступ к различным языковым курсам</p>
                            </div>
                        </div>
                        
                        <div className='feature-item'>
                            <div className='feature-icon'>📅</div>
                            <div className='feature-text'>
                                <h3>Расписание</h3>
                                <p>Планирование и отслеживание занятий</p>
                            </div>
                        </div>
                        
                        <div className='feature-item'>
                            <div className='feature-icon'>📊</div>
                            <div className='feature-text'>
                                <h3>Прогресс</h3>
                                <p>Мониторинг вашего обучения</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='info-section'>
                    <h2>Контакты</h2>
                    <div className='contact-info'>
                        <div className='contact-item'>
                            <span className='contact-label'>Email:</span>
                            <span className='contact-value'>support@coursetracker.com</span>
                        </div>
                        <div className='contact-item'>
                            <span className='contact-label'>Телефон:</span>
                            <span className='contact-value'>+7 (999) 123-45-67</span>
                        </div>
                    </div>
                </div>

                <div className='info-section'>
                    <h2>Версия</h2>
                    <p className='version-info'>v1.0.0</p>
                </div>
            </div>
        </div>
    );
}
