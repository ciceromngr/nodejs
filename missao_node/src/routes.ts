import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplementsController } from './controllers/CreateComplimentsController'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()
const createUsersController = new CreateUserController()
const createTagsController = new CreateTagsController()
const createComplementsController = new CreateComplementsController()
const authenticateUserController = new AuthenticateUserController()

router.post("/users", createUsersController.handle)
router.post("/tags", ensureAdmin, createTagsController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplementsController.handle)

export { router }