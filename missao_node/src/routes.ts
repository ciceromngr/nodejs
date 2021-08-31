import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplementsController } from './controllers/CreateComplimentsController'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUsersController } from './controllers/ListUsersController'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()
const createUsersController = new CreateUserController()
const createTagsController = new CreateTagsController()
const createComplementsController = new CreateComplementsController()
const authenticateUserController = new AuthenticateUserController()

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSenderComplimentsController = new ListUserSenderComplimentsController()

const listTagsController = new ListTagsController()

const listUsersController = new ListUsersController()

router.post("/users", createUsersController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagsController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplementsController.handle)

router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.handle)

router.get("/tags", ensureAuthenticated, listTagsController.handle)

router.get("/users", ensureAuthenticated, ensureAdmin, listUsersController.handle)

export { router }