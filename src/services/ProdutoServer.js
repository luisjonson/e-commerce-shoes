import { APIBACKEND } from ".";

const findAll = async () => {
  return await APIBACKEND.get("/produtos");
};

const criar = async (produto) => {
  return await APIBACKEND.post("/produto", produto);
};

export default { findAll, criar };
