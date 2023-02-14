import React from "react";
import Image from "next/image";

type NewMembersCardProps = {
  newMemberName: string;
  newMemberImageSrc: string;
};

const NewMembersCard = ({
  newMemberName,
  newMemberImageSrc,
}: NewMembersCardProps) => {
  return (
    <div className="flex bg-white max-w-sm rounded-md transition-shadow duration-300 h-35 overflow-hidden">
      <div className="p-4 rounded-md">
        <div className="text-center">
          <Image
            src={newMemberImageSrc}
            className="w-12 h-12 rounded-full mx-auto"
            alt={newMemberName}
            width={50}
            height={50}
          />
          <p className="py-2 font-bold text-center">{newMemberName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewMembersCard;
