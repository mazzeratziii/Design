// pages/Mentors/MentorsMain.js
import React from 'react';
import { Link } from 'react-router-dom';

const MentorsMain = () => {
  return (
    <div>
      <h1>Страница для наставников</h1>
      <Link to="/mentors/registration">Регистрация наставника</Link>
      <Link to="/mentors/login">Вход в личный кабинет</Link>
    </div>
  );
};

export default MentorsMain;
