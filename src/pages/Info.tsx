import { Center, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';
import { AppContext } from '../components/Context/AppContext';
import CardInfo from '../components/Card/CardInfo';

interface IUserData {
  id: string;
  username: string;
  email: string;
  password: string;
  balance: number;
}

const Info = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);
  !isLoggedIn && navigate('/');

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <Center>
      <SimpleGrid columns={1} spacing={8}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={'xl'} color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={'Profile Data'}
              subContent={
                <>
                  <Text>Username: {userData.username}</Text>
                  <Text>Email: {userData.email}</Text>
                  <Text>Password: {userData.password}</Text>
                  <Text>Balance: {userData.balance}</Text>
                </>
              }
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Info;
