import { Box, Center, Flex, Spacer } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import { LogoutButton } from '../Button/LogoutButton';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Flex
      backgroundColor="#6a62d2"
      paddingTop="10px"
      paddingRight="10px"
      alignItems="center"
      fontFamily="Josefin Sans, sans-serif"
      fontWeight="800"
      fontSize={['24px', '28px', '30px']}
      color="#FFFFFF"
      letterSpacing="0.8px"
      width="100%"
    >
      <Box width="100%" position="absolute" top="10px">
        <Center>KyoneDashboard</Center>
      </Box>
      <Spacer />
      {isLoggedIn && <LogoutButton onClick={logout} />}
    </Flex>
  );
};
