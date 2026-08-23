import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const { loading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/Login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="h-16"></div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 flex justify-center">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-[90%] md:w-1/2 border-2 border-gray-200 rounded-md p-4 sm:p-6 my-6 sm:my-10"
        >
          <h1 className="font-bold text-xl mb-5">
            Sign Up
          </h1>

          {/* Full Name */}
          <div className="my-3">
            <Label className="my-1 block">
              Full Name
            </Label>

            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter Your Name"
              className="w-full"
            />
          </div>

          {/* Email */}
          <div className="my-3">
            <Label className="my-1 block">
              Email
            </Label>

            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="raghu@gmail.com"
              className="w-full"
            />
          </div>

          {/* Password */}
          <div className="my-3">
            <Label className="my-1 block">
              Password
            </Label>

            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Password"
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="my-3">
            <Label className="my-1 block">
              Phone No
            </Label>

            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="XXXXXXXX60"
              className="w-full"
            />
          </div>

          {/* Role + Profile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">

            {/* Role */}
            <RadioGroup className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />

                <Label htmlFor="r1">
                  Student
                </Label>
              </div>

              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />

                <Label htmlFor="r2">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>

            {/* Profile */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
              <Label>
                Profile
              </Label>

              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-4 p-5 bg-black hover:bg-gray-800 text-white"
            >
              Sign Up
            </Button>
          )}

          {/* Login Link */}
          <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;