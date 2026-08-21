import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { Dialog, DialogContent } from "./ui/dialog";


const isResume =true;
const Profile = () => {
  useGetAppliedJobs();
  const [open,setOpen]= useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);
  const {user} = useSelector(store=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="h-16"></div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24 cursor-pointer"
                    onClick={() => setOpenPhoto(true)}
                 >
              <AvatarImage src={user?.profile?.profilePhoto} />
            </Avatar>
             <Dialog open={openPhoto} onOpenChange={setOpenPhoto}>
               <DialogContent className="max-w-md p-2">
                  <div className="flex justify-center items-center">
                    <img
                      src={user?.profile?.profilePhoto}
                      alt="Profile"
                      className="w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  </div>
               </DialogContent>
             </Dialog>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline" onClick={()=> setOpen(true)}><Pen /></Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-2">
            {
               user?.profile?.skills.length !==0 ?user?.profile?.skills.map((item, index) => <Badge key={index} variant="outline" className="rounded-full shadow-xl ">{item}</Badge>):<span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {
              isResume? <a target="blank" href={user?.profile?.resume} className="text-blue-800 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a>: <span>NA</span>
          }
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
             <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
             {/* applied job */} 
             <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
};

export default Profile;
