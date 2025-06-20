import { useEffect, useState } from "react";
import FormCard from "../components/FormCard";
import InputWithLabel from "../components/InputWithLabel";
import Primary_button from "../components/button/Primary_button";
import MsgError from "../components/msg_alert/MsgWarn";
import MsgSucess from "../components/msg_alert/MsgSucess";
import CadastroProdutoService from "../services/ProdutoServer";
import SelectMenu from "../components/SelectMenu";
import CategoriaServer from "../services/CategoriaServer";
import MarcaServer from "../services/MarcaServer";

const CadastroProduto = () => {
  const [title, setTitle] = useState("");
  const [valor, setValor] = useState("");
  const [valorDesconto, setValorDesconto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [queimaEstoque, setQueimaEstoque] = useState(false);
  const [colecao, setColecao] = useState(false);
  const [linkImagem, setLinkImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [msgError, setMsgError] = useState("");
  const [msgSucess, setMsgSucess] = useState("");
  const [categorais, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);

  async function buscarCategoria() {
    const categorais = await CategoriaServer.findAll();
    setCategorias(categorais.data);
  }

  async function buscarMarca() {
    const marcas = await MarcaServer.findAll();
    setMarcas(marcas.data);
  }

  useEffect(() => {
    buscarCategoria();
    buscarMarca();
  }, []);

  //  const isCheckbox = type === "checkbox";

  const handerSubimit = async (e) => {
    e.preventDefault();
    const produto = {
      title: title,
      valor: valor,
      valorDesconto: valorDesconto,
      descricao: descricao,
      queimaEstoque: queimaEstoque,
      colecao: colecao,
      linkImagem: linkImagem,
      categoria: categoria,
      marca: marca,
    };

    try {
      console.log(produto);
      const dados = await CadastroProdutoService.criar(produto);
      setMsgSucess(dados.message);
      setMsgError("");
    } catch (error) {
      const msg = error.response.data.error;
      setMsgError(msg);
      setMsgSucess("");
    }
  };

  return (
    <>
      {msgError && <MsgError msg={msgError} />}
      {msgSucess && <MsgSucess msg={msgSucess} />}
      <form onSubmit={handerSubimit}>
        <FormCard title="Cadastro Produto">
          <InputWithLabel
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <InputWithLabel
            label="Valor"
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
          <InputWithLabel
            label="Valor desconto"
            type="text"
            value={valorDesconto}
            onChange={(e) => setValorDesconto(e.target.value)}
            required
          />
          <InputWithLabel
            label="Link Imagem"
            type="text"
            value={linkImagem}
            onChange={(e) => setLinkImagem(e.target.value)}
            required
          />
          <SelectMenu
            colecao={categorais}
            onChange={(e) => setCategoria(e.target.value)}
            label="Categorias"
          />
          <SelectMenu
            colecao={marcas}
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            label="Marcas"
          />
          <InputWithLabel
            label="Queima de estoque"
            value={queimaEstoque}
            onChange={(e) => setQueimaEstoque(e.target.checked)}
            type="checkbox"
          />
          <InputWithLabel
            label="Coleção"
            value={colecao}
            onChange={(e) => setColecao(e.target.checked)}
            type="checkbox"
          />
          <InputWithLabel
            label="Descricao"
            type="text-area"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Primary_button type="submit" style={{ width: "100%" }}>
            Cadastrar
          </Primary_button>
        </FormCard>
      </form>
    </>
  );
};

export default CadastroProduto;
