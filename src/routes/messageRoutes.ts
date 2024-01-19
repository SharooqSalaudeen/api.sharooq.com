import { Router } from 'express'
import * as controllers from '../controllers/'

const router = Router()

export const auth = (router: Router): void => {}

router.post('/messages', controllers.createMessage)
router.get('/messages', controllers.getAllMessages)

export default router
