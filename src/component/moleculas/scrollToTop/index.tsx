import React from "react";

import { useCallback } from "react";
import { Box } from "../../atoms/box";
import { Text } from "../../atoms/text";

export const ScrollToTopButton: React.FC = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Box
        bg="#85a8fb"
        width="30px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom="32px"
        right="32px"
        zIndex="1"
        borderRadius="10px"
        paddingBottom="5px"
        onClick={scrollToTop}
      >
        <Text fontSize="30px">
          ↑
        </Text>
      </Box>
      
    </>
  );
};
