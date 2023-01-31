import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FcHome, FcAbout, FcMenu } from "react-icons/fc";
import { FiKey } from "react-icons/fi";
import Link from "next/link";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Link href="/">
              <Box className="text-2xl font-bold text-blue-900 font-mono justify-center items-center flex space-x-2 ">
                <Avatar src="https://cdn-icons-png.flaticon.com/512/196/196266.png" />
                <h1>Realest</h1>
              </Box>
            </Link>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton as={IconButton} icon={<FcMenu />} />
              <MenuList>
                <Link href="/" passHref>
                  <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href="/search" passHref>
                  <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href="/search?purpose=for-sale" passHref>
                  <MenuItem icon={<FcAbout />}>Buy Properties</MenuItem>
                </Link>
                <Link href="/search?purpose=for-rent" passHref>
                  <MenuItem icon={<FiKey />}>Home</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
