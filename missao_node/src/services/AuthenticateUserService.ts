import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepositories)

        // Verificar se email ja existe
        const user = await userRepository.findOne({ email })

        if (!user) throw new Error("Email/Password incorrect!")

        // Verificar se senha esta correta
        const passwordMatch = await compare(password, user.password) // Ele vai comparar se a senha que o user didigitou bate com a senha hasheada no banco

        if (!passwordMatch) throw new Error("Email/Password incorrect!")

        // Gerar o Token
        const token = sign({ email },
            "330fc70191ba2528a5fe7ff13a25e4e9",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )

        return token
    }

}

export { AuthenticateUserService }