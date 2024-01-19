import mongoose from 'mongoose'
import { IMessage } from '@/types'

const messageSchema = new mongoose.Schema({
    fullName: { type: String, required: false },
    email: { type: String, required: false },
    message: { type: String, required: false },
})

const Message = mongoose.model<IMessage>('messages', messageSchema)
export default Message
