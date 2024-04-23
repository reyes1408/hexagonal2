import { DataType, Column, Model, Table, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName: "idNewUser",
    timestamps: false
})
class ResgistroUsuario extends Model {
    @Column ({
        type:DataType.INTEGER,
        primaryKey: true
    })
    public id_usuario!: number;
}

export default ResgistroUsuario;
