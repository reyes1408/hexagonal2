import { Usuario } from "../usuario";

export default interface INotificationNewUsuario{
    enviarNotificacion(usuario: Usuario) : Promise<boolean>
}