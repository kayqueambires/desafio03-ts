import { Box, Center, FormControl, FormLabel } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/login';
import { AppContext } from '../components/Context/AppContext';
import { Card } from '../components/Card/Card';
import { LoginButton } from '../components/Button/LoginButton';
import { PasswordInput } from '../components/Forms/Password';
import { UsernameInput } from '../components/Forms/Username';
import { changeLocalStorage } from '../services/storage';

const Home = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const validateUser = async (username: string, password: string) => {
    const loggedIn = await login(username, password);
    
    if (!loggedIn) {
      return alert('Invalid username or password');
    }

    changeLocalStorage({ login: true });
    setIsLoggedIn(true);
    navigate('/account/1');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      validateUser(username, password);
    }
  };

  return (
    <Box>
      <Card>
        <Center padding="15px" color="#454545">
          <h1>SIGN IN TO YOUR ACCOUNT</h1>
        </Center>
        <Box
          padding="15px"
          display="flex"
          flexDirection="column"
          gap="10px"
          marginTop="5px"
        >
          <FormControl>
            <FormLabel fontSize={['sm', 'xs']} color="#666666" mb="1">
              Enter your username
            </FormLabel>
            <UsernameInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={['sm', 'xs']} color="#666666" mb="1">
              Enter your password
            </FormLabel>
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </FormControl>
        </Box>

        <Box padding="15px" marginTop="5px">
          <LoginButton onClick={() => validateUser(username, password)} />
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
