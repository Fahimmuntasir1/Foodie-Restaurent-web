import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="background h-screen text-[#2c2b4b]">
      <div className="w-10/12 h-[700px] mx-auto flex items-center justify-center">
        <div className="rounded-md border w-full shadow-xl bg-[rgba(11,10,17,0.1)] backdrop-blur-[14px]">
          <div className="flex items-center justify-between p-10">
            <div className="card-left text-white">
              <h1 className="text-left font-bold text-5xl">Welcome Back</h1>
              <h1 className="text-left font-bold text-7xl">Login Now!</h1>
            </div>
            <div className="card-right">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-black">Email</span>
                  </label>
                  <input
                    type={"email"}
                    placeholder="Enter Email Here"
                    class="rounded-md p-2 bg-transparent border-none outline-double text-white w-full max-w-xs"
                    {...register("email", { required: true })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.email?.type === "required" && (
                        <p role="alert" className="text-red-500">
                          Email is required
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text text-black">Password</span>
                  </label>
                  <input
                    type={"password"}
                    placeholder="Enter Password Here"
                    class="rounded-md p-2 bg-transparent border-none outline-double text-white w-full max-w-xs"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <label class="label">
                    <span class="label-text-alt">
                      {errors.password?.type === "required" && (
                        <p role="alert" className="text-red-500">
                          Password is required
                        </p>
                      )}
                    </span>
                  </label>
                </div>
                <input
                  className="py-2 mb-2 cursor-pointer w-full rounded-md text-white bg-orange-400 hover:bg-transparent border-2 border-orange-400 hover:text-orange-400 transition-all duration-300"
                  type="submit"
                />
              </form>
              <p className="text-xs text-center">
                New in Doctor's Portal?
                <Link
                  to="/signup"
                  href="#"
                  className="label-text-alt link link-hover mx-3 text-secondary"
                >
                  Create new account
                </Link>
              </p>
              <div className="divider text-xs my-2">OR</div>
              <button className="btn btn-outline btn-accent">
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
