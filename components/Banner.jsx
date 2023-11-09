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
    <Flex className="flex items-center justify-center mb-4 mybg align-center">
      <Box p="5">
        <Text className="text-sm font-medium text-gray-100">{purpose}</Text>
        <Text className="py-4 text-4xl font-bold text-white lg:text-6xl">
          {title1} <br /> {title2}
        </Text>
        <Text className="pt-3 pb-3 text-2xl text-gray-300">
          {desc1} <br /> {desc2}
        </Text>
        <button className="p-2 px-4 text-lg text-gray-900 bg-blue-200 hover:bg-transparent hover:border hover:border-blue-300 hover:text-white rounded-xl">
          <Link href={linkName}>{buttonText}</Link>
        </button>
      </Box>
    </Flex>
  );
};

export default Banner;
