import { Request, Response } from "express";
import { CreateTagsService } from "../services/CreateTagsServices";


class CreateTagsController {

    async handle(req: Request, resp: Response) {
        
        const { name } = req.body

        const createTagssService = new CreateTagsService()

        const tags = await createTagssService.execute(name)

        return resp.json(tags)
    }
}

export { CreateTagsController }