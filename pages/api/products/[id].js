import { poool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getProduct = async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await poool.query("SELECT * FROM images WHERE id = ?", [
      id,
    ]);
    return res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.query;
  try {
    // throw new Error("not implemented");
    await poool.query("DELETE FROM images WHERE id = ?", [id]);
    return res.status(204).json();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.query;
  const { name, description, Url } = req.body;
  try {
    await poool.query(
      "UPDATE images SET name = ?, description = ?, Url = ? WHERE id = ?",
      [name, description, Url, id]
    );
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
