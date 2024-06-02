// pages/createpost.jsx
"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../shad/ui/button';
import { Toaster } from '../shad/ui/sonner';
import { format } from 'date-fns';
import { Separator } from '../shad/ui/separator';
import { UploadCloud } from 'lucide-react';

const SERVER_URL = "http://localhost:3000";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    imgUrl: '',
    caption: '',
  });

  async function handleChange(e) {
    try {
      const file = e.target.files[0];
      const data = new FormData();
      data.append("file", file);

      const response = (await axios.post(`${SERVER_URL}/api/upload`, data)).data;

      if (response.url) {
        Toaster.success("Image Uploaded Successfully!", {
          description: `Uploaded on ${format(new Date(response.created_at), "do MMMM yyyy")}`,
        });
        setPostData({ ...postData, imgUrl: response.url });
      }
    } catch (error) {
      console.log(error);
      Toaster.error("Image Upload Failed");
    }
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(`${SERVER_URL}/api/posts`, postData);

      if (response.status === 201) {
        Toasteroast.success("Post Created Successfully!");
      }
    } catch (error) {
      console.log(error);
      Toaster.error("Post Creation Failed");
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-10">
      <h2 className="text-lg font-medium">Create New Post</h2>
      <Separator />
      <div className="flex flex-col gap-4 items-center justify-center h-[500px]">
        <UploadCloud className="w-16 h-16 text-neutral-600" />
        <p className="font-semibold text-sm">
          Drag photos and video here
        </p>
        <Button className="cursor-pointer" size="sm" variant="blue">
          <label htmlFor="upload">Select from computer</label>
          <input type="file" id="upload" onChange={handleChange} accept=".jpg, .jpeg, .png" hidden />
        </Button>
        {postData.imgUrl && (
          <div className="w-full mt-4">
            <img src={postData.imgUrl} alt="Uploaded" className="w-full h-auto" />
            <textarea
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter a caption..."
              value={postData.caption}
              onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
            />
          </div>
        )}
        <Button onClick={handleSubmit}>Create Post</Button>
      </div>
    </div>
  );
        // <CreatePost isOpen={isCreatePostOpen} setIsOpen={setIsCreatePostOpen} /> 

  
};

export default CreatePost;
