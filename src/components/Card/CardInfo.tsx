import { Box, Text } from '@chakra-ui/react';

interface ICardInfo {
  mainContent: string;
  subContent: string | JSX.Element;
}

const CardInfo = ({ mainContent, subContent }: ICardInfo) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      minHeight="120px"
      width={320}
      padding={8}
      borderRadius="3px"
    >
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        {mainContent}
      </Text>
      <Text fontSize={'xl'}>
        {subContent}
        </Text>
    </Box>
  );
};

export default CardInfo;
