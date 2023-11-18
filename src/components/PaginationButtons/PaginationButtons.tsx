import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import styles from "./PaginationButtons.module.css";
import { UsersResponseType } from "@/src/types/user";

export default function PaginationButtons({
  nextUsers,
  previousUsers,
  handlePaginatedData,
}: {
  nextUsers: string;
  previousUsers: string;
  handlePaginatedData: (nextUsers: string) => void;
}) {
  console.log(nextUsers, previousUsers);
  return (
    <div className={styles.buttons_container}>
      <Button bg="#1d1283" color="white">
        Previous
      </Button>
      <Button
        bg="#1d1283"
        color="red"
        onClick={() => {
          console.log("sjdfoslkfd");
          handlePaginatedData(nextUsers);
        }}
      >
        Next
      </Button>
    </div>
  );
}
