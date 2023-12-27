import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import styles from "./PaginationButtons.module.css";
import { UsersResponseType } from "@/src/types/user";

export default function PaginationButtons({
  nextUsers,
  previousUsers,
  handleNextClick,
  handlePreviousClick
}: {
  nextUsers: string;
  previousUsers: string;
  handleNextClick: (nextUsers: string) => void;
  handlePreviousClick: (previousUsers: string) => void;
}) {
 
  return (
    <div className={styles.buttons_container}>
      <Button bg="#1d1283" color="white"
       onClick={() => {
        handlePreviousClick(previousUsers);
      }}
      >
        Previous
      </Button>
      <Button
        bg="#1d1283"
        color="white"
        onClick={() => {
          handleNextClick(nextUsers);
        }}
      >
        Next
      </Button>
    </div>
  );
}
