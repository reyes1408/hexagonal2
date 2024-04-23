import { Usuario } from "../../dominio/usuario";

export interface IMensajeService {
    enviarMensaje(usuario : Usuario) : string
}
