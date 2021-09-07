const model = require("../models/argoModel");

exports.create = async (req, res) => {
  const { name } = req.body;

  try {
    console.log(req.body);
    const data = await model.create(name);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send(err.message);
  }
};

exports.getAll = async (req, res) => {
    try {
    var data = await model.getAll();
    res.render("index.ejs", { argonautes: data.rows });
  } catch (err) {
    console.error(err);
    res.render("error.ejs", { message:"Une erreur est survenue, veuillez réessayer plus tard" });
  }
};

exports.error404 = async (req, res) => {
  res.render("error.ejs", { message:"La ressource est introuvable" });
};
