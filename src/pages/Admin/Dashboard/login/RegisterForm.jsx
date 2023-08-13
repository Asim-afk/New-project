/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { register } from "../../../../Apis/TestApi";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(register);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await mutation.mutateAsync({
        userName: username,
        password,
      });
      alert(result);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
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
          Register User
        </button>
      </form>
    </>
  );
}
