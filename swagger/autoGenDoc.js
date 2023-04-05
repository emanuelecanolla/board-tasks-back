const mongooseToSwagger = require('mongoose-to-swagger');
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['..index.js', '../src/routes.js']

let doc = {
    info: {
        version: "1.0.0",
        title: "API do BoardTasks",
        description: "Documentação da API do BoardTasks."
    },
    servers: [
        {
            url: "http://localhost:4000/",
            descripcion: "Servidor localhost."
        },
        {
            url: "http://boardtasks-back.vercel.app/",
            descripcion: "Servidor produção" 
        }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Documentação do Swagger gerada encontra-se no arquivo em" + outputFile);
    if(process.env.NODE_ENV !== 'production'){
        require("../index.js")
    }
})