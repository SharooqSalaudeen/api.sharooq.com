import express from 'express'
import messageRoutes from './messageRoutes' // Adjust with your actual route file names
// import anotherRoutes from './anotherRoutes';

const router = express.Router()

// Create a simple route
router.get('/portfolio/', (_req, res) => {
    res.send('Hello World with TypeScript!')
})

router.use('/portfolio/', messageRoutes)
// router.use('/another', anotherRoutes);

export default router
