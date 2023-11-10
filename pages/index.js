import Head from "next/head";
import Banner from "../components/Banner";
import { Box, Flex } from "@chakra-ui/react";

import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

const index = ({ propsForRent, propsForSale }) => {
  return (
    <Box>
      <Banner
        purpose="REAT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.mktw.net/im-388199?width=700&size=1.3333333333333333"
      />

      <Flex className="flex-wrap items-center justify-center">
        {propsForRent.map((prop) => (
          <Property property={prop} key={prop.id} />
        ))}
      </Flex>

      <Banner
        purpose="Buy A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream  Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.mktw.net/im-388199?width=700&size=1.3333333333333333"
      />
      <Flex className="flex-wrap items-center justify-center">
        {propsForSale.map((prop) => (
          <Property property={prop} key={prop.id} />
        ))}
      </Flex>
    </Box>
  );
};

export default index;

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propsForSale: propertyForSale?.hits,
      propsForRent: propertyForRent?.hits,
    },
  };
}
