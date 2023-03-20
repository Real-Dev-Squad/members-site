import React from "react";
import Image from "next/image";
import styles from "./userProfile.module.css";

export default function UserProfile() {
  const userDetails = {
    name: "Ankush Dharkar",
    designation: "SDE",
    company: "Amazon",
    userImage:
      "https://res.cloudinary.com/realdevsquad/image/upload/w_200,h_200/profile/XAF7rSUvk4p0d098qWYS/syvexswtmz6hx7nghrs4",
    userHandle: "@ankush",
  };

  return (
    <section
      className="px-10 py-10 top-4 sticky h-[10rem]"
    >
      <Image
        width={180}
        height={180}
        src={userDetails.userImage}
        className="rounded-full"
        alt={`${userDetails.name ?? "users"} profile picture`}
      />
      <h1 className="text-2xl mt-2 font-bold">{userDetails.name}</h1>
      <span className="text-base font-bold text-[#455a64]">
        {userDetails.userHandle}
      </span>
      <br></br>
      <div className="mt-1">
        <span className="text-lg">{userDetails.designation}</span>
        <br></br>
        <span className="text-base font-bold text[#0e141]">
          {userDetails.company}
        </span>
        <div> 
          
        </div>
      </div>
    </section>
  );
}
