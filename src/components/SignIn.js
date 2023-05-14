"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Skeleton from "@mui/material/Skeleton";
import Cookies from "js-cookie";
const SignIn = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      setUser(cookieUser);
    }
    setLoading(false);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (input) => {
    setError(false);
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
      cache: "no-store",
    });
    const data = await res.json();
    const matchedUser = data.find((e) => e.email === input.email);
    if (matchedUser) {
      setUser(matchedUser.email);
      Cookies.set("user", matchedUser.email, { expires: 7 });
    } else {
      setError(true);
    }
  };
  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };
  return (
    <>
      <div className="sign-in">
        {!user && (
          <div className="form">
            {loading ? (
              <div className="skeleton-container">
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "25px" }}
                  width={110}
                  height={34}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "25px" }}
                  width={360}
                  height={33}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "25px" }}
                  width={360}
                  height={33}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ borderRadius: "25px" }}
                  width={96}
                  height={34}
                />
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <input
                  placeholder="Email"
                  {...register("email", {
                    validate: (value) => value.length > 3,
                  })}
                />
                {errors.email && (
                  <p className="error">
                    Your user name should be more then 3 characters
                  </p>
                )}
                {error && (
                  <p className="error">Your have entered wrong email.</p>
                )}

                <input
                  placeholder="Password"
                  {...register("password", {
                    validate: (value) => value == "123456789",
                  })}
                />
                {errors.password && (
                  <p className="error">Your have entered wrong password.</p>
                )}

                <input className="btn-primary" type="submit" />
              </form>
            )}
          </div>
        )}
        {user && (
          <div className="user">
            <h1>
              Logged In As <span>{user}</span>
            </h1>
            <button onClick={logout} className="btn-primary logout-btn">
              Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SignIn;
