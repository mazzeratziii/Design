// pages/Participants/ParticipantsMain.js
import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantsMain = () => {
  return (
    <div>
      <h1>Страница для участников</h1>
      <Link to="/participants/application">Заполнение заявки</Link>
      <Link to="/participants/dashboard">Личный кабинет</Link>
    </div>
  );
};

export default ParticipantsMain;
