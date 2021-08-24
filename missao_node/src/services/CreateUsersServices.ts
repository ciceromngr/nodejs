import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean
}

class CreateUsersService {

    async execute({ name, email, admin }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepositories)

        if (!email) throw new Error("Email is empty")

        const userAlreadyExists = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) throw new Error("User already exists")

        const user = userRepository.create({
            name,
            email,
            admin
        })

        await userRepository.save(user)

        return user
    }

}

export { CreateUsersService }