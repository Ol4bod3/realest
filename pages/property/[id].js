import { Box, Flex, Spacer, Text, Avater, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import ImageScrollbar from "../../components/ImageScrollbar";

import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box className="max-w-[1000px] m-auto p-4">
    {photos && <ImageScrollbar data={photos} />}
    <Box className="w-full p-6">
      <Flex
        className="pt-2 items-center
          justify-between
          "
      >
        <Flex
          className="items-center justify-between
            "
        >
          <Box className="pr-3 text-green-400 flex items-center space-x-2">
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
      <Flex className="space-x-4 p-1 items-center justify-center text-blue-400  ">
        {rooms} {" | "} <FaBed /> {" | "} {baths}
        <FaBath /> {" | "} {millify(area)} sqft <BsGridFill />
      </Flex>
      <Box className="mt-2">
        <Text className="text-lg text-center mb-2 font-bold">{title}</Text>
        <Text className="leading-8 text-gray-600">{description}</Text>
      </Box>
      <Flex className="flex-wrap uppercase   justify-between">
        <Flex className="justify-between w-[400px] border-b-2 border-gray-100 p-3">
          <Text>Type</Text>
          <Text className="font-bold">{type}</Text>
        </Flex>
        <Flex className="justify-between w-[400px] border-b-2 border-gray-100 p-3">
          <Text>Purpose</Text>
          <Text className="font-bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex className="justify-between w-[400px] border-b-2 border-gray-100 p-3">
            <Text>Furnishing Status</Text>
            <Text className="font-bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text className="text-2xl font-bold mt-5">Amenities</Text>
        )}
        <Flex className="flex-wrap">
          {amenities.map((item) =>
            item.amenities.map((amenity) => (
              <Text
                className="font-bold text-blue-400 text-md  p-2 bg-gray-200 m-1 rounded-lg"
                key={amenity.text}
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
