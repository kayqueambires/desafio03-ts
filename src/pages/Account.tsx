import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { AppContext } from '../components/Context/AppContext';
import { format } from 'date-fns';
import CardInfo from '../components/Card/CardInfo';

interface IUserData {
  id: string;
  username: string;
  email: string;
  password: string;
  balance: number;
}

const Account = () => {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const { id } = useParams();
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

  const actualDate = new Date();

  if (userData && id !== userData.id) {
    navigate('/');
  }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size={'xl'} color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo ${userData?.username}`}
              subContent={format(actualDate, 'dd/MM/yyyy - HH:mm')}
            />
            <CardInfo
              mainContent="Saldo"
              subContent={`R$ ${userData?.balance.toFixed(2)}`}
            />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};

export default Account;
