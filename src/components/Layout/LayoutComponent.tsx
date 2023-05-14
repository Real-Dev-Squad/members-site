import Navbar from "@/components/Layout/Navbar";
import { Box, useMediaQuery } from "@chakra-ui/react";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";

type Props = {
  children?: JSX.Element;
};

export default function LayoutComponent({ children }: Props) {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  let NavbarComponent;

  if (isLargerThan1024) NavbarComponent = <NavbarDesktop />
  else NavbarComponent = <NavbarMobile />
  
  return (
    <Box>
      <>{NavbarComponent}</>
      <Box as='main'>
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
