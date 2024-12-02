"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginUser } from "@/redux/action/user";
import { ArrowRight } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Add these icons
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const { isAuth, btnLoading } = useSelector((state) => state.user);

  if (isAuth) return redirect("/");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  return (
    <div className="mt-20 md:mt-5 z-0">
      <div className="md:w-1/3 border border-gray-400 rounded-lg p-8 flex flex-col w-full relative shadow-md m-auto">
        <h2 className="mb-1">
          <span className="text-3xl">Login to </span>
          <span className="text-3xl">Hire</span>
          <span className="text-3xl text-red-500">pro</span>
        </h2>

        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-between mt-3"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5 ml-1">
            <Label className="mt-2">Email</Label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-2"
            />
            <Label className="mt-2">Password</Label>
            <div className="relative mb-2">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <Button
              disabled={btnLoading}
              className="flex justify-center items-center gap-2"
            >
              Submit <ArrowRight size={18} />
            </Button>
          </div>
        </form>
        <Link
          className="mt-2 text-blue-500 underline text-sm ml-2"
          href={"/register"}
        >
          don't have an account?
        </Link>
        <Link
          className="mt-2 text-blue-500 underline text-sm ml-2"
          href={"/forgot"}
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
