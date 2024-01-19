import { Document } from 'mongoose'

export interface IMessage extends Document {
    fullName: string
    email: string
    message: string
}
