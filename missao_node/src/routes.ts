import { Router } from 'express'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'

const router = Router()
const createUsersController = new CreateUserController()
const createTagsController = new CreateTagsController()

router.post("/users",   createUsersController.handle )
router.post("/tags",    createTagsController.handle  )

export { router }