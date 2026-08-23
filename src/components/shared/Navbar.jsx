import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("Redux User:", user);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="flex items-center gap-1 sm:gap-2 justify-between px-2 sm:px-4 py-2">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
            <Link to="/">
              {" "}
              Job<span className="text-[#F83002]">Portal</span>
            </Link>
          </h1>
        </div>

        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-2 font-medium text-xs whitespace-nowrap">
            {user && user.role === "recruiter" ? (
              <>
                <motion.li
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/admin/companies" className="whitespace-nowrap">
                    Companies
                  </Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/admin/jobs" className="whitespace-nowrap">
                    Jobs
                  </Link>
                </motion.li>
              </>
            ) : (
              <>
                <motion.li
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/" className="whitespace-nowrap">Home</Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/jobs"className="whitespace-nowrap">Jobs</Link>
                </motion.li>
                <motion.li
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link to="/browse" className="whitespace-nowrap">Browse</Link>
                </motion.li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <Link to="/Login">
                <Button variant="outline" 
                className="h-8 px-2 sm:px-3 text-xs sm:text-sm"
                >Login</Button>
              </Link>
              <Link to="/Signup">
                <Button className="bg-[#692dcf] hover:bg-[#45119fe4] text-white h-8 px-2 sm:px-3 text-xs sm:text-sm">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="cursor-pointer"
                >
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </motion.div>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white">
                <div className="flex gap-4 space-y-1">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-500">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex  items-center text-gray-600">
                      <User2 />
                      <Link to="/profile">
                        <Button variant="link">View Profile</Button>
                      </Link>
                    </div>
                  )}

                  <div className="flex items-center my-2 text-gray-600">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
