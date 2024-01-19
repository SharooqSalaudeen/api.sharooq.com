import { Request, Response } from 'express'
import * as services from '../services'

export const createMessage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const message = await services.createMessage(req.body)
        res.status(201).json(message)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const getAllMessages = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const messages = await services.getAllMessages()
        res.json(messages)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
