exports.welcome = async(req, res) => {
    res.status(200).send({message: 'Ola, aqui é a calculadora'})
};

exports.returnPi = async(req, res) => {
    try {
        const pi = 3.14;
        res.status(200).send({pi: pi});
    } catch (e ) {
        res.status(500).send({error: 'Falha ao retornar PI'});
    }
};

exports.soma = async(req, res) => {
    try {
        const num1 = parseInt(req.body.num1);
        const num2 = parseInt(req.body.num2);
        let result = num1 + num2;
        res.status(200).send({result: result})
    } catch (e) {
        res.status(500).send({error: 'Falha ao somar 2 números'});
    }
};