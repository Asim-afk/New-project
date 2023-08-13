/* eslint-disable react/prop-types */
// import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
// import { user } from "../Apis/TestApi";

function PrivateRoute({ Component }) {
  const tokenString = localStorage.getItem("token");
  const isLoggedIn = !!tokenString;
  // const { data, error } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: user,
  // });
  // if (data) {
  //   localStorage.setItem("user", data);
  // }
  // if (error) {
  //   console.log(error);
  // }
  const isAuthenticated = isLoggedIn;
  return isAuthenticated ? Component : <Navigate to="/login" />;
}

export default PrivateRoute;
