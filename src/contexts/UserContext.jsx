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
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      await auth.login(userData); // autentica e backend já seta o cookie
      const dados = await auth.usuarioLogado(); // pega usuário autenticado
      setUser(dados.data);
      setMsgError("");
      navigate("/", {
        state: { msg: "Login realizado com sucesso!" },
      });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setMsgError(error.response?.data?.erro || "Erro ao fazer login.");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
    Cookies.remove("token");
  };

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const dados = await auth.usuarioLogado();
        setUser(dados.data);
      } catch (error) {
        setMsgError(error)
        Cookies.remove("token");
      }
    };

    carregarUsuario();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, msgError }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar o contexto
export const useUser = () => useContext(UserContext);