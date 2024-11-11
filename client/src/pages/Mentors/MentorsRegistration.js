// src/pages/MentorRegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MentorRegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Логика для отправки данных регистрации в API
        // Указываем роль наставника при создании пользователя

        // После успешной регистрации перенаправляем на страницу входа
        navigate('/login');
    };

    return (
        <div>
            <h2>Регистрация наставника</h2>
            <label>Логин:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Пароль:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};

export default MentorRegistrationPage;
