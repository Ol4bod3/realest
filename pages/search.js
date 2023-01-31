import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import notfound from "../assets/images/not-found.png";
import Property from "../components/Property";
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        className="cursor-pointer bg-gray-100 border-b-2 border-gray-200 p-2 font-bold text-lg items-center justify-center"
        onClick={() => setSearchFilters((prev) => !prev)}
      >
        <Text>Search Property By Filter</Text>
        <Icon className="pl-2 w-7 text-3xl" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text className="text-2xl p-4 font-bold">
        Properties {router.query.purpose}
      </Text>
      <Flex className="flex-wrap justify-center items-center">
        {properties.map((prop, i) => (
          <Property property={prop} key={i} />
        ))}
      </Flex>
      {[properties].length === 0 && (
        <Flex className="justify-center items-center flex-col mt-5 mb-5">
          <Image alt="Not Found" src={notfound} height="400" />
          <Text className="font-bold text-2xl">No Result Found</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.roomsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternal || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
