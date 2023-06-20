import { createPool } from "mysql2/promise";

const poool = createPool({
  host: "localhost",
  user: "root",
  password: "Keyner1105Ko",
  port: 3306,
  database: "image",
});

export { poool };
