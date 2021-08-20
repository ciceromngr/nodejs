import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("users")
class Users {

    @PrimaryColumn() //Chave Primaria
    readonly id: string // Readonly para meu id ser apenas de leitura, pq a insercao do id vai ser a propria entidade

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    admin: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if(!this.id) {
            this.id = uuid() 
        }
    }
}


export { Users }