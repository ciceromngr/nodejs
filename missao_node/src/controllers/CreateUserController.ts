import { Response, Request } from 'express'
import { CreateUsersService } from '../services/CreateUsersServices'

class CreateUserController{
    async handle(req: Request, res: Response) {
        const {name, email, admin} = req.body

        const createUsersService = new CreateUsersService()

        const user = await createUsersService.execute({name, email, admin})

        return res.json(user)
    }
}

export { CreateUserController }