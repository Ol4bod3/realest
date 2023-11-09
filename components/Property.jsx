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
      <Flex className="flex-wrap md:w-[420px] w-full p-5 pt-0 justify-start cursor-pointer">
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
          <Flex className="items-center justify-between pt-2 ">
            <Flex className="items-center justify-space-between ">
              <Box className="flex items-center pr-3 space-x-2 text-gray-400">
                {isVerified && <GoVerified />}
                <Text className="text-lg font-bold">
                  AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
                </Text>
              </Box>
            </Flex>
            <Box>
              <Avatar className="text-sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <div className="flex items-center justify-center p-1 space-x-4 text-blue-400 ">
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
