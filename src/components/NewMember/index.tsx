import React from "react";
import Image from "next/image";

type NewMembersCardProps = {
  newMemberFirstName: string;
  newMemberLastName: string;
  newMemberImageSrc: string;
};

const NewMembersCard = ({
  newMemberFirstName,
  newMemberLastName,
  newMemberImageSrc,
}: NewMembersCardProps) => {
  return (
    <div className="flex bg-white max-w-sm rounded-md transition-shadow duration-300 h-35 overflow-hidden">
      <div className="p-4 rounded-md">
        <div className="text-center p-2">
          <Image
            src={newMemberImageSrc}
            className="rounded-full mx-auto"
            alt={`${newMemberFirstName} ${newMemberLastName}`}
            width={60}
            height={60}
          />
          <p className="py-2 font-bold">{`${newMemberFirstName} ${newMemberLastName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default NewMembersCard;
