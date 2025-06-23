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
import { Generos } from '../utils/Generos'
import { Estados } from '../utils/Estados'
import {formatarMoeda, parseFloatComMoeda} from "../utils/Utils";

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
  const [genero, setGenero] = useState("");
  const [estadoProduto, setEstadoProduto] = useState("");

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

  const handerSubmit = async (e) => {
    e.preventDefault();
    const produto = {
      titulo: title,
      preco: parseFloat(parseFloatComMoeda(valor)),
      valorDesconto: parseFloat(parseFloatComMoeda(valorDesconto)),
      descricao: descricao,
      queimaEstoque: queimaEstoque,
      colecao: colecao,
      linkImagem: linkImagem,
      categoria: categoria,
      marca: marca,
      genero: genero,
      estadoProduto: estadoProduto,
    };

    try {
      console.log(produto);
      const dados = await CadastroProdutoService.criar(produto);
      console.log(dados.data);
      setMsgSucess(dados.data.message);
      setMsgError("");
      limparCampos();
    } catch (error) {
    // Tenta pegar mensagem de erro do response se existir
    const msg = error.response?.data?.message || error.message || "Erro ao cadastrar produto.";
    setMsgError(msg);
    setMsgSucess("");
    }
  };

  const limparCampos = () => {
    setTitle(""); 
    setValor("");
    setValorDesconto("");
    setDescricao("");
    setQueimaEstoque(false);
    setColecao(false);
    setLinkImagem("");
    setCategoria("");
    setMarca("");
    setGenero("");
    setEstadoProduto("");
  };

  const handleChangeValor = (e) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarMoeda(valorDigitado);
    setValor(valorFormatado);
  };
  const handleChangevalorDesconto = (e) => {
    const valorDigitado = e.target.value;
    const valorFormatado = formatarMoeda(valorDigitado);
    setValorDesconto(valorFormatado);
  };

  return (
    <>
      {msgError && <MsgError msg={msgError} />}
      {msgSucess && <MsgSucess msg={msgSucess} />}
      <form onSubmit={handerSubmit}>
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
            onChange={handleChangeValor}
            required
          />
          <InputWithLabel
            label="Valor desconto"
            type="text"
            value={valorDesconto}
            onChange={handleChangevalorDesconto}
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
            colecao={categorais.map(cat => ({
              id: cat.numsequencial,
              nome: cat.nome
            }))}
            optionKey="id"
            optionValue="nome"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            label="Categorias"
          />
          <SelectMenu
            colecao={marcas.map(cat => ({
              id: cat.numsequencial,
              nome: cat.nome
            }))}
            optionKey="id"
            optionValue="nome"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            label="Marcas"
          />
          <SelectMenu
            colecao={Object.entries(Generos).map(([key, value]) => ({ numsequencial: key, nome: value }))}
            optionKey="numsequencial"
            optionValue="nome"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            label="Gêneros"
          />
          <SelectMenu
            colecao={Object.entries(Estados).map(([key, value]) => ({ numsequencial: key, nome: value }))}
            optionKey="numsequencial"
            optionValue="nome"
            value={estadoProduto}
            onChange={(e) => setEstadoProduto(e.target.value)}
            label="Gêneros"
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
