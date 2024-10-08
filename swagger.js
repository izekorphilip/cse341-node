const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        desription: 'Users Api'
    },
    host: 'localhost: 833',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index'];

swaggerAutogen(outputFile, endpointFiles, doc);