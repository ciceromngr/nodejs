import { Request, Response } from "express";
import { ListUserReceiveComplimentsServices } from "../services/ListUserReceiveComplimentsServices";


class ListUserReceiveComplimentsController {

    async handle(req: Request, res: Response) {

        const { user_id } = req

        const listUserReceiveComplimentsSerice = new ListUserReceiveComplimentsServices()

        const compliments = await listUserReceiveComplimentsSerice.execute(user_id)

        return res.json(compliments)
    }

}

export { ListUserReceiveComplimentsController }