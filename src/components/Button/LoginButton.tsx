import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IDButton {
  onClick: MouseEventHandler;
}

export const LoginButton = ({ onClick }: IDButton) => {
  return (
    <Button
      onClick={onClick}
      width="100%"
      borderRadius="2px"
      bg="#746bde"
      color="#FFFFFF"
      size="md"
      fontWeight="600"
      letterSpacing="0.8px"
      _hover={{
        bg: '#6a62d2',
      }}
    >
      SIGN IN
    </Button>
  );
};
