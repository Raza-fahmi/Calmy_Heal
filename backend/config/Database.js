import { Sequelize } from "sequelize";

const db = new Sequelize("calmy_healdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
