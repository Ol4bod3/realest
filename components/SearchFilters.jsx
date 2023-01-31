import { useEffect, useState } from "react";
import { Flex, Select, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
      query[item.name] = item.value;
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex className="bg-gray-100 p-4 justify-center flex-wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            className="w-fit p-2 "
            placeholder={filter.placeholder}
            onChange={(e) =>
              searchProperties({
                [filter.queryName]: e.target.value,
              })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
