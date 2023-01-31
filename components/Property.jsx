import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex className="flex-wrap w-[420px] p-5 pt-0 justify-start cursor-pointer">
        <Box>
          <Image
            src={
              coverPhoto
                ? coverPhoto.url
                : "https://images.mktw.net/im-388199?width=700&size=1.3333333333333333"
            }
            alt="house"
            width="400"
            height="260"
          />
        </Box>
        <Box className="w-full ">
          <Flex
            className="pt-2 items-center
          justify-between
          "
          >
            <Flex
              className="items-center justify-space-between
            "
            >
              <Box className="pr-3 text-gray-400 flex items-center space-x-2">
                {isVerified && <GoVerified />}
                <Text className="font-bold text-lg">
                  AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Box>
            </Flex>
            <Box>
              <Avatar className="text-sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <div className="space-x-4 p-1 flex items-center justify-center text-blue-400  ">
            {rooms} {" | "} <FaBed /> {" | "} {baths}
            <FaBath /> {" | "} {millify(area)} sqft <BsGridFill />
          </div>
          <Text className="text-lg text-center">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
