const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  getAll,
  findBy,
  findById,
  remove,
}

function getAll() {
  return db("users");
}

function add(user) {
  return db("users").insert(user);
}

function findBy(user) {
  return db("users").where(user).first();
}

function findById(id) {
  return db("users").where({ id }).first();
}

function remove(id) {
  return db("users").where({ id }).first().del();
}
