import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Empresas Manager API",
            version: "1.0.0",
            description: "API para un sistema de gestión de empresas que asistiran a INTERFER",
            contact:{
                name: "brandon soberanis",
                email: "baoberanis-2023433@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/empresasManager/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js",
        "./src/company/company.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}