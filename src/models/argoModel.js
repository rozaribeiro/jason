const db = require("../db");

exports.create = async (name) => {
  return await db.query("INSERT INTO membres (name) VALUES ($1)", [name]);
};

exports.getAll = async () => {
  return await db.query("SELECT * FROM membres ORDER BY name");
};
