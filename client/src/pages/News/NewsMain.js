import React from 'react';
import './NewsMain.css';
import newsData from '../data/News.json';

const NewsMain = () => {
    return (
        <div className="news-page">
            <header className="news-page-header">
                <h1>Новости</h1>
            </header>
            {newsData.map((section, index) => (
                <div key={index} className="news-section">
                    <h2>{section.category}</h2>
                    <div className="news-cards">
                        {section.items.map((item, index) => (
                            <div key={index} className="news-card">
                                <img src={item.image} alt={item.title} />
                                <div className="news-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <span className="news-date">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <footer className="news-footer">
                <div className="footer-content">
                    <p>Созвездие талантов</p>
                    <p>Контакты: Адрес, Телефон</p>
                    <div className="social-links">
                        <a href="#">VK</a> | <a href="#">Instagram</a> | <a href="#">Facebook</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NewsMain;