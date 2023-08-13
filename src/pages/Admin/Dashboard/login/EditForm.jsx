/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { edit } from "../../../../Apis/TestApi";
export default function EditForm({ id, setOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation(edit);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await mutation.mutateAsync({
        userName: username,
        password,
        id,
      });
      alert(result);
      setOpen(false);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    setUsername(id.userName);
  }, []);
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
          Edit
        </button>
      </form>
    </>
  );
}
