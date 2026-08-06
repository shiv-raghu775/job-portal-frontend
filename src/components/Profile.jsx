import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

const skills= ["html","css","Javascript","Reactjs"]
const Profile = () => {
  const isResume =true;
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pinimg.com/736x/db/4b/bd/db4bbdb49d44d22ec2ecc467a77c8182.jpg  " />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quod placeat fugit!
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>arun@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>6235654565</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-2">
            {
               skills.length !==0 ?skills.map((item, index) => <Badge key={index} variant="outline" className="rounded-full shadow-xl ">{item}</Badge>):<span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
              isResume? <a target="blank" href="https://drive.google.com/file/d/10IGQk-8FkfMK5uBswAW002L6gJK89el7/view?usp=drive_link" className="text-blue-800 w-full hover:underline cursor-pointer">resumeFile_555</a>: <span>NA</span>
          }
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
             <h1>Applied Jobs</h1>
             {/* applied job */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
