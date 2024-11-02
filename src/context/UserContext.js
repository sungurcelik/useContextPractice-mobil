/**
 * Context API:
 * Uygulamada birden çok bileşenin ihtiyacı olan verilerin bileşenden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar
 * Context yapısı içinde verilerin stati ve verileri değiştirmeye yarayan fonksiyonları tutabiliriz.
 */
import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{users, error, loading}}>
      {children}
    </UserContext.Provider>
  );
};
