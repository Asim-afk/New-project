/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../Apis/TestApi";
import "./login.css";

export default function Login() {
  const tokenString = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation(login);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await mutation.mutateAsync({
        userName: username,
        password,
      });
      localStorage.setItem("token", result.access_token);
      localStorage.setItem("user", result.user);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  useEffect(() => {
    if (tokenString) {
      navigate("/admin");
    }
  }, []);
  localStorage.setItem("token","ajshdhagdjafdufk")
  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button-17" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
