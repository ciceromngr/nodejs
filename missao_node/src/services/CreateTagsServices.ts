import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class CreateTagsService {

    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if (!name) throw new Error("Incorrect Tag name!")

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if (tagAlreadyExists) throw new Error("Tag Already Exists!")

        const tag = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(tag)

        return tag
    }

}

export { CreateTagsService }