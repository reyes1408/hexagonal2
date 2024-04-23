import express from "express"
import { conexionDB } from './database/database'

const app = express();

app.use(express.json());

async function connectionToServer() {
    try {
        await conexionDB()
        app.listen(3001, () => {

            console.log("Servidor corriendo en el puerto 3001");
            
        })

    } catch (error) {
        console.log("No se pudo establecer conexion con el servidor.", error);
        
    }
}

connectionToServer();
