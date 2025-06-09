export function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function porcentagemDesconto (preco,  precoPromocional) {
  return Math.round(((preco - precoPromocional) / preco) * 100);
};
