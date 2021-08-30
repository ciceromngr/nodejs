import { Request, Response } from "express";
import { ListUserSenderComplimentsServices } from "../services/ListUserSenderComplimentsServices";


class ListUserSenderComplimentsController {

    async handle(req: Request, res: Response) {

        const { user_id } = req

        const listUserSenderComplimentsServices = new ListUserSenderComplimentsServices()

        const compliments = await listUserSenderComplimentsServices.execute(user_id)

        return res.json(compliments)
    }

}

export { ListUserSenderComplimentsController }