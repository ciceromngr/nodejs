import { Request, Response } from "express";
import { ComplimentsServices } from "../services/ComplimentsServices";


class CreateComplementsController {
    async handle(req: Request, res: Response) {
        const { tag_id, user_sender, user_receiver, message } = req.body
        
        const complimentsServices = new ComplimentsServices()
        
        const compliments = await complimentsServices.execute({tag_id,user_sender, user_receiver,message})

        return res.json(compliments)
    }
}

export { CreateComplementsController }