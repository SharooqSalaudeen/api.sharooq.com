import { Message } from '../models'
import { IMessage } from '@/types'

export const createMessage = async (data: IMessage): Promise<IMessage> => {
    const message = new Message(data)
    return message.save()
}

export const getAllMessages = async (): Promise<IMessage[]> => {
    return Message.find({})
}
