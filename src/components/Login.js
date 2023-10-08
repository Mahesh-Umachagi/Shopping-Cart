import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (formData) => {
      auth.login(formData.username);
      navigate('/');
  };

  return (
    <>
    {/* If User Presnent Welcom Messagae and Logout Button */}
      {auth.user ? (
        <div className="flex items-center justify-center">
          <div className="p-8 rounded shadow-lg max-w-md w-full mt-3 bg-slate-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              User Profile
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-center">
                Welcome: {auth.user}
              </h3>
            </div>
            <div className="text-center">
              <button
                className="bg-red-400 pt-4 pb-4 pl-8 pr-8 m-3 rounded-md text-white mt-auto font-medium"
                onClick={() => {
                  auth.logout();
                  navigate('/');
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        // If no user logged in user Login form
        <div className="flex items-center justify-center">
          <div className="p-8 rounded shadow-lg max-w-md w-full mt-3 bg-slate-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              User Login
            </h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="text-center">
                <input
                  placeholder="username"
                  {...register("username")}
                  className="h-10 rounded-md border border-slate-300 p-3 m-3 bg-transparent outline-blue-600 shadow-sm text-lg"
                />
              </div>
              <div className="text-center">
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                  className="h-10 rounded-md border border-slate-300 p-3 m-3 bg-transparent outline-blue-600 shadow-sm text-lg"
                />
              </div>
              <div className="text-center m-3">
                <button
                  type="submit"
                  className="bg-green-500 pt-4 pb-4 pl-8 pr-8 m-3 rounded-md text-white mt-auto font-medium"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
