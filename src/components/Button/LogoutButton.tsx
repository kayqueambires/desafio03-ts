import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface IDButton {
  onClick: MouseEventHandler;
}

export const LogoutButton = ({ onClick }: IDButton) => {

  return (
    <>
      <Button
        onClick={onClick}
        borderRadius="2px"
        bg="#FFFFFF"
        color="#746bde"
        size="md"
        fontWeight="600"
        letterSpacing="0.8px"
      >
        Logout
      </Button>
    </>
  );
};
