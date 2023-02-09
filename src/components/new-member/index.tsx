import React from "react";
import Image from "next/image";

const NewMembersCard = ({
  newMemberName,
  newMemberImageSrc,
}: {
  newMemberName: string;
  newMemberImageSrc: string;
}) => {
  return (
    <div className="flex bg-white max-w-sm rounded-md transition-shadow duration-300 h-35 overflow-hidden">
      <div className="flex-col p-4 cursor-default flex-1 rounded-md border-0 shadow-none">
        <div>
          <Image
            src={newMemberImageSrc}
            className="w-12 h-12 rounded-full mx-auto visible-visible opacity-1"
            alt="Avatar"
          />
        </div>
        <h2 className="text-sm py-2 font-bold font-roboto">{newMemberName}</h2>
      </div>
    </div>
  );
};

export default NewMembersCard;
