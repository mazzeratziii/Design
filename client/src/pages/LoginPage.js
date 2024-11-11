// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [role, setRole] = useState('participant'); // Роль по умолчанию — "участник"
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Выполнить проверку пользователя через API
        // Предполагаем, что здесь идет проверка логина и пароля
        // После успешной авторизации направляем на страницу в зависимости от роли

        if (role === 'participant') {
            navigate('/participant-dashboard');
        } else if (role === 'mentor') {
            navigate('/mentor-dashboard');
        } else if (role === 'jury') {
            navigate('/jury-dashboard');
        } else if (role === 'volunteer') {
            navigate('/volunteer-dashboard');
        }
    };

    return (
        <div>
            <h2>Вход в личный кабинет</h2>
            <label>Роль:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="participant">Участник</option>
                <option value="mentor">Наставник</option>
                <option value="jury">Жюри</option>
                <option value="volunteer">Волонтер</option>
            </select>
            <label>Логин:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Пароль:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default LoginPage;
