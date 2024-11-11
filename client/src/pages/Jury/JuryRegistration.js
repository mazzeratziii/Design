import React, { useState } from "react";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    // Отправка данных пользователя в базу данных
    await registerUserInDatabase({
      fullName,
      email,
      password,
      organization,
      phone,
    });

    alert("Регистрация прошла успешно!");
  };

  return (
    <div>
      <h2>Регистрация нового пользователя</h2>
      <form onSubmit={handleRegister}>
        <label>ФИО</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Организация</label>
        <input
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <label>Телефон</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Подтвердите пароль</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

// Функция для регистрации пользователя в базе данных (имитация)
const registerUserInDatabase = async (userData) => {
  // Здесь должен быть реальный запрос к базе данных для регистрации пользователя
  console.log("Регистрация пользователя:", userData);
};

export default RegisterPage;
