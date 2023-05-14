import Navbar from "@/components/Layout/Navbar";
import { Box } from "@chakra-ui/react";
import NavbarDesktop from "./Navbar/NavbarDesktop";

type Props = {
  children?: JSX.Element;
};

export default function LayoutComponent({ children }: Props) {
  return (
    <Box>
      <NavbarDesktop />
      <Box as='main'>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
