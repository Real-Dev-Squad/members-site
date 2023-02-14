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
        <div className="text-center p-2">
          <Image
            src={newMemberImageSrc}
            className="rounded-full mx-auto"
            alt={newMemberName}
            width={60}
            height={60}
          />
          <p className="py-2 font-bold">{newMemberName}</p>
        </div>
      </div>
    </div>
  );
};

export default NewMembersCard;
