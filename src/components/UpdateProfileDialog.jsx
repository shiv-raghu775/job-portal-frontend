import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const UpdateProfileDialog = ({open,setOpen}) => {
    const [loading, setLoding] = useState(false);
  return (
    
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]" >
            <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <form >
                <div className='grid gap-4 py-4'>
                   <div className='grid grid-cols-4 items-center gap-4'>
                     <Label htmlFor="name">Name</Label>
                     <Input
                       id="name"
                       name="name"
                       className="col-span-3 border-black"
                     />
                   </div>
                   
                   <div className='grid grid-cols-4 items-center gap-4'>
                     <Label htmlFor="name">Email</Label>
                     <Input
                       id="email"
                       name=""
                       className="col-span-3 border-black"
                     />
                   </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                     <Label htmlFor="name">Number</Label>
                     <Input
                       id="number"
                       name="number"
                       className="col-span-3 border-black"
                     />
                   </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                     <Label htmlFor="name">Bio</Label>
                     <Input
                       id="bio"
                       name="bio"
                       className="col-span-3 border-black"
                     />
                   </div>
                   <div className='grid grid-cols-4 items-center gap-4'>
                     <Label htmlFor="name">Skills</Label>
                     <Input
                       id="skills"
                       name="skills"
                       className="col-span-3 border-black"
                     />
                   </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="file">Resume</Label>
                        <Input
                          id="file"
                          name="file"
                          type="file"
                          accept="application/pdf"
                          className="col-span-3 border-black"
                        />
                    </div>
                </div>
                <DialogFooter>
                    {
                     loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>: <Button type="submit" className=" w-full my-4 p-5 bg-black hover:bg-gray-800 text-white">Update</Button>
                    }
                </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
    
  );
};

export default UpdateProfileDialog
