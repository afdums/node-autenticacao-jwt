const app = require('../src/app');

require("dotenv-safe").config();

app.listen(3000, function () {
    console.log('API na porta 3000!');
});