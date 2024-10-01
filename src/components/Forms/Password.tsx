import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

interface IPasswordInput {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({ onKeyDown, value, onChange }: IPasswordInput) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        type={show ? 'text' : 'password'}
        placeholder="∗∗∗∗∗∗∗∗∗∗"
        fontSize="xs"
        sx={{
          '::placeholder': {
            letterSpacing: '0.2em',
          },
        }}
        variant="filled"
        borderRadius="2px"
        focusBorderColor="#6a62d2"
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <InputRightElement
        width="4.5rem"
        top="50%"
        left="80%"
        transform="translateY(-50%)"
      >
        <Button h="1.75rem" size="sm" onClick={handleClick} variant="link">
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
