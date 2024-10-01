import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Box, Flex } from '@chakra-ui/react';

export const Layout = ({ children }: any) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      overflow="hidden"
    >
      <Header />
      
      <Box
        flex="1"
        backgroundColor="#6a62d2"
        fontFamily="Josefin Sans, sans-serif"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
      
      <Footer />
    </Flex>
  );
};
