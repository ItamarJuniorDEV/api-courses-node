const database = require('../models');

class PessoaController {
  static async pegaTodas(req, res){
    try {
      const listaDePessoa = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoa);
    } catch (erro) {

    } 
  }
}

module.exports = PessoaController;