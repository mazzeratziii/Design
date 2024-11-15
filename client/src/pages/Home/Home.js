// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Созвездие Талантов</h1>
        <nav>
          <ul>
            <li><a href="#">Участники</a></li>
            <li><a href="#">Наставники</a></li>
            <li><a href="#">Волонтеры</a></li>
            <li><a href="#">Жюри</a></li>
            <li><a href="#">Новости</a></li>
          </ul>
        </nav>
      </header>

      <section className="contest-info">
        <div className="main-image">
          <img src="path_to_main_image.jpg" alt="Конкурс"/>
          <h2>Информация о конкурсе</h2>
          <p>Открылся всероссийский конкурс талантов! Примите участие и покажите свои способности на всей стране!</p>
        </div>
        
        <section className="gallery">
          <h3>Фото прошлых лет</h3>
          <div className="gallery-grid">
            <img src="path_to_photo1.jpg" alt="Фото 1"/>
            <img src="path_to_photo2.jpg" alt="Фото 2"/>
            <img src="path_to_photo3.jpg" alt="Фото 3"/>
          </div>
        </section>

        <div className="registration">
          <button>Регистрация</button>
        </div>

        <section className="registration-info">
          <h3>Информация о регистрации</h3>
          <p>Для участия в конкурсе необходимо зарегистрироваться. Сроки регистрации и условия можно узнать ниже.</p>
        </section>
      </section>

      <footer>
        <div className="footer-content">
          <p>Контакты: Адрес, Телефон</p>
          <div className="social-links">
            <a href="#">VK</a> | <a href="#">Instagram</a> | <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
