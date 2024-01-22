import rateLimit from 'express-rate-limit'

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 2, // limit each IP to 100 requests per windowMs
    message:
        'Too many requests from this IP, please try again after 15 minutes',
})
