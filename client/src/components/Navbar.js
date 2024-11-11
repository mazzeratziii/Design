// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/participants">Участникам</Link>
      <Link to="/mentors">Наставникам</Link>
      <Link to="/jury">Жюри</Link>
      <Link to="/volunteers">Волонтеры</Link>
      <Link to="/news">Новости</Link>
    </nav>
  );
};

export default Navbar;
