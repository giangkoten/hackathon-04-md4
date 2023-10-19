import db from "../utils/database";
export const getAllCatelory = async () => {
  return db.execute(`SELECT * FROM catelory`);
};
export const getOne = async (id: number) => {
  return db.execute(`SELECT * FROM catelory WHERE idCatelory = ${id}`);
};
