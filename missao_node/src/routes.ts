import { Router } from 'express'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()
const createUsersController = new CreateUserController()
const createTagsController = new CreateTagsController()

router.post("/users",   createUsersController.handle )
router.post("/tags",    ensureAdmin,createTagsController.handle  )

export { router }