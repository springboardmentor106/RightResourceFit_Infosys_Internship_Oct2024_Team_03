"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser } from "@/redux/action/user";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [resume, setResume] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [showPassword, setShowPassword] = useState(false);  // State for password toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password toggle

  const { isAuth, btnLoading } = useSelector((state) => state.user);

  if (isAuth) return redirect("/");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("role", role);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("confirmPassword", confirmPassword);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("profilePic", profilePic);

    if (role === "jobseeker") {
      formdata.append("bio", bio);
      formdata.append("resume", resume);
    }

    dispatch(registerUser(formdata));
  };

  return (
    <div className="mt-20 md:mt-5 z-0">
      <div className="md:w-1/3 border border-gray-400 rounded-lg p-8 flex flex-col w-full relative shadow-md m-auto">
        <h2 className="mb-1">
          <span className="text-3xl">Register to </span>
          <span className="text-3xl">Hire</span>
          <span className="text-3xl text-red-500">pro</span>
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-between mt-3"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5 ml-1">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="jobseeker">JobSeeker</option>
              <option value="recruiter">Recruiter</option>
            </select>

            {role && (
              <>
                <Label className="mt-2">Name</Label>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mb-2"
                />

                <Label className="mt-2">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2"
                />

                <Label  className="mt-2">Password</Label>
                <div className="relative mb-2">
                  <Input
                    type={showPassword ? "text" : "password"}  // Toggle password visibility
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

                <Label className="mt-2">Confirm Password</Label>
                <div className="relative mb-2">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}  
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}  
                  </span>
                </div>

                <Label className="mt-2">PhoneNumber</Label>
                <Input
                  type="number"
                  placeholder="PhoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mb-2"
                />

                <Label className="mt-2">ProfilePic</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                  required
                  className="mb-2"
                />

                {role === "jobseeker" && (
                  <>
                    <Label className="mt-2">Resume</Label>
                    <Input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => setResume(e.target.files[0])}
                      className="mb-2"
                    />

                    <Label className="mt-2">Bio</Label>
                    <Input
                      type="text"
                      placeholder="Enter Bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="mb-2"
                    />
                  </>
                )}

                <Button
                  disabled={btnLoading}
                  className="flex justify-center items-center gap-2 mt-4"
                >
                  Submit <ArrowRight size={18} />
                </Button>
              </>
            )}
          </div>
        </form>
        <Link
          className="mt-2 text-blue-500 underline text-xs ml-2"
          href={"/login"}
        >
          Have an account?
        </Link>
      </div>
    </div>
  );
};

export default Register;
