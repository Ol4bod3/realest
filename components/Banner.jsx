import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => {
  return (
    <Flex className="mybg flex justify-center align-center items-center mb-4">
      <Box p="5">
        <Text className="text-gray-100 text-sm font-medium">{purpose}</Text>
        <Text className="lg:text-6xl text-4xl font-bold text-white py-4">
          {title1} <br /> {title2}
        </Text>
        <Text className="text-2xl pt-3 pb-3 text-gray-300">
          {desc1} <br /> {desc2}
        </Text>
        <button className="text-lg hover:bg-transparent hover:border hover:border-blue-300 hover:text-white  bg-blue-200 p-2 rounded-xl text-gray-900">
          <Link href={linkName}>{buttonText}</Link>
        </button>
      </Box>
    </Flex>
  );
};

export default Banner;
