import { Usuario } from "./usuario";

export interface RegistroUsuario {
    createusuario(
        id_usuario: number
    ) : Promise <Usuario | null>
}

