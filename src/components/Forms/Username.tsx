import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import React from 'react';

interface IUsernameInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const UsernameInput = ({ value, onChange, onKeyDown }: IUsernameInput) => {
  return (
    <InputGroup size="md">
      <Input
        fontSize="xs"
        placeholder="exampleUser"
        focusBorderColor="#6a62d2"
        variant="filled"
        borderRadius="2px"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} // Adiciona o onKeyDown
      />
      <InputRightElement width="4.5rem"></InputRightElement>
    </InputGroup>
  );
};
