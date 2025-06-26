import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/AuthServer";
import Cookies from "js-cookie";

// Criação do contexto
const UserContext = createContext();

// Provider que envolve a aplicação
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [msgError, setMsgError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        setLoading(true);
        const token = Cookies.get("token");
        
        if (token) {
          const dados = await auth.usuarioLogado();
          setUser(dados?.data);
        }
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        setMsgError(error.response?.data?.erro || "Erro ao carregar usuário.");
        Cookies.remove("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    carregarUsuario();
  }, []); 

  const login = async (userData) => {
    try {
      setLoading(true);
      await auth.login(userData); // autentica e backend já seta o cookie
      const dados = await auth.usuarioLogado(); // pega usuário autenticado
      console.log("Usuário autenticado:", dados.data);
    
      setUser(dados.data);
      setMsgError("");
      navigate("/", {
        state: { msg: "Login realizado com sucesso!" },
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMsgError(error.response?.data?.erro || "Erro ao fazer login.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setMsgError("");
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout, 
      msgError, 
      loading 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);