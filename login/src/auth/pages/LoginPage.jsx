// import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const onRegister = async (e) => {
    e.preventDefault();

    const registerData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("http://192.168.129.72:5036/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    const data = await res.json();
    console.log(data);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("http://192.168.129.72:5036/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    console.log(data);

    if (data) {
      setIsLogin(true);
    }

    console.log(isLogin);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onLogin} className="form-login">
        <div className="title">
          login
          <br />
          <span>sign up to continue</span>setIsLogin
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
        />

        <button className="button-confirm">logIn</button>

        {isLogin ? "logeado uwu" : "no logeado"}
      </form>

      <br />
      <br />

      <form onSubmit={onRegister} className="form-login">
        <div className="title">
          register
          <br />
          <span>sign up to continue</span>
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input"
        />

        <button className="button-confirm">logIn</button>
      </form>
    </div>
  );
};
