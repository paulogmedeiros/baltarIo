const repository = require('../repositories/customer-repository');
const md5 = require('md5');


exports.post = async (req, res, next) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    await repository
      .create({
        name: name,
        email: email,
        password: md5(password + global.SALT_KEY), // bcrypt
        roles: ['user']
      })

    res.status(201).send({
      message: 'Cliente cadastrado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.authenticate = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    const customer = await repository.authenticate({
      email: email,
      password: md5(password + global.SALT_KEY)
    });

    if (!customer) {
      res.status(400).send({
        message: 'Usuario ou senha inválidos'
      });
      return;
    }

    const token = authService.generateToken({
      id: custumer._id,
      email: customer.email,
      name: customer.name,
      roles: customer.roles

    })

    res.status(201).send({
      token: token,
      data: {
        email: customer.email,
        name: customer.name
      }
    });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};