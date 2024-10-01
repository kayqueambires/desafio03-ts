import { Box } from '@chakra-ui/react';

export const Card = ({ children }: any) => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="3px"
        padding={['10px', '15px', '25px']}
        fontWeight="600"
        letterSpacing="0.8px"
        width={['90%', '80%', '350px']}
        maxWidth={['90%', '80%', '350px']}
        maxHeight="90vh"
        boxShadow="lg"
        margin={['10px auto', '20px auto']}
        display="flex"
        flexDirection="column"
        transform={['scale(1)', 'scale(1.2)', 'scale(1.5)']}
        transition="transform 0.3s ease"
      >
        {children}
      </Box>
    </Box>
  );
};
