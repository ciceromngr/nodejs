import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from 'bcryptjs'


interface IUserRequest {
    name: string,
    email: string,
    password: string,
    admin?: boolean
}

class CreateUsersService {

    async execute({ name, email, password, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories)

        if (!email) throw new Error("Email is empty")

        const userAlreadyExists = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) throw new Error("User already exists")

        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            password: passwordHash,
            admin
        })

        await userRepository.save(user)

        return user
    }

}

export { CreateUsersService }