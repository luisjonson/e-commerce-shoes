import { createContext, use, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';


// Criação do contexto
const UserContext = createContext();

// Provider que envolve a aplicação
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      try {
        setUser(JSON.parse(userCookie)); 
      } catch (e) {
        console.error('Erro ao ler cookie do usuário:', e);
        Cookies.remove('user');
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => useContext(UserContext);