import { useContext } from "react";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex className="justify-center items-center mr-1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        className="text-2xl cursor-pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex className="justify-center items-center mr-1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        className="text-2xl cursor-pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    className="overflow-hidden"
  >
    {data.map((item) => (
      <Box
        key={item.id}
        className="w-[910px] overflow-hidden p-1"
        itemId={item.id}
      >
        <Image
          alt="property"
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={200}
          sizes="(max-width:500px) 100px, (max-width): 1024px 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
