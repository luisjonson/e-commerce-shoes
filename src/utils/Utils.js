export function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function porcentagemDesconto(preco, precoPromocional) {
  return Math.round(((preco - precoPromocional) / preco) * 100);
}

export function formatarMoeda(valor) {
  const numero = parseInt(valor.replace(/\D/g, ""), 10) / 100;
  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function parseFloatComMoeda(valor) {
  return parseFloat(valor.replace(/[^0-9,-]+/g, "").replace(",", "."));
}
